/**
 * i18n helpers. Routing is Astro's built-in i18n; the strings live in `ui.ts`
 * and the page data in `content.ts`.
 */

import { defaultLang, languages, ui, type Locale, type UIKey } from "./ui";

export function isLocale(value: string | null | undefined): value is Locale {
	return value != null && value in languages;
}

/** Resolve a locale coming from `Astro.currentLocale`, falling back to `es`. */
export function getLocale(currentLocale: string | undefined): Locale {
	return isLocale(currentLocale) ? currentLocale : defaultLang;
}

export function useTranslations(locale: Locale) {
	return function t(key: UIKey): string {
		return ui[locale][key] ?? ui[defaultLang][key];
	};
}



/**
 * The route path without its locale prefix.
 * `/` → ``, `/hire-me` → `hire-me`, `/en/` → ``, `/en/hire-me` → `hire-me`.
 */
export function stripLocale(pathname: string): string {
	const segments = pathname.split("/").filter(Boolean);
	if (segments.length > 0 && isLocale(segments[0]) && segments[0] !== defaultLang) {
		segments.shift();
	}
	return segments.join("/");
}
