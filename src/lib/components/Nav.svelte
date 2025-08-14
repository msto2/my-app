<nav class="nav-bar" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="/" class="brand">LA Stokes Photos</a>
    <ul class="nav-links">
      <li><a href="/about">About</a></li>
      <li><a href="/sports">Sports</a></li>
      <li><a href="/weddings">Weddings</a></li>
      <li><a href="/freelance">Free&nbsp;Lance</a></li>
      <li><a href="/services">Services</a></li>
    </ul>
  </div>
</nav>

<style>
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: #f8f8f8;
    color: #111;
    padding: .5rem .5rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  }

  .nav-inner {
    margin: 0 8% 0 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand {
    font-family: 'Brush Script MT', cursive;
    font-size: 2rem;
    color: var(--bg);
    text-decoration: none;
    white-space: nowrap;
  }

  .brand{
  position: relative;
  display: inline-block; 
  color: var(--bg);
  transition: color 0.2s ease;
}

  .brand::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 5px;
  height: 3px;
  width: 100%;
  max-width: 100%;
  background-color: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.brand:hover::after,
.brand:focus-visible::after {
  transform: scaleX(1);
  transform-origin: center;
}

  .nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

.nav-links a {
  position: relative;
  display: inline-block; 
  color: #222;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  height: 2px;
  width: 100%;
  max-width: 100%;
  background-color: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a:focus-visible::after {
  transform: scaleX(1);
  transform-origin: center;
}


  @media (orientation: portrait) {
    .nav-bar {
      display: none;
    }
  }

  @media (max-width: 768px) and (orientation: landscape) {
    .nav-inner {
      gap: 1rem;
    }

    .brand {
      font-size: 1.4rem;
    }

    .nav-links {
      gap: 1rem;
    }

    .nav-links a {
      font-size: 0.95rem;
    }
  }
</style>
