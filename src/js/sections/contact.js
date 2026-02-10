export default function contact() {
  return `
    <section id="contact" aria-labelledby="contact-title">
      <div class="content">
        <span id="careers" aria-hidden="true"></span>
        <div class="contact-cards" aria-label="Contact and careers">
          <article class="contact-card contact-card--contact">
            <div class="contact-card__content">
              <span class="contact-card__tab" aria-hidden="true"></span>
              <h2 id="contact-title" data-i18n="contact.cards.contact.title">Contact</h2>
              <p data-i18n="contact.cards.contact.desc">For inquiries, partnerships, or general questions, email us.</p>
              <a class="contact-card__email" href="mailto:contact@vagani.com">contact@vagani.com</a>
            </div>
            <div class="contact-card__stripe" aria-hidden="true"></div>
          </article>
          <article class="contact-card contact-card--careers">
            <div class="contact-card__content">
              <span class="contact-card__tab" aria-hidden="true"></span>
              <h2 data-i18n="contact.cards.careers.title">Careers</h2>
              <p data-i18n="contact.cards.careers.desc">If you value clarity, responsibility, and steady progress, we’d like to hear from you.</p>
              <a class="contact-card__email" href="mailto:careers@vagani.com">careers@vagani.com</a>
            </div>
            <div class="contact-card__stripe" aria-hidden="true"></div>
          </article>
        </div>
      </div>
    </section>
  `;
}
