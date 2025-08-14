<main class="home">
  <section class="hero">
    <h1>LA Stokes Photography</h1>
    <p>Capturing moments. Creating stories.</p>
  </section>

  <section class="highlights">
    <a class="highlight" href="/weddings">
      <h2>Weddings</h2>
      <p>Cinematic Storytelling</p>
      <img src="\images\weddings\chris wed 200.jpg">
    </a>
    <a class="highlight" href="/sports">
      <h2>Sports</h2>
      <p>In-Game Action</p>
      <img src="/images/sports/img4.jpg">
    </a>
    <a class="highlight" href="/freelance">
      <h2>Freelance</h2>
      <p>Versatile, Creative Work</p>
      <img src="\images\freelance\img3.jpg">
    </a>
  </section>
  <!-- Contact Information -->
  <section class="mt-20">
    <h2 class="text-2xl font-semibold mb-6 text-[var(--accent)] text-center">Get In Touch</h2>
    <div class="highlight rounded-lg transition-all text-center">
      <h3 class="text-xl font-bold mb-4">Contact Information</h3>
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold text-[var(--text)] mb-2">Phone Numbers</h4>
          <p class="text-[var(--muted)]">724-378-3236 & 412-759-3311</p>
        </div>
        <div class="mt-4">
          <h4 class="font-semibold text-[var(--text)] mb-2">Email</h4>
          <p class="text-[var(--muted)]">LarryStokesPhotos@yahoo.com</p>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .home {
    background: var(--bg);
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6vmin 4vmin;
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
    min-height: 100vh;
  }

  .hero {
    margin-top: 8vmin;
    margin-bottom: 8vmin;
  }

  .hero h1 {
    font-family: 'Brush Script MT', cursive;
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    color: var(--accent);
  }

  .hero p {
    font-size: clamp(1rem, 4vw, 1.5rem);
    color: var(--muted);
  }

  .highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 5fr));
    gap: 5vmin;
    max-width: 100%;
  }

  .highlight {
    background: var(--card);
    padding: 1.5rem;
    border-radius: 15px;
    text-decoration: none;
    color: var(--text);
    box-shadow: 0 5px 100px rgba(0, 0, 0, .01);
    transition: transform 5s ease, box-shadow 1s ease;
  }
  .highlight h2 {
    font-size: 1.5rem;
    color: var(--accent);
	  position: relative;
  	display: inline-block;
  	overflow: hidden;
  }

  .highlight h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
  }

  .highlight p {
    font-size: 1rem;
    color: var(--muted);
    margin-bottom: 0.5rem;
  }

  .highlight:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(230, 57, 70, 0.3);
  }
  .highlight:hover h2::after {
  transform: scaleX(1);
  }
  img{
  border-radius: 12px;
  }

  @media (max-width: 600px) {
  .highlights {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .highlight {
    text-align: center;
  }

  .highlight h2 {
    font-size: 1.25rem;
  }

  .highlight p {
    font-size: 0.95rem;
  }

  .highlight img {
    margin: 0 auto;
    display: block;
  }
}
</style>
