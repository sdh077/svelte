<script lang="ts">
	import '../app.css';
	import '$lib/css/tree.css';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';
	export let data;
</script>

<Nav />
<Sidebar {data} />

<div class="flex px-4 mx-auto w-full">
	<main class="lg:ml-72 w-full mx-auto">
		<slot />
	</main>
</div>
