<script>
	import { io } from 'socket.io-client';
	import { Input, Label, Helper, ButtonGroup, Button } from 'flowbite-svelte';
	const socket = io('http://localhost:3000/', {
		withCredentials: false
	});

	let messages = [];
	let value = '';
	let submittedValue = null;

	socket.on('msg', (data) => {
		console.log(data);
		messages = [...messages, data];
	});
	const send = () => {
		socket.emit('msg', value);
		value = '';
	};
</script>

<div class="pt-8">
	<form on:submit|preventDefault={() => send()}>
		<Label for="input-addon" class="mb-2">Grouped with button</Label>
		<ButtonGroup class="w-full">
			<Input id="input-addon" type="text" placeholder="elonmusk" bind:value />
			<Button color="primary" type="submit">입력</Button>
		</ButtonGroup>
	</form>
</div>

{#each messages as message}
	<div>보낸사람 {message.id} 내용 {message.data}</div>
{/each}
