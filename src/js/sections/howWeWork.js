export default function howWeWork() {
  return `
    <section id="how-we-work" class="delivery-model" aria-labelledby="how-title">
      <div class="content">
        <h2 id="how-title" data-i18n="how.title">Delivery Model</h2>
        <div class="delivery-layout">
          <div class="delivery-visual">
            <img src="/media/delivery-model-collaboration.png" alt="" aria-hidden="true" />
          </div>
          <div class="delivery-items">
            <div class="delivery-item">
              <h3 data-i18n="how.model1.title">Flexible Development (T&amp;M)</h3>
              <p data-i18n="how.model1.desc">Adaptive teams that scale with your priorities. We work closely with your stakeholders, keep feedback loops short, and ship in steady increments. Ideal when scope evolves but delivery needs to stay predictable.</p>
            </div>
            <div class="delivery-item">
              <h3 data-i18n="how.model2.title">Turnkey Projects</h3>
              <p data-i18n="how.model2.desc">Clear scope delivery with defined outcomes, managed end-to-end by VAGA. We align on requirements, milestones, and acceptance criteria upfront, then execute with disciplined planning and transparent progress. Best for projects where clarity and ownership matter.</p>
            </div>
            <div class="delivery-item">
              <h3 data-i18n="how.model3.title">Man-Day Engagement</h3>
              <p data-i18n="how.model3.desc">Short, focused allocations for well-defined tasks or support needs. We plug into your workflow, resolve targeted items quickly, and leave behind clean handover notes. A practical option for bursts of work without long onboarding.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
