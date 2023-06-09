<script>
	import { Button } from 'flowbite-svelte';
	import Code from '$lib/components/code/code.svelte';
	import { onMount } from 'svelte';
	onMount(async () => {
		mapChange(37.3595704, 127.105399);
	});
	const mapChange = (lat, lng) =>
		new naver.maps.Map('map', {
			center: new naver.maps.LatLng(lat, lng),
			zoom: 10
		});
	const codeLayout = `
<svelte:head>
	<scrip
		type="text/javascript"
		src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=???"
	></scrip>
</svelte:head>
<slot />
	`;
	const codePage = `
<scrip lang="ts">
	import { onMount } from 'svelte';
	onMount(async () => {
		mapChange(37.3595704, 127.105399);
	});
	const mapChange = (lat, lng) =>
		new naver.maps.Map("map", {
			center: new naver.maps.LatLng(lat, lng),
			zoom: 10
		});
</scrip>
<button on:click={() => mapChange(35.3595704, 127.105399)} />
<div id="map" style="width:100%;height:400px;" />
`;
</script>

<h1>Naver Map 연동</h1>
<div>
	<h5>0. 타입스크립트일 경우 npm i -D @types/navermaps</h5>
</div>
<div>
	<h5>1. 네이버 클라우드 접속하여 계정 생성</h5>
	<h5>AI·NAVER API - Application</h5>
	<h5>인증정보 클릭 - Client ID(X-NCP-APIGW-API-KEY-ID)</h5>
	<Button><a href="https://console.ncloud.com/dashboard">현재 페이지 접속</a></Button>
	<Button><a href="https://console.ncloud.com/dashboard" target="_blank">새 페이지 접속</a></Button>
</div>
<div>
	<h5>2. +layout.svelte</h5>
	<Code code={codeLayout} language="javascript" />
</div>

<div>
	<h5>3. +page.svelte</h5>
	<Code code={codePage} language="javascript" />
</div>
<div>
	<h5>4. 개발 가이드 접속</h5>
	<Button
		><a href="https://navermaps.github.io/maps.js.ncp/" target="_blank">새 페이지 접속</a></Button
	>
</div>
<div>
	<h5>예시</h5>
	<div id="map" style="width:100%;height:400px;" />
	<Button on:click={() => mapChange(35.3595704, 127.105399)}>이동</Button>
</div>
