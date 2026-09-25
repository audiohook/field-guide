import { readFileSync } from 'node:fs';
import { join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'tinyglobby';
import { defineCollection, type Loader } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const handbookFiles = ['README.md', 'LEADERSHIP_GUIDE.md', 'PROCESS_TEMPLATE.md', '0*/**/*.md'];

function pageId(entry: string) {
  const withoutExtension = entry.replace(/\.mdx?$/i, '');
  if (withoutExtension === 'README' || withoutExtension.endsWith('/README')) {
    return withoutExtension.replace(/README$/, 'index');
  }
  return withoutExtension;
}

function titleFromMarkdown(source: string, fallback: string) {
  const match = source.match(/^#\s+(.+)$/m);
  return match?.[1]?.replace(/\s+#+\s*$/, '').trim() || fallback;
}

function bodyWithoutTitle(source: string) {
  return source.replace(/^#\s+.+(?:\r?\n)+/, '');
}

function sitePath(file: string) {
  const id = pageId(file);
  if (id === 'index') return '/';
  const slug = id.endsWith('/index') ? id.slice(0, -'/index'.length) : id;
  return `/${slug}/`;
}

function rewriteDocLinks(source: string, file: string) {
  return source.replace(/\]\(([^)\s]+)\)/g, (match, href: string) => {
    if (/^[a-z]+:/i.test(href) || href.startsWith('#') || href.startsWith('/')) return match;
    const hashIndex = href.indexOf('#');
    const pathPart = hashIndex === -1 ? href : href.slice(0, hashIndex);
    const hash = hashIndex === -1 ? '' : href.slice(hashIndex);
    if (!pathPart.endsWith('.md') && !pathPart.endsWith('.mdx')) return match;
    const resolved = posix.normalize(posix.join(posix.dirname(file), pathPart));
    return `](${sitePath(resolved)}${hash})`;
  });
}

function fieldGuideLoader(): Loader {
  return {
    name: 'field-guide-docs',
    load: async ({ store, parseData, config, generateDigest, renderMarkdown }) => {
      const root = fileURLToPath(config.root);
      const files = await glob(handbookFiles, { cwd: root, expandDirectories: false });
      const seen = new Set<string>();

      for (const file of files) {
        const id = pageId(file);
        const source = readFileSync(join(root, file), 'utf8');
        const body = rewriteDocLinks(bodyWithoutTitle(source), file);
        const data = await parseData({
          id,
          filePath: file,
          data: { title: titleFromMarkdown(source, id) },
        });
        const rendered = await renderMarkdown(body, { fileURL: new URL(file, config.root) });
        store.set({
          id,
          data,
          body,
          filePath: file.split('\\').join('/'),
          digest: generateDigest(source),
          rendered,
        });
        seen.add(id);
      }

      for (const id of store.keys()) {
        if (!seen.has(id)) store.delete(id);
      }
    },
  };
}

export const collections = {
  docs: defineCollection({
    loader: fieldGuideLoader(),
    schema: docsSchema(),
  }),
};
