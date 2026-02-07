export default function careers() {
  return `
    <section id="careers" aria-labelledby="careers-title">
      <div class="container">
        <h2 id="careers-title" data-i18n="careers.title">Careers</h2>
        <p data-i18n="careers.intro">We work with professionals who value clarity, responsibility, and steady progress.</p>
        <form action="#" method="post" data-form="careers">
          <div class="form-grid">
            <div>
              <label for="career-name" data-i18n="careers.form.name">Name</label>
              <input id="career-name" name="name" type="text" required />
            </div>
            <div>
              <label for="career-email" data-i18n="careers.form.email">Email</label>
              <input id="career-email" name="email" type="email" required />
            </div>
            <div>
              <label for="career-message" data-i18n="careers.form.message">Message</label>
              <textarea id="career-message" name="message" required></textarea>
            </div>
            <div>
              <label for="career-cv" data-i18n="careers.form.cv">Optional CV link (URL)</label>
              <input id="career-cv" name="cv" type="url" />
            </div>
            <div>
              <button class="button" type="submit" data-i18n="careers.form.submit">Send Application</button>
            </div>
            <p class="form-hint" data-form-status aria-live="polite"></p>
          </div>
        </form>
      </div>
    </section>
  `;
}
