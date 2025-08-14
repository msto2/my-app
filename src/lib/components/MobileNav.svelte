import { menuOpen } from '$lib/stores/menu';
<script>
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<div class="mobile-nav-wrapper">
<nav id="menu" class:open={menuOpen}>
  <ul>
    <li><a href="/" on:click={() => (menuOpen = false)}>Home</a></li>
    <li><a href="/sports" on:click={() => (menuOpen = false)}>Sports</a></li>
    <li><a href="/weddings" on:click={() => (menuOpen = false)}>Weddings</a></li>
    <li><a href="/freelance" on:click={() => (menuOpen = false)}>Free&nbsp;Lance</a></li>
    <li><a href="/contact" on:click={() => (menuOpen = false)}>Contact</a></li>
  </ul>
</nav>
<div id="toggle" class:on={menuOpen} on:click={toggleMenu}>
       <div class="one"></div>
       <div class="two"></div>
       <div class="three"></div>
</div>
</div>

<style>
.mobile-nav-wrapper {
  position: fixed;
  bottom: 2vmin;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
}

#toggle {
  width: 30px;
  height: 30px;
  margin: 10px auto;
}
#toggle div {
  width: 100%;
  height: 5px;
  background: var(--text);
  margin: 4px auto;
  transition: all 0.4s;
  backface-visibility: hidden;
}
#toggle.on .one {
  transform: rotate(45deg) translate(5px, 5px);
}
#toggle.on .two {
  opacity: 0;
}
#toggle.on .three {
  transform: rotate(-45deg) translate(7.5px, -7.5px);
}

#menu {
  color: var(--accent);
  border: 3px solid var(--accent);
  background-color: var(--card);
  width: 140px;
  height: auto;
  padding: 3px;
  border-radius: 15px;
  font-family: "Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  

  overflow: hidden;
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: max-height 0.75s ease, opacity .25s ease, visibility 0.75s ease;
}

#menu.open {
  max-height: 300px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

ul, li, li a {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
}
li a {
  padding: 5px;
  color: var(--accent);
  text-decoration: none;
}
li a:hover,
li a:focus {
  background: var(--hover);
  color: var(--bg);
  font-weight: 700;
  border-radius: 15px;
}

@media (orientation: landscape) {
  #toggle,
  #menu {
    display: none;
  }
}
</style>
