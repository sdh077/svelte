<script>
	export let tree;
</script>

<li>
	<span>{tree.title}</span>
	{#if tree.branch}
		<ul>
			{#each tree.branch as branch}
				<svelte:self tree={branch} />
			{/each}
		</ul>
	{/if}
</li>
