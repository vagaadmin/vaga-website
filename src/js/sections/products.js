export default function products() {
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
    </section>
  `;
}
