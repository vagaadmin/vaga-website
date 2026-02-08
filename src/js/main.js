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

function applyHeroTitleLines() {
  const titleEl = document.querySelector("[data-reveal=\"lines\"]");
  if (!titleEl) return;
  const text = titleEl.textContent.trim();
  if (!text) return;

  const words = text.split(/\s+/);
  const lineCount = 2;
  const perLine = Math.ceil(words.length / lineCount);
  const lines = [];
  for (let i = 0; i < words.length; i += perLine) {
    lines.push(words.slice(i, i + perLine).join(" "));
  }
  while (lines.length < lineCount) lines.push("");

  titleEl.innerHTML = "";
  const delays = [0, 180];
  lines.slice(0, lineCount).forEach((line, idx) => {
    const span = document.createElement("span");
    span.className = "reveal-line";
    span.setAttribute("data-reveal", "line");
    span.style.setProperty("--delay", `${delays[idx] || 0}ms`);
    const steps = Math.min(26, Math.max(12, Math.round(line.length / 2)));
    span.style.setProperty("--steps", steps);
    span.textContent = line;
    titleEl.appendChild(span);
  });
}

applyHeroTitleLines();

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    applyTranslations(lang);
    applyHeroTitleLines();
    replaySubtitleReveal();
    replayCtaReveal();
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

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const heroA = document.querySelector("[data-hero-video=\"a\"]");
const heroB = document.querySelector("[data-hero-video=\"b\"]");
const heroSection = document.querySelector(".hero");
const header = document.querySelector("header");
const ecomHero = document.querySelector(".products-hero");
const ecomHeroImg = document.querySelector("[data-ecom-hero-img]");
const techStackRow = document.querySelector(".products-techstack__row");
const techStackControls = document.querySelectorAll("[data-techstack-scroll]");

function safePlay(video) {
  if (!video) return;
  const res = video.play();
  if (res && typeof res.catch === "function") {
    res.catch(() => {});
  }
}

function setActiveVideo(next, current) {
  if (current) current.classList.remove("is-active");
  if (next) next.classList.add("is-active");
}

let activeVideo = heroA;
let nextVideo = heroB;
let switchTimeout = null;
let switching = false;
let onTimeUpdate = null;

function scheduleSwitch(video) {
  if (!video) return;
  if (switchTimeout) clearTimeout(switchTimeout);
  if (onTimeUpdate) video.removeEventListener("timeupdate", onTimeUpdate);

  const fadeDuration = 1500;
  const safetyMargin = 200;
  onTimeUpdate = () => {
    if (!video.duration || switching) return;
    const remainingMs = (video.duration - video.currentTime) * 1000;
    if (remainingMs <= fadeDuration + safetyMargin) {
      video.removeEventListener("timeupdate", onTimeUpdate);
      switchVideos();
    }
  };
  video.addEventListener("timeupdate", onTimeUpdate);
}

function switchVideos() {
  if (!activeVideo || !nextVideo || switching) return;
  switching = true;

  nextVideo.currentTime = 0;
  safePlay(nextVideo);
  setActiveVideo(nextVideo, activeVideo);

  const previous = activeVideo;
  activeVideo = nextVideo;
  nextVideo = previous;

  window.setTimeout(() => {
    if (previous) previous.pause();
    switching = false;
    scheduleSwitch(activeVideo);
  }, 1500);
}

function initHeroVideoLoop() {
  if (!heroA || !heroB || prefersReducedMotion) return;
  heroA.loop = false;
  heroB.loop = false;

  activeVideo = heroA;
  nextVideo = heroB;

  heroA.currentTime = 0;
  safePlay(heroA);

  if (heroB.readyState < 1) {
    heroB.load();
  }

  const onLoaded = () => scheduleSwitch(heroA);
  if (heroA.readyState >= 1) {
    onLoaded();
  } else {
    heroA.addEventListener("loadedmetadata", onLoaded, { once: true });
  }
}

document.addEventListener("visibilitychange", () => {
  if (!heroA || !heroB || prefersReducedMotion) return;
  if (document.hidden) {
    heroA.pause();
    heroB.pause();
    if (switchTimeout) clearTimeout(switchTimeout);
  } else {
    safePlay(activeVideo);
    scheduleSwitch(activeVideo);
  }
});

initHeroVideoLoop();

if (heroSection && !prefersReducedMotion) {
  requestAnimationFrame(() => {
    heroSection.classList.add("hero--ready");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const subtitle = heroSection.querySelector(".hero-subtitle");
        if (subtitle) subtitle.classList.add("is-in");
        const ctas = heroSection.querySelector(".hero-ctas");
        if (ctas) ctas.classList.add("is-in");
      });
    });
  });
}

function initEcomHeroDrift() {
  if (!ecomHero || !ecomHeroImg || prefersReducedMotion) return;
  let ticking = false;

  const update = () => {
    const rect = ecomHero.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.bottom <= 0 || rect.top >= vh) return;
    const progress = (vh - rect.top) / (vh + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));
    const drift = (clamped - 0.5) * 44;
    ecomHero.style.setProperty("--ecom-drift", `${drift.toFixed(2)}px`);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

initEcomHeroDrift();

function updateTechStackControls() {
  if (!techStackRow || techStackControls.length === 0) return;
  const maxScroll = techStackRow.scrollWidth - techStackRow.clientWidth;
  if (maxScroll <= 0) {
    techStackControls.forEach((btn) => {
      btn.classList.remove("is-available");
    });
    return;
  }
  const scrollLeft = Math.min(maxScroll, Math.max(0, techStackRow.scrollLeft));
  const atStart = scrollLeft <= 2;
  const atEnd = scrollLeft >= maxScroll - 2;
  techStackControls.forEach((btn) => {
    const dir = btn.getAttribute("data-techstack-scroll");
    const shouldShow = dir === "prev" ? !atStart : !atEnd;
    btn.classList.toggle("is-available", shouldShow);
  });
}

function initTechStackControls() {
  if (!techStackRow || techStackControls.length === 0) return;

  const scrollByViewport = (direction) => {
    const maxScroll = techStackRow.scrollWidth - techStackRow.clientWidth;
    const delta = Math.max(0, techStackRow.clientWidth - 48);
    const target = direction === "next"
      ? Math.min(maxScroll, techStackRow.scrollLeft + delta)
      : Math.max(0, techStackRow.scrollLeft - delta);
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) {
      techStackRow.scrollLeft = target;
    } else {
      techStackRow.scrollTo({ left: target, behavior: "smooth" });
    }
    if (target === maxScroll) {
      window.setTimeout(() => {
        techStackRow.scrollLeft = maxScroll;
      }, prefersReduce ? 0 : 240);
    }
  };

  techStackControls.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("is-available")) return;
      const dir = btn.getAttribute("data-techstack-scroll");
      scrollByViewport(dir);
    });
  });

  techStackRow.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByViewport("next");
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByViewport("prev");
    }
  });

  const scheduleUpdate = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(updateTechStackControls);
    });
  };

  scheduleUpdate();
  techStackRow.addEventListener("scroll", updateTechStackControls, { passive: true });
  window.addEventListener("resize", scheduleUpdate);

  techStackRow.querySelectorAll("img").forEach((img) => {
    img.addEventListener("load", scheduleUpdate, { once: true });
    img.addEventListener("error", scheduleUpdate, { once: true });
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(scheduleUpdate).catch(() => {});
  }
}

initTechStackControls();

function replaySubtitleReveal() {
  if (prefersReducedMotion || !heroSection) return;
  const subtitle = heroSection.querySelector(".hero-subtitle");
  if (!subtitle) return;
  subtitle.classList.remove("is-in");
  void subtitle.offsetHeight;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      subtitle.classList.add("is-in");
    });
  });
}

function replayCtaReveal() {
  if (prefersReducedMotion || !heroSection) return;
  const ctas = heroSection.querySelector(".hero-ctas");
  if (!ctas) return;
  ctas.classList.remove("is-in");
  void ctas.offsetHeight;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ctas.classList.add("is-in");
    });
  });
}

function updateHeaderState() {
  if (!header) return;
  if (window.scrollY > 4) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
