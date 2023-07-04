<script>
	import Code from '$lib/components/code/code.svelte';
	import Editor from './editor.svelte';
	const code = `<scrip lang="ts">
    import Editor from '@tinymce/tinymce-svelte';
	import type { SvelteComponentTyped } from 'svelte';
	let value = 'as';
	let conf = {
		selector: 'textarea', // change this value according to your HTML
		auto_focus: 'element1'
	};
</scrip>

<main>
	<h1>Hello Tiny</h1>
	<Editor bind:value apiKey="key는 주소에서 발급" {conf} />
</main>
{value}`;
</script>

<div>npm i @tinymce/tinymce-svelte</div>
<div>https://www.tiny.cloud/docs/integrations/svelte/ 방문 후 key 등록</div>
<div>+page.svelte</div>
<Code {code} language="javascript" />

<Editor />
