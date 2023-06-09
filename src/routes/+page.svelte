<script>
	import Code from '$lib/components/code/code.svelte';
	let code_sample = `
console.log('highlight 체크')
`;
</script>

<h1 class="text-3xl font-bold underline">SVELTE 한국어로 공부하기</h1>
<Code language="javascript" code={code_sample} header="" />
