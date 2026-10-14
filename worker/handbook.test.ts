import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { handbookIndex } from '../scripts/build-handbook-index.ts';
import handbook from './generated/handbook.json' with { type: 'json' };
import { getPage, listPages, normalizeHandbookPath, searchPages, type HandbookPage } from './handbook.ts';

const pages = handbook as HandbookPage[];

describe('handbook index', () => {
	it('matches the markdown in the repo', () => {
		assert.deepEqual(pages, handbookIndex());
	});

	it('finds the mission page and rejects paths outside the handbook', () => {
		const mission = getPage(pages, '/01-company/mission');
		assert.equal(mission?.filePath, '01-company/mission.md');
		assert.equal(getPage(pages, '../worker/index.ts'), null);
		assert.equal(getPage(pages, '/01-company/mission.md'), mission);
		assert.equal(normalizeHandbookPath('01-company/mission/'), '/01-company/mission/');
	});

	it('searches titles and body text', () => {
		const hits = searchPages(pages, 'North Star');
		assert.ok(hits.some((hit) => hit.path === '/01-company/mission/'));
		assert.equal(searchPages(pages, 'zzzz-not-a-process').length, 0);
	});

	it('lists one section', () => {
		const sales = listPages(pages, '03. Sales');
		assert.ok(sales.length > 0);
		assert.ok(sales.every((page) => page.section === '03. Sales'));
	});
});
