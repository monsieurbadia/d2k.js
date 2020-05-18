<script>
	export let segment;
</script>

<style>
</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a rel=prefetch aria-current='{segment === "examples" ? "page" : undefined}' href='examples'>examples</a></li>
	</ul>
</nav>
