export default function contact() {
  return `
    <section id="contact" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title" data-i18n="contact.title">Contact</h2>
        <p data-i18n="contact.email_label">Email:</p>
        <p><a data-contact-email href="mailto:contact@vaga.tech">contact@vaga.tech</a></p>
        <form action="#" method="post" data-form="contact">
          <div class="form-grid">
            <div>
              <label for="contact-name" data-i18n="contact.form.name">Name</label>
              <input id="contact-name" name="name" type="text" required />
            </div>
            <div>
              <label for="contact-email" data-i18n="contact.form.email">Email</label>
              <input id="contact-email" name="email" type="email" required />
            </div>
            <div>
              <label for="contact-message" data-i18n="contact.form.message">Message</label>
              <textarea id="contact-message" name="message" required></textarea>
            </div>
            <div>
              <button class="button" type="submit" data-i18n="contact.form.submit">Send Message</button>
            </div>
            <p class="form-hint" data-form-status aria-live="polite"></p>
          </div>
        </form>
      </div>
    </section>
  `;
}
