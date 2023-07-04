<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	export let user;
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			svelte 공부
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/login" active={false}>
			{#if user?.name}
				<button on:click={() => signOut('github')} class="button"
					>{user?.name ?? 'User'}Sign out</button
				>
			{:else}
				<button on:click={() => signIn('github')}>Sign In with GitHub</button>
			{/if}
		</NavLi>
	</NavUl>
</Navbar>
