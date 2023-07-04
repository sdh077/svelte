<script>
	import { Button } from 'flowbite-svelte';

	export let str;
	const copy = () => {
		window.navigator.clipboard.writeText(str).then(() => {});
	};
</script>

<div>
	<div class="rounded-lg p-2 bg-slate-300 inline-block">
		{str}
		<Button color="green" on:click={copy}>copy</Button>
	</div>
</div>
