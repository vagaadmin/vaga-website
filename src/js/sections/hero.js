export default function hero() {
  return `
    <section id="hero" aria-labelledby="hero-title">
      <div class="container">
        <h1 id="hero-title" data-i18n="hero.title">Reliable software delivery for complex business needs.</h1>
        <p data-i18n="hero.subtitle">VAGA Technology Inc. is a long-term technology partner that builds and maintains critical systems with clarity and care.</p>
        <div>
          <a class="button" href="#contact" data-i18n="hero.cta_contact">Contact</a>
          <a class="button" href="#careers" data-i18n="hero.cta_careers">Careers</a>
        </div>
      </div>
    </section>
  `;
}
