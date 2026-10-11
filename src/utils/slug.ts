/**
 * Slug helper for experience/project routes.
 *
 * Derived from the company name rather than stored per-locale so `es` and `en`
 * cannot drift apart (both share identical company names by design).
 */

export function slugify(value: string): string {
	return value
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}
