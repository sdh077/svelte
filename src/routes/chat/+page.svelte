<script lang="ts">
	const rooms = [
		{
			id: 'qwe12',
			title: '친구랑'
		}
	];
</script>

{#each rooms as room}
	<div>채팅방 {room.title} <a href="/chat/room/{room.id}"><button>입장</button></a></div>
{/each}
