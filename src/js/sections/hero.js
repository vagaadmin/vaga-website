export default function hero() {
  return `
    <section id="hero" class="hero" aria-labelledby="hero-title">
      <div class="hero-media" aria-hidden="true" data-hero-media>
        <video
          class="hero-video hero-video-1 is-active"
          autoplay
          muted
          playsinline
          preload="auto"
          data-hero-video="a"
        >
          <source src="/media/hero-01-bridge.mp4" type="video/mp4" />
        </video>
        <video
          class="hero-video hero-video-2"
          autoplay
          muted
          playsinline
          preload="metadata"
          data-hero-video="b"
        >
          <source src="/media/hero-02-forest-road.mp4" type="video/mp4" />
        </video>
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <h1 id="hero-title" data-i18n="hero.title">Reliable software delivery for complex business needs.</h1>
        <p data-i18n="hero.subtitle">VAGA Technology Inc. is a long-term technology partner that builds and maintains critical systems with clarity and care.</p>
        <div class="hero-ctas">
          <a class="button" href="#contact" data-i18n="hero.cta_contact">Contact</a>
          <a class="button" href="#careers" data-i18n="hero.cta_careers">Careers</a>
        </div>
      </div>
    </section>
  `;
}
