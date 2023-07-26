<script lang="ts">
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	import { PUBLIC_SOCKET_URL } from '$env/static/public';
	import { page } from '$app/stores';

	import { io } from 'socket.io-client';
	// const socket = io(PUBLIC_SOCKET_URL, {});
	const socket = io(`${PUBLIC_SOCKET_URL}/room?id=${$page.params.id}`, {});
	let user = '이름입력';
	let textfield = '';
	let chat;
	let messages = [];
	onMount(() => {
		socket.on('reply', (message) => {
			messages = [...messages, message];
			setTimeout(() => {
				if (chat) chat.scrollTop = chat?.scrollHeight ?? 0 + 100;
			}, 50);
		});
	});
	let autoscroll = false;

	beforeUpdate(() => {
		if (chat) {
			const scrollableDistance = chat.scrollHeight - chat.offsetHeight;
			autoscroll = chat.scrollTop > scrollableDistance - 20;
		}
	});
	afterUpdate(() => {
		// if (autoscroll) chat.scrollTo(0, chat.scrollHeight);
	});

	async function sendMessage() {
		if (textfield) {
			const message = textfield.trim();
			textfield = '';
			if (!message) return;
			socket.emit('chat message', { type: 2, user, message });
		}
	}
</script>

<input type="text" bind:value={user} />
<div
	class="container overflow-y-auto h-full"
	style="height: 50vh; scroll-behavior: smooth;"
	bind:this={chat}
>
	{#each messages as message}
		{#if message.type === 1}
			<div>{message.message}</div>
		{:else}
			<div>{message.user} : {message.message}</div>
		{/if}
	{/each}
</div>

<form
	action="#"
	on:submit|preventDefault={sendMessage}
	class="px-6 py-4 border-t border-zinc-800 bg-zinc-700 text-white shrink-0 flex items-center"
>
	<input
		type="text"
		bind:value={textfield}
		placeholder="Type something..."
		class="bg-transparent border-none px-4 py-3 w-full"
	/>
	<button type="submit" class="shrink-0 border border-white rounded-lg px-4 py-3">Send</button>
</form>
