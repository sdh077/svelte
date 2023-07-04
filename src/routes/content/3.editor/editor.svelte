<script lang="ts">
	import Editor from '@tinymce/tinymce-svelte';
	import { PUBLIC_EDITOR_KEY } from '$env/static/public';
	import type { SvelteComponentTyped } from 'svelte';
	let value = 'as';
	let conf = {
		selector: 'textarea', // change this value according to your HTML
		auto_focus: 'element1'
	};
</script>

<main>
	<h1>Hello Tiny</h1>
	<Editor bind:value apiKey={PUBLIC_EDITOR_KEY} {conf} />
</main>
{value}
{@html value}
