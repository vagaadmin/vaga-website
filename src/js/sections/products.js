export default function products() {
  const techStackItems = [
    { slug: "dotnet", label: ".NET" },
    { slug: "aspnetcore", iconSlug: "dotnet", label: "Web APIs" },
    { slug: "efcore", iconSlug: "dotnet", label: "EF Core" },
    { slug: "masstransit", label: "MassTransit", textOnly: true },
    { slug: "rabbitmq", label: "RabbitMQ" },
    { slug: "azureservicebus", label: "Azure Service Bus" },
    { slug: "react", label: "React" },
    { slug: "nextjs", label: "Next.js" },
    { slug: "typescript", label: "TypeScript" },
    { slug: "reactnative", label: "React Native" },
    { slug: "azure", label: "Azure" },
    { slug: "docker", label: "Docker" },
    { slug: "kubernetes", label: "Kubernetes" },
    { slug: "helm", label: "Helm" },
    { slug: "opentelemetry", label: "OpenTelemetry" },
    { slug: "openapi", label: "OpenAPI" }
  ];

  return `
    <section id="products" class="products" aria-labelledby="products-title">
      <div class="content">
        <h2 id="products-title" data-i18n="products.label">E-commerce</h2>
      </div>
      <div class="products-hero" aria-labelledby="products-hero-title">
        <div class="products-hero__bg" data-ecom-hero>
          <img src="/media/products/hero-ecommerce-platform.png" alt="" aria-hidden="true" data-ecom-hero-img />
        </div>
        <div class="products-hero__overlay"></div>
        <div class="products-hero__inner">
          <div class="content">
            <div class="products-hero__content">
              <h3 id="products-hero-title" class="products-hero__title" data-i18n="products.title">End-to-end commerce infrastructure for grocery retail.</h3>
              <p class="products-hero__subline" data-i18n="products.subline">A modular, API-first platform that runs digital storefront, order management, picking, logistics, and ERP connectivity — designed for enterprise-scale operations.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="products-techstack">
        <div class="content">
          <div class="products-techstack__header">
            <h3 class="products-techstack__headline" data-i18n="products.techstack.headline">Production-grade tech stack, proven in real operations.</h3>
          </div>
          <div class="products-techstack__scroller">
            <div class="products-techstack__row" aria-label="Tech stack" tabindex="0">
              ${techStackItems.map((item) => `
                <div class="products-techstack__item${item.textOnly ? " is-text-only" : ""}" data-techstack="${item.slug}">
                  ${item.textOnly ? `
                    <span class="products-techstack__logo-text">${item.label}</span>
                  ` : `
                    <img
                      class="products-techstack__img"
                      src="/media/tech/${item.iconSlug || item.slug}.svg"
                      alt="${item.label} logo"
                      loading="lazy"
                      onerror="this.style.display='none'; this.closest('.products-techstack__item').classList.add('is-fallback');"
                    />
                  `}
                  ${item.textOnly ? "" : `
                    <div class="products-techstack__logo">${item.label}</div>
                  `}
                  <div class="products-techstack__label">${item.label}</div>
                </div>
              `).join("")}
            </div>
            <div class="products-techstack__controls" aria-hidden="true">
              <button class="products-techstack__control products-techstack__control--prev" type="button" data-techstack-scroll="prev" aria-label="Scroll tech stack left">
                <span aria-hidden="true">←</span>
              </button>
              <button class="products-techstack__control products-techstack__control--next" type="button" data-techstack-scroll="next" aria-label="Scroll tech stack right">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <p class="products-trademark" data-i18n="products.trademark">All trademarks and logos are the property of their respective owners.</p>
        </div>
      </div>
      <div class="products-domains">
        <div class="content">
          <div class="products-domains__list">
            <article class="products-domain">
              <h3 class="products-domain__title" data-i18n="products.domains.platform.title">Platform Architecture</h3>
              <p class="products-domain__desc" data-i18n="products.domains.platform.desc">Event-driven backend with async workflows and strict domain boundaries.</p>
              <div class="products-domain__logos" aria-label="Platform Architecture technologies">
                <span class="products-domain__logo">.NET</span>
                <span class="products-domain__logo">EF Core</span>
                <span class="products-domain__logo">MassTransit</span>
                <span class="products-domain__logo">RabbitMQ</span>
                <span class="products-domain__logo">Azure Service Bus</span>
              </div>
            </article>
            <article class="products-domain">
              <h3 class="products-domain__title" data-i18n="products.domains.client.title">Client Applications</h3>
              <p class="products-domain__desc" data-i18n="products.domains.client.desc">Multi-channel web and mobile clients built on shared, contract-safe APIs.</p>
              <div class="products-domain__logos" aria-label="Client Applications technologies">
                <span class="products-domain__logo">React</span>
                <span class="products-domain__logo">Next.js</span>
                <span class="products-domain__logo">TypeScript</span>
                <span class="products-domain__logo">React Native</span>
                <span class="products-domain__logo">OpenAPI</span>
              </div>
            </article>
            <article class="products-domain">
              <h3 class="products-domain__title" data-i18n="products.domains.infrastructure.title">Infrastructure & Operations</h3>
              <p class="products-domain__desc" data-i18n="products.domains.infrastructure.desc">Container-first delivery with environment parity and controlled scaling.</p>
              <div class="products-domain__logos" aria-label="Infrastructure and Operations technologies">
                <span class="products-domain__logo">Azure</span>
                <span class="products-domain__logo">Docker</span>
                <span class="products-domain__logo">Kubernetes</span>
                <span class="products-domain__logo">Helm</span>
                <span class="products-domain__logo">Cloudflare</span>
              </div>
            </article>
            <article class="products-domain">
              <h3 class="products-domain__title" data-i18n="products.domains.observability.title">Observability & Contracts</h3>
              <p class="products-domain__desc" data-i18n="products.domains.observability.desc">End-to-end tracing and contract-driven integration to prevent drift.</p>
              <div class="products-domain__logos" aria-label="Observability and Contracts technologies">
                <span class="products-domain__logo">OpenTelemetry</span>
                <span class="products-domain__logo">Application Insights</span>
                <span class="products-domain__logo">OpenAPI/Swagger</span>
                <span class="products-domain__logo">FluentValidation</span>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="product-suite">
        <div class="content">
          <div class="product-suite__header">
            <h2 class="product-suite__title">Product suite</h2>
          </div>
          <div class="product-suite__layout">
            <div class="product-suite__media">
              <p class="product-suite__lead">Everything you need to operate modern grocery commerce at scale</p>
              <img
                class="product-suite__image"
                src="/media/products/product-suite-hero.png"
                alt="Storefront web & mobile, picking & distribution, office applications"
              />
            </div>
            <div class="product-suite__cards">
              <article class="product-suite__card">
                <h3 class="product-suite__card-title">Storefront Web</h3>
                <p class="product-suite__card-desc">Customer-facing web storefront with catalog, campaigns, and checkout.</p>
                <div class="product-suite__tags">
                  <span class="product-suite__tag">Web</span>
                  <span class="product-suite__tag">SSR/ISR</span>
                  <span class="product-suite__tag">White-label</span>
                </div>
                <span class="product-suite__badge product-suite__badge--web" aria-label="Web app">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.7 2.5 15.3 0 18m0-18c-2.5 2.7-2.5 15.3 0 18M3 12h18M4.5 7.5h15M4.5 16.5h15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </article>
              <article class="product-suite__card">
                <h3 class="product-suite__card-title">Storefront Mobile</h3>
                <p class="product-suite__card-desc">Mobile shopping experience for repeat orders and personalized discovery.</p>
                <div class="product-suite__tags">
                  <span class="product-suite__tag">iOS/Android</span>
                  <span class="product-suite__tag">White-label</span>
                  <span class="product-suite__tag">Fast UX</span>
                </div>
                <span class="product-suite__badge product-suite__badge--mobile" aria-label="Mobile app">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <rect x="7" y="3.5" width="10" height="17" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="1.6"/>
                    <circle cx="12" cy="17.5" r="0.9" fill="currentColor"/>
                  </svg>
                </span>
              </article>
              <article class="product-suite__card">
                <h3 class="product-suite__card-title">Picking & Distribution</h3>
                <p class="product-suite__card-desc">In-store picker app to manage orders, substitutions, and packing flows.</p>
                <div class="product-suite__tags">
                  <span class="product-suite__tag">Operations</span>
                  <span class="product-suite__tag">Real-time</span>
                  <span class="product-suite__tag">Workflow</span>
                </div>
                <span class="product-suite__badge product-suite__badge--mobile" aria-label="Mobile app">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <rect x="7" y="3.5" width="10" height="17" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="1.6"/>
                    <circle cx="12" cy="17.5" r="0.9" fill="currentColor"/>
                  </svg>
                </span>
              </article>
              <article class="product-suite__card">
                <h3 class="product-suite__card-title">Office</h3>
                <p class="product-suite__card-desc">Admin console for catalog, pricing, orders, and operational control.</p>
                <div class="product-suite__tags">
                  <span class="product-suite__tag">Admin</span>
                  <span class="product-suite__tag">RBAC</span>
                  <span class="product-suite__tag">Backoffice</span>
                </div>
                <span class="product-suite__badge product-suite__badge--web" aria-label="Web app">
                  <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.7 2.5 15.3 0 18m0-18c-2.5 2.7-2.5 15.3 0 18M3 12h18M4.5 7.5h15M4.5 16.5h15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
