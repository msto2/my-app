<script lang="ts">
	import '../app.css';
	// import { effect } from 'svelte';
	import { onDestroy } from 'svelte';
	import Nav from '$lib/components/Nav.svelte';
	import AltNav from '$lib/components/AltNav.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import AltMobileNav from '$lib/components/AltMobileNav.svelte';
	import Test from '$lib/components/Test.svelte';
	let { children } = $props();
</script>


<AltNav />
<div class="page-container">
{@render children()}
<AltMobileNav />
</div>
<!-- <Test /> -->

