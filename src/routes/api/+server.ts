import { json } from '@sveltejs/kit';

export const GET = async () => {
    const posts = await fetchMarkdownPosts();
    return json(posts);
};

const fetchMarkdownPosts = async () => {
    const contentFiles = import.meta.glob('/src/routes/content/*/*.svelte');
    const startFiles = import.meta.glob('/src/routes/start/*/*.svelte');

    const iterContents = Object.entries(contentFiles);
    const iterStarts = Object.entries(startFiles);

    const content = await iterPromise(iterContents, 20);
    const start = await iterPromise(iterStarts, 18);

    return { start, content }
};

const iterPromise = async (iter: [string, () => Promise<unknown>][], s: number) => await Promise.all(
    iter.map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const filePath = path.slice(s, -13)
        return filePath;
    })
);