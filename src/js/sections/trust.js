export default function trust() {
  const logos = [
    { key: "akbank", displayName: "Akbank", logo: "logo-akbank.svg", flagCode: "tr" },
    { key: "asana", displayName: "Asana", logo: "logo-asana.svg", flagCode: "us" },
    { key: "cciist", displayName: "CCIIST", logo: "logo-cciist.svg", flagCode: "tr" },
    { key: "gpi", displayName: "GPI", logo: "logo-gpi.svg", flagCode: "italy" },
    { key: "hillebrand", displayName: "Hillebrand", logo: "logo-hillebrand.png", flagCode: "de" },
    { key: "sabancidx", displayName: "SabancıDx", logo: "logo-sabancidx.svg", flagCode: "tr" },
    { key: "turkcell", displayName: "Turkcell", logo: "logo-turkcell.svg", flagCode: "tr" },
    { key: "umana-medical", displayName: "Umana Medical", logo: "logo-umana-medical.png", flagCode: "malta" }
  ];

  const sortedLogos = [...logos].sort((a, b) =>
    a.displayName.localeCompare(b.displayName, undefined, { sensitivity: "base" })
  );

  return `
    <section id="trust" aria-labelledby="trust-title">
      <div class="content">
        <h2 id="trust-title" data-i18n="trust.title">Trust &amp; Scale</h2>
        <p class="trust-headline" data-i18n="trust.headline">Trusted by teams operating at scale, with clear ownership and lasting relations.</p>
        <div class="trust-markets">
          <p class="trust-markets__label" data-i18n="trust.markets.label">Markets served</p>
          <p class="trust-markets__list" data-trust-markets></p>
        </div>
        <div class="trust-logos" aria-label="Trust & Scale logos">
          <div class="trust-logos__row">
            ${sortedLogos.map((item) => `
              <div class="trust-logo-card" data-logo="${item.key}">
                <img class="trust-logo-card__flag" src="/media/trust/flag-${item.flagCode}.png" alt="${item.flagCode.toUpperCase()} flag" />
                <img class="trust-logo-card__logo" src="/media/trust/${item.logo}" alt="${item.displayName} logo" />
                <span class="trust-logo-card__separator" aria-hidden="true"></span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
