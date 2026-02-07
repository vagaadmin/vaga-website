export default function whatWeDo() {
  return `
    <section id="what-we-do" class="capabilities" aria-labelledby="what-title">
      <div class="content">
        <h2 id="what-title" data-i18n="what.title">Capabilities</h2>
        <p class="capabilities-lead" data-i18n="what.lead">We turn complex requirements into reliable systems.</p>
        <div class="grid-3">
          <div class="cap-card">
            <div class="capability-media">
              <div class="capability-media__image">
                <img src="/media/capabilities/business-software-platforms.png" alt="" aria-hidden="true" />
              </div>
            </div>
            <h3 class="cap-title" data-i18n="what.cap1.title">Business software platforms</h3>
            <p data-i18n="what.cap1.desc">We design and deliver stable platforms that support core operations.</p>
          </div>
          <div class="cap-card">
            <div class="capability-media">
              <div class="capability-media__image">
                <img src="/media/capabilities/system-integration.png" alt="" aria-hidden="true" />
              </div>
            </div>
            <h3 class="cap-title" data-i18n="what.cap2.title">System integration</h3>
            <p data-i18n="what.cap2.desc">We connect existing systems to reduce friction and improve flow.</p>
          </div>
          <div class="cap-card">
            <div class="capability-media">
              <div class="capability-media__image">
                <img src="/media/capabilities/operational-automation.png" alt="" aria-hidden="true" />
              </div>
            </div>
            <h3 class="cap-title" data-i18n="what.cap3.title">Operational automation</h3>
            <p data-i18n="what.cap3.desc">We streamline repeatable processes to improve reliability and speed.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
