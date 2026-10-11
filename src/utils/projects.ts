/**
 * Shared `getStaticPaths` payload for the per-experience detail routes.
 *
 * Both locale route trees (`/hire-me/[slug]` and `/en/hire-me/[slug]`) emit the
 * same slugs; each path carries both locales so the page can pick its copy from
 * `Astro.currentLocale` instead of guessing at build time.
 */

import { content } from "../i18n/content";
import type { Experience } from "../i18n/content";
import { slugify } from "./slug";

export interface ProjectPathProps {
	index: number;
	es: Experience;
	en: Experience;
}

export function projectStaticPaths(): {
	params: { slug: string };
	props: ProjectPathProps;
}[] {
	const enBySlug = new Map(
		content.en.experiences.map((experience) => [
			slugify(experience.company),
			experience,
		]),
	);

	return content.es.experiences.map((experience, index) => {
		const slug = slugify(experience.company);
		const en = enBySlug.get(slug);

		if (!en) {
			throw new Error(
				`Missing English copy for experience "${experience.company}" (slug "${slug}").`,
			);
		}

		return { params: { slug }, props: { index, es: experience, en } };
	});
}
