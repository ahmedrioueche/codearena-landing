"use client";
import { useEffect, useState } from "react";
import langsMap from "./langs.json";
import { Language, TranslationKey, TranslationFileSchema } from "./types";
import languagesCodes from "./config/languagesCodes";
import { useSettings } from "@/context/SettingsContext";

export const translations = langsMap as TranslationFileSchema;
export const MAIN_LANG: Language = translations.defaultLanguage;

export interface LanguageInfo {
  name: string;
  flag: string;
  rtl?: boolean;
}

export const validLangs: Record<Language, LanguageInfo> =
  translations.languages.reduce((acc, lang) => {
    acc[lang] = {
      name: languagesCodes[lang].Name,
      flag: languagesCodes[lang].Flag,
      rtl: languagesCodes[lang].rtl || false,
    };
    return acc;
  }, {} as Record<Language, LanguageInfo>);

export const useTranslator = () => {
  const { language } = useSettings();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  useEffect(() => {
    setCurrentLanguage(language);
  }, [language]);

  const translator = (
    key: TranslationKey,
    ...placeholders: string[]
  ): string => {
    const selectedKey = translations.translations[key];
    let translation =
      selectedKey?.[currentLanguage] || selectedKey?.[MAIN_LANG];

    if (!translation) {
      console.warn(
        `Translation not found for key: ${key}, language: ${currentLanguage} or default language: ${MAIN_LANG}`
      );
      return key;
    }

    placeholders.forEach((placeholder, index) => {
      translation = translation.replace(`{${index}}`, placeholder);
    });

    return translation;
  };

  return translator;
};
