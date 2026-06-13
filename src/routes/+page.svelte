<script>
  import { getImage } from '$lib/images';

  // Compressed, responsive WebP variants generated at build time.
  const weddings = getImage('/images/weddings/chris wed 200.jpg');
  const sports = getImage('/images/sports/img4.jpg');
  const freelance = getImage('/images/freelance/img3.jpg');
</script>

<main class="home">
  <section class="hero">
    <h1>LA Stokes Photography</h1>
    <p>Capturing moments. Creating stories.</p>
  </section>

  <section class="highlights">
    <a class="highlight" href="/weddings">
      <h2>Weddings</h2>
      <p>Cinematic Storytelling</p>
      <img src={weddings.src} srcset={weddings.srcset} sizes="(max-width: 600px) 90vw, 400px" alt="Wedding photography" loading="lazy" />
    </a>
    <a class="highlight" href="/sports">
      <h2>Sports</h2>
      <p>In-Game Action</p>
      <img src={sports.src} srcset={sports.srcset} sizes="(max-width: 600px) 90vw, 400px" alt="Sports photography" loading="lazy" />
    </a>
    <a class="highlight" href="/freelance">
      <h2>Freelance</h2>
      <p>Versatile, Creative Work</p>
      <img src={freelance.src} srcset={freelance.srcset} sizes="(max-width: 600px) 90vw, 400px" alt="Freelance photography" loading="lazy" />
    </a>
  </section>
  <!-- Contact Information -->
  <section class="contact">
    <h2>Get In Touch</h2>
    <p class="contact-sub">Tap to call or email — I'd love to hear about your project.</p>

    <div class="contact-grid">
      <a class="contact-link" href="tel:+17243783236" aria-label="Call 724-378-3236">
        <span class="contact-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <span class="contact-text">
          <span class="contact-label">Call</span>
          <span class="contact-value">724-378-3236</span>
        </span>
      </a>

      <a class="contact-link" href="tel:+14127593311" aria-label="Call 412-759-3311">
        <span class="contact-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <span class="contact-text">
          <span class="contact-label">Call</span>
          <span class="contact-value">412-759-3311</span>
        </span>
      </a>

      <a class="contact-link" href="mailto:LarryStokesPhotos@yahoo.com" aria-label="Email LarryStokesPhotos@yahoo.com">
        <span class="contact-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 6L2 7" />
          </svg>
        </span>
        <span class="contact-text">
          <span class="contact-label">Email</span>
          <span class="contact-value">LarryStokesPhotos@yahoo.com</span>
        </span>
      </a>
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

  /* Contact section */
  .contact {
    margin-top: 5rem;
    width: 100%;
    max-width: 620px;
    text-align: center;
  }

  .contact h2 {
    font-size: 1.75rem;
    color: var(--accent);
    margin-bottom: 0.5rem;
  }

  .contact-sub {
    color: var(--muted);
    margin-bottom: 1.75rem;
  }

  .contact-grid {
    display: grid;
    gap: 1rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    min-height: 72px;
    background: var(--card);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    color: var(--text);
    text-decoration: none;
    text-align: left;
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .contact-link:hover,
  .contact-link:focus-visible {
    transform: translateY(-2px);
    border-color: var(--accent);
    box-shadow: 0 8px 24px rgba(242, 84, 91, 0.25);
    outline: none;
  }

  .contact-link:active {
    transform: translateY(0);
  }

  .contact-icon {
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: rgba(242, 84, 91, 0.15);
    color: var(--accent);
  }

  .contact-icon svg {
    width: 24px;
    height: 24px;
  }

  .contact-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .contact-label {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .contact-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
    word-break: break-word;
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
