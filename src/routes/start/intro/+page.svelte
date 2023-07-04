<script>
	import Code from '$lib/components/code/code.svelte';
	const code = `
npm create svelte@latest my-app
cd my-app
npm install
npm run dev`;
</script>

<Code {code} language={'markup'} />
