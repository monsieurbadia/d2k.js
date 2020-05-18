<script>
	import Sidebar from '../components/Sidebar.svelte';
	export let segment;
</script>

<main>
	<Sidebar />
	<slot></slot>
</main>