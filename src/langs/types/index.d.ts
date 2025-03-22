// THIS FILE IS AUTO GENERATED, DO NOT MODIFY MANUALLY.

export type Language = "en" | "fr" | "ar";

export type DefaultLanguage = "en";

export type TranslationKey =
  | "contact"
  | "features"
  | "pricing"
  | "sign_in"
  | "free_trial"
  | "language"
  | "banner_title"
  | "banner_subtitle"
  | "banner_tagline"
  | "maximize_returns"
  | "get_started_for_free"
  | "watch_video"
  | "cta_title"
  | "cta_subtitle"
  | "getInTouch"
  | "contactDescription"
  | "firstName"
  | "lastName"
  | "email"
  | "subject"
  | "message"
  | "submit"
  | "how_it_works"
  | "chat_with_wizabot";

export type Translations = Record<TranslationKey, Record<Language, string>>;

export interface TranslationFileSchema {
  languages: Language[];
  defaultLanguage: Language;
  translations: Translations;
}
