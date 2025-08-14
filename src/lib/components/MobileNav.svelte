<script lang="ts">
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
    document.body.classList.toggle('menu-open', menuOpen);
    
    const pageContainer = document.getElementById('page-container');
    if (pageContainer) {
      if (menuOpen) {
        pageContainer.style.transform = 'translateY(-30vh)';
        pageContainer.style.transition = 'transform 0.3s ease';
      } else {
        pageContainer.style.transform = 'translateY(0)';
      }
    }
  }
</script>

<div class="mobile-nav-wrapper">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div id="toggle" class:on={menuOpen} on:click={toggleMenu} aria-label="Toggle menu" role="button" tabindex="0">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
  </div>
</div>

<nav id="menu" class:open={menuOpen} role="navigation" aria-label="Mobile navigation">
  <ul>
    <li><a href="/" on:click={() => toggleMenu()}>Home</a></li>
    <li><a href="/sports" on:click={() => toggleMenu()}>Sports</a></li>
    <li><a href="/weddings" on:click={() => toggleMenu()}>Weddings</a></li>
    <li><a href="/freelance" on:click={() => toggleMenu()}>Free&nbsp;Lance</a></li>
    <li><a href="/contact" on:click={() => toggleMenu()}>Contact</a></li>
  </ul>
</nav>
<style>
:root {
  --bg: #121212;
  --text: #ffffff;
  --muted: #cccccc;
  --accent: #f2545b;
  --hover: #ff7b7b;
  --card: #1c1c1c;
}

.mobile-nav-wrapper {
  position: fixed;
  bottom: 0.1vmin;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1101;
}

#toggle {
  width: 30px;
  height: 30px;
  margin: 10px auto;
  cursor: pointer;
  
}

#toggle div {
  width: 100%;
  height: 5px;
  background: var(--text);
  margin: 4px 0;
  transition: all 0.4s ease;
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

/* Full-width bottom nav */
#menu {
  position: fixed;
  bottom: -45vh;
  left: 0;
  width: 100%;
  height: 30vh;
  background-color: var(--card);
  border-top: 2px solid var(--accent);
  padding: 0 0 2rem 0;
  text-align: center;
  z-index: 1100; /* Above toggle so it pushes it up */
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: bottom 0.3s ease;
}

#menu.open {
  bottom: 0;
}

/* Prevent body scroll when menu is open */
:global(body.menu-open) {
  overflow: hidden;
}

#menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#menu li {
  margin: 0.25rem 0;
}

#menu li a {
  display: block;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  transition: background 0.3s ease, color 0.3s ease;
}

#menu li a:hover,
#menu li a:focus {
  background: var(--hover);
  color: var(--bg);
  border-radius: 10px;
}

@media (orientation: landscape) {
  #toggle,
  #menu {
    display: none;
  }
}
</style>