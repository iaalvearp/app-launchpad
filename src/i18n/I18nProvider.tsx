import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, translations, Dict } from "./translations";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}

const I18nCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "alpy-lang";

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Lang | null) || "en";
    setLangState(saved);
    document.documentElement.lang = saved;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  return (
    <I18nCtx.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nCtx.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
