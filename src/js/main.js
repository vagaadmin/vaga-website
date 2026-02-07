import { applyTranslations, detectLanguage } from "./i18n.js";
import { CONTACT_EMAIL } from "./config.js";

import hero from "./sections/hero.js";
import whatWeDo from "./sections/whatWeDo.js";
import howWeWork from "./sections/howWeWork.js";
import products from "./sections/products.js";
import trust from "./sections/trust.js";
import careers from "./sections/careers.js";
import contact from "./sections/contact.js";
import footer from "./sections/footer.js";

const main = document.getElementById("main");

main.innerHTML = [
  hero(),
  whatWeDo(),
  howWeWork(),
  products(),
  trust(),
  careers(),
  contact()
].join("");

document.body.insertAdjacentHTML("beforeend", footer());

const emailEl = document.querySelector("[data-contact-email]");
if (emailEl) {
  emailEl.textContent = CONTACT_EMAIL;
  emailEl.setAttribute("href", `mailto:${CONTACT_EMAIL}`);
}

const initialLang = detectLanguage();
applyTranslations(initialLang);

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    applyTranslations(lang);
  });
});
