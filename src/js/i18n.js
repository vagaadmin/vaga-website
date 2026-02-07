import en from "../i18n/en.json";
import tr from "../i18n/tr.json";
import it from "../i18n/it.json";

export const dictionaries = { en, tr, it };

export function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => {
    if (acc && acc[key] !== undefined) return acc[key];
    return null;
  }, obj);
}

export function applyTranslations(lang) {
  const dict = dictionaries[lang] || dictionaries.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getByPath(dict, key);
    if (value !== null) {
      el.textContent = value;
    }
  });
}

export function detectLanguage() {
  const lang = (navigator.language || "en").toLowerCase();
  if (lang.startsWith("tr")) return "tr";
  if (lang.startsWith("it")) return "it";
  return "en";
}
