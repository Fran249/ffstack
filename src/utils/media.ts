/**
 * Project media manifest — the single source of truth for project screenshots.
 *
 * Every project ships numbered screenshots in `public/projects/` named
 * `<prefix>-<n>.webp`, numbered from 1. The first one doubles as the gallery
 * thumbnail, so the `/hire-me` card and the detail carousel share the exact
 * same URL — which is what lets the view transition morph a single element
 * instead of cross-fading two bitmaps.
 *
 * Screenshots are ~1896×860 (≈11:5), so consumers should frame them at that
 * ratio; a 16:9 frame with `object-cover` crops about a fifth of the width.
 *
 * To add or replace artwork: drop `<prefix>-<n>.webp` files into
 * `public/projects/` and adjust `count`. To swap a project's whole set, change
 * its `prefix`.
 */

interface ProjectMediaEntry {
	prefix: string;
	count: number;
}

const media: Record<string, ProjectMediaEntry> = {
	"kic-market": { prefix: "kic", count: 6 },
	levelup: { prefix: "levelup", count: 6 },
	"lagom-philosophy": { prefix: "lagom", count: 5 },
	"loto-negro": { prefix: "loto", count: 4 },
	"rentive-capital": { prefix: "rentive", count: 4 },
	"cxp-resources": { prefix: "cxp", count: 4 },
	"hugo-prieto-portfolio": { prefix: "hugo", count: 3 },
};

/** Every screenshot for a project, in display order. Throws on an unknown slug. */
export function projectGallery(slug: string): string[] {
	const entry = media[slug];

	if (!entry || entry.count < 1) {
		throw new Error(
			`No media registered for project "${slug}". Add it to src/utils/media.ts.`,
		);
	}

	return Array.from(
		{ length: entry.count },
		(_, index) => `/projects/${entry.prefix}-${index + 1}.webp`,
	);
}

/** Thumbnail used by the `/hire-me` gallery and the carousel's first slide. */
export function projectCover(slug: string): string {
	return projectGallery(slug)[0] as string;
}
