import "../styles/hero.css";
import { applyTranslations, detectLanguage } from "./i18n.js";
import { CONTACT_EMAIL, CAREERS_EMAIL } from "./config.js";

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

function wireMailtoForm(form, recipient, label) {
  const statusEl = form.querySelector("[data-form-status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector("[name=\"name\"]")?.value?.trim() || "";
    const email = form.querySelector("[name=\"email\"]")?.value?.trim() || "";
    const message = form.querySelector("[name=\"message\"]")?.value?.trim() || "";
    const cv = form.querySelector("[name=\"cv\"]")?.value?.trim() || "";

    const subject = `${label} — ${name || "No name"}`;
    const bodyLines = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Message: ${message || "-"}`,
    ];
    if (cv) bodyLines.push(`CV: ${cv}`);

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;

    form.reset();
    if (statusEl) {
      statusEl.textContent = "Thanks. Your email client should open shortly.";
    }
  });
}

const contactForm = document.querySelector("[data-form=\"contact\"]");
if (contactForm) wireMailtoForm(contactForm, CONTACT_EMAIL, "Contact");

const careersForm = document.querySelector("[data-form=\"careers\"]");
if (careersForm) wireMailtoForm(careersForm, CAREERS_EMAIL, "Careers");
