<script lang="ts">
	import '../app.css';
	// import { effect } from 'svelte';
	import { onDestroy } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	let { children } = $props();
</script>


<Nav />
<div class="page-container">
{@render children()}
<MobileNav />
</div>
<!-- <Test /> -->

