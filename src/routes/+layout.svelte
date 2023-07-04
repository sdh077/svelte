<script lang="ts">
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import Nav from '$lib/components/layout/Nav.svelte';
	import '$lib/css/tree.css';
	import '../app.css';
	export let data;
</script>

<Nav user={data.user} />
<Sidebar data={data?.navs} />
<div class="flex px-4 mx-auto w-full">
	<main class="lg:ml-72 w-full mx-auto">
		<slot />
	</main>
</div>
