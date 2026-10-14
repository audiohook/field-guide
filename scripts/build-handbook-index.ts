import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { isHandbookFile, pagesFromSources, type HandbookSource } from '../worker/handbook.ts';

const root = fileURLToPath(new URL('..', import.meta.url));
const output = fileURLToPath(new URL('../worker/generated/handbook.json', import.meta.url));

export function readHandbookSources(directory = root): HandbookSource[] {
	const sources: HandbookSource[] = [];
	function walk(current: string) {
		for (const entry of readdirSync(current)) {
			if (entry === 'node_modules' || entry === 'dist' || entry.startsWith('.')) continue;
			const full = join(current, entry);
			if (statSync(full).isDirectory()) {
				walk(full);
				continue;
			}
			if (!entry.endsWith('.md')) continue;
			const filePath = relative(directory, full).split('\\').join('/');
			if (!isHandbookFile(filePath)) continue;
			sources.push({ filePath, source: readFileSync(full, 'utf8') });
		}
	}
	walk(directory);
	return sources;
}

export function handbookIndex(directory = root) {
	return pagesFromSources(readHandbookSources(directory));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	const pages = handbookIndex();
	mkdirSync(dirname(output), { recursive: true });
	writeFileSync(output, `${JSON.stringify(pages)}\n`);
	console.log(`Wrote ${pages.length} handbook pages to ${relative(root, output)}`);
}
