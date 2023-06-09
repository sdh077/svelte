<script>
	import Branch from '$lib/components/wtree/branch.svelte';
	export let tree;
</script>

<div class="wtree-wrap">
	<h1 class="title">{tree.title}</h1>
	<ul class="wtree">
		{#if tree.branch}
			<ul>
				{#each tree.branch as branch}
					<Branch tree={branch} />
				{/each}
			</ul>
		{/if}
	</ul>
</div>

<style>
	.wtree-wrap {
		padding: 50px;
	}
</style>
