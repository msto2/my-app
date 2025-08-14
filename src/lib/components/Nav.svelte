<!-- src/lib/components/Nav.svelte -->
<nav class="nav-bar" role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/sports">Sports</a></li>
    <li><a href="/weddings">Weddings</a></li>
    <li><a href="/freelance">Free Lance</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<style>
  .nav-bar {
    position: fixed;
    top: 2vmin;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    background: var(--nav-bg);
    padding: 0.5em 1.5em;
    border-radius: 999px;
    backdrop-filter: blur(10px);
  }

  .nav-bar ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  .nav-bar li a {
    color: var(--nav-text);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.2s ease;
    white-space: nowrap;
  }

  .nav-bar li a:hover,
  .nav-bar li a:focus-visible {
    color: var(--bg);
    outline: none;
  }

  @media (orientation: portrait) {
    .nav-bar {
      display: none;
    }
  }

  @media (max-width: 600px) and (orientation: landscape) {
    .nav-bar {
      padding: 0.4em 1em;
    }

    .nav-bar li a {
      font-size: 0.9rem;
    }

    .nav-bar ul {
      gap: 1.2rem;
    }
  }
</style>
