import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = await fetchMarkdownPosts();
	return json(posts);
};

const fetchMarkdownPosts = async () => {
	const contentFiles = import.meta.glob('/src/routes/content/*/+page.svelte');
	const startFiles = import.meta.glob('/src/routes/start/*/+page.svelte');
	const vercelFiles = import.meta.glob('/src/routes/vercel/*/+page.svelte');

	const iterContents = Object.entries(contentFiles);
	const iterStarts = Object.entries(startFiles);
	const iterVercels = Object.entries(vercelFiles);

	const content = await iterPromise(iterContents, 20);
	const start = await iterPromise(iterStarts, 18);
	const vercel = await iterPromise(iterVercels, 19);

	return { start, content, vercel };
};

const iterPromise = async (iter: [string, () => Promise<unknown>][], s: number) =>
	await Promise.all(
		iter.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const filePath = path.slice(s, -13);
			return filePath;
		})
	);
