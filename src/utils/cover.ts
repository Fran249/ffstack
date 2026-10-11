/**
 * Placeholder project cover art.
 *
 * A single function so real artwork can be swapped in later (local images,
 * `astro:assets`, a CMS field…) without touching the card or the detail page.
 *
 * The SAME URL must be used on both ends of a view transition, otherwise the
 * browser morphs between two different bitmaps instead of one element.
 *
 * To swap in real screenshots: drop `<slug>.png`/`.jpg` into `public/projects/`
 * and update this function (or keep the `.svg` name and replace the file).
 */

export function projectCover(slug: string): string {
	return `/projects/${slug}.svg`;
}
