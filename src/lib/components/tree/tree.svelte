<script>
	import Branch from '$lib/components/tree/branch.svelte';
	export let tree;
</script>

<ul class="tree">
	<li>
		<span>{tree.title}</span>
		{#if tree.branch}
			<ul>
				{#each tree.branch as branch}
					<Branch tree={branch} />
				{/each}
			</ul>
		{/if}
	</li>
</ul>
