export default function whatWeDo() {
  return `
    <section id="what-we-do" aria-labelledby="what-title">
      <div class="content">
        <h2 id="what-title" data-i18n="what.title">What We Do</h2>
        <div class="grid-3">
          <div>
            <h3 data-i18n="what.cap1.title">Business Software Platforms</h3>
            <p data-i18n="what.cap1.desc">We design and deliver stable platforms that support core operations.</p>
          </div>
          <div>
            <h3 data-i18n="what.cap2.title">System Integration</h3>
            <p data-i18n="what.cap2.desc">We connect existing systems to reduce friction and improve flow.</p>
          </div>
          <div>
            <h3 data-i18n="what.cap3.title">Operational Automation</h3>
            <p data-i18n="what.cap3.desc">We streamline repeatable processes to improve reliability and speed.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
