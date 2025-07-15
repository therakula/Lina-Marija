import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["sr-RS", "en-GB", "de-DE"],

  // Used when no locale matches
  defaultLocale: "sr-RS"
});

export type Locale = (typeof routing.locales)[number];
