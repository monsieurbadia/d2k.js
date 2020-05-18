<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`examples.json`).then(r => r.json()).then(examples => {
			return { examples };
		});
	}
</script>

<script>
	export let examples;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<ul>
	{ #each examples as example }
		<!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
		<li><a rel='prefetch' href='examples/{ example.slug }'>{ example.title }</a></li>
	{ /each }
</ul>