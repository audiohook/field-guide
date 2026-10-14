export interface HandbookPage {
	path: string;
	title: string;
	section: string;
	filePath: string;
	body: string;
}

export interface HandbookSource {
	filePath: string;
	source: string;
}

export interface SearchHit {
	path: string;
	title: string;
	section: string;
	excerpt: string;
}

const SECTIONS: Record<string, string> = {
	'01-company': '01. Company',
	'02-people': '02. People',
	'03-sales': '03. Sales',
	'04-customer-success': '04. Customer Success',
	'05-ad-operations': '05. Ad Operations',
	'06-product': '06. Product',
	'07-engineering': '07. Engineering',
	'08-finance': '08. Finance',
	'09-sop-library': '09. SOP Library',
};

const SAFE_PATH = /^\/[A-Za-z0-9][A-Za-z0-9._/-]*$/;

export function isHandbookFile(filePath: string) {
	if (filePath === 'README.md' || filePath === 'LEADERSHIP_GUIDE.md' || filePath === 'PROCESS_TEMPLATE.md') {
		return true;
	}
	return /^0\d-[a-z0-9-]+\/.+\.md$/i.test(filePath);
}

function titleFromMarkdown(source: string, fallback: string) {
	const match = source.match(/^#\s+(.+)$/m);
	return match?.[1]?.replace(/\s+#+\s*$/, '').trim() || fallback;
}

function sitePath(filePath: string) {
	const withoutExtension = filePath.replace(/\.mdx?$/i, '');
	const id = withoutExtension === 'README' || withoutExtension.endsWith('/README')
		? withoutExtension.replace(/README$/, 'index')
		: withoutExtension;
	if (id === 'index') return '/';
	const slug = id.endsWith('/index') ? id.slice(0, -'/index'.length) : id;
	return `/${slug}/`;
}

function sectionFor(filePath: string) {
	const folder = filePath.split('/')[0] ?? '';
	return SECTIONS[folder] ?? 'Start here';
}

export function pagesFromSources(files: HandbookSource[]): HandbookPage[] {
	return files
		.filter((file) => isHandbookFile(file.filePath))
		.map((file) => ({
			path: sitePath(file.filePath),
			title: titleFromMarkdown(file.source, file.filePath),
			section: sectionFor(file.filePath),
			filePath: file.filePath,
			body: file.source,
		}))
		.sort((a, b) => a.path.localeCompare(b.path));
}

export function normalizeHandbookPath(input: string) {
	if (input.length === 0 || input.length > 300) return null;
	if (input.includes('..') || input.includes('\\') || input.includes('?') || input.includes('#')) return null;
	let path = input.trim().replace(/\.mdx?$/i, '');
	if (!path.startsWith('/')) path = `/${path}`;
	path = path.replace(/\/{2,}/g, '/').replace(/\/+$/, '');
	if (path === '') return '/';
	if (!SAFE_PATH.test(path)) return null;
	return `${path}/`;
}

export function getPage(pages: HandbookPage[], input: string) {
	const path = normalizeHandbookPath(input);
	if (!path) return null;
	return pages.find((page) => page.path === path) ?? null;
}

export function listPages(pages: HandbookPage[], section?: string) {
	const filter = section?.trim().toLowerCase();
	return pages
		.filter((page) => !filter || page.section.toLowerCase().includes(filter) || page.filePath.toLowerCase().includes(filter))
		.map(({ path, title, section: pageSection }) => ({ path, title, section: pageSection }));
}

function termsFor(query: string) {
	return query
		.toLowerCase()
		.split(/[^a-z0-9]+/)
		.filter((term) => term.length > 1)
		.slice(0, 8);
}

function excerpt(body: string, term: string) {
	const haystack = body.toLowerCase();
	const at = haystack.indexOf(term);
	const start = Math.max(0, (at === -1 ? 0 : at) - 100);
	const slice = body.slice(start, start + 280).replace(/\s+/g, ' ').trim();
	return `${start > 0 ? '…' : ''}${slice}${start + 280 < body.length ? '…' : ''}`;
}

export function searchPages(pages: HandbookPage[], query: string, limit = 8): SearchHit[] {
	const terms = termsFor(query);
	if (terms.length === 0) return [];
	return pages
		.flatMap((page) => {
			const title = page.title.toLowerCase();
			const body = page.body.toLowerCase();
			if (!terms.every((term) => title.includes(term) || body.includes(term))) return [];
			const titleHits = terms.filter((term) => title.includes(term)).length;
			return [{ page, titleHits, excerpt: excerpt(page.body, terms[0] ?? '') }];
		})
		.sort((a, b) => b.titleHits - a.titleHits || a.page.path.localeCompare(b.page.path))
		.slice(0, limit)
		.map(({ page, excerpt: pageExcerpt }) => ({
			path: page.path,
			title: page.title,
			section: page.section,
			excerpt: pageExcerpt,
		}));
}
