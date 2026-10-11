/**
 * Locale-keyed page content (longer data than the flat UI dictionary).
 *
 * Tech names in `stack` are proper nouns and stay identical in both locales.
 */

import type { Locale } from "./ui";

export interface Service {
	index: string;
	title: string;
	description: string;
}

export interface Experience {
	company: string;
	description: string;
	period: string;
	role: string;
	stack: string;
	points: string[];
}

export interface EducationItem {
	title: string;
	detail: string;
}

export interface SiteContent {
	profile: string;
	stack: string[];
	services: Service[];
	experiences: Experience[];
	education: EducationItem[];
}

const stack = [
	"HTML",
	"CSS",
	"Tailwind CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Astro",
	"Firebase",
	"Supabase",
	"Cloud Functions",
	"Cloudflare Workers",
	"APIs",
	"Webhooks",
	"CI/CD",
	"MercadoPago",
	"Tauri v2",
];

const es: SiteContent = {
	profile:
		"Desarrollador Full-Stack autodidacta con casi 6 años de experiencia construyendo y manteniendo aplicaciones web a medida para clientes reales. Mi fuerte es el frontend: creo interfaces rápidas y bien estructuradas, con mucha atención al detalle. También tengo experiencia sólida en backend con Firebase y Cloud Functions, y experiencia de entrega de punta a punta, desde el diseño hasta el despliegue automatizado.",
	stack,
	services: [
		{
			index: "01/",
			title: "Sitios web",
			description:
				"Experiencias rápidas y responsivas que hacen que tu negocio se sienta tan bien online como en persona.",
		},
		{
			index: "02/",
			title: "Aplicaciones web",
			description:
				"Productos, paneles y herramientas a medida que convierten flujos de trabajo complicados en interacciones simples.",
		},
		{
			index: "03/",
			title: "Backends",
			description:
				"APIs, integraciones y bases de datos pensadas para sostener tu producto a medida que crece.",
		},
	],
	experiences: [
		{
			company: "Kic Market",
			description:
				"Marketplace de e-commerce para comercios locales de Bahía Blanca con dos tipos de usuarios (compradores y vendedores), cada uno con su panel de gestión. Los vendedores tienen su propia storefront. Incluye panel de superadmin en Tauri para el dueño, gestión de vendedores y control de ingresos por fees.",
			period: "2025 – Presente",
			role: "Desarrollador Freelance",
			stack: "Next.js · Shadcn · Tailwind · Firebase · Firestore · Cloud Functions · Storage · MercadoPago Checkout Pro · Split Payments · Tauri v2 · CI/CD",
			points: [
				"Desarrollé un marketplace de e-commerce con dos tipos de usuarios: compradores y vendedores, cada uno con su propio panel de gestión.",
				"Cada vendedor cuenta con su propia página o storefront para gestionar sus productos y ventas.",
				"Integración con Mercado Pago Checkout Pro y split payments para gestionar pagos y distribución de comisiones entre la plataforma y los vendedores.",
				"Panel de superadmin desarrollado con Tauri v2 para el dueño de la empresa, orientado a gestionar vendedores y controlar los ingresos por ventas mediante fees.",
				"Actualmente en beta (~85% completado); por ese motivo no cuenta con links públicos.",
			],
		},
		{
			company: "LevelUp",
			description:
				"E-commerce de gaming con la lógica de backend en Cloudflare Workers, un panel de administración para escritorio y Android, y despliegue totalmente automatizado.",
			period: "2026 – Presente",
			role: "Desarrollador Freelance",
			stack: "Next.js · Supabase · Cloudflare Workers · Tauri v2 · CI/CD",
			points: [
				"Desarrollé un e-commerce de gaming con Next.js y Supabase, usando Cloudflare Workers para la lógica de backend.",
				"Construí un panel de administración en Tauri v2 para escritorio y Android, que centraliza la gestión de la tienda en todas las plataformas.",
				"Configuré flujos de despliegue automatizados con CI/CD para agilizar las actualizaciones y la entrega.",
			],
		},
		{
			company: "Lagom Philosophy",
			description:
				"E-commerce de artesanías enfocado principalmente en ventas unitarias, no en cantidades masivas. Checkout integrado, webhooks de pagos en tiempo real y correos transaccionales automatizados.",
			period: "2024 – Presente",
			role: "Desarrollador Freelance",
			stack: "React · Firebase · MercadoPago Checkout Pro · Webhooks · Resend · Tauri v2 · CI/CD",
			points: [
				"Desarrollé un e-commerce de artesanías enfocado en ventas unitarias, con checkout integrado, webhooks de pagos en tiempo real y correos transaccionales automatizados.",
				"Construí un panel en Tauri v2 que centraliza la gestión de productos, pedidos y contenido en un solo lugar.",
			],
		},
		{
			company: "Rentive Capital",
			description:
				"Plataforma de inversión construida con Next.js, Firebase y Cloud Functions, con lógica financiera centralizada y fuerte foco en rendimiento de carga.",
			period: "2025 – Presente",
			role: "Desarrollador Freelance",
			stack: "Next.js · Firebase · Cloud Functions · GitHub Actions · CI/CD",
			points: [
				"Desarrollé una plataforma de inversión con aproximadamente 25 usuarios activos y lógica financiera centralizada en Cloud Functions.",
				"Optimicé el rendimiento: subí el puntaje de Speed Insights del 50% al 80% y reduje el tiempo de carga un 40%.",
			],
		},
		{
			company: "CXP Resources",
			description:
				"Sitio corporativo mantenido durante 5 años: tres iteraciones menores, un rediseño completo y un panel de contenido integrado al flujo del cliente.",
			period: "2020 – Presente",
			role: "Desarrollador Freelance",
			stack: "React · Firebase · Tauri v2 · GitHub Actions · CI/CD",
			points: [
				"Mantuve el sitio corporativo durante 5 años, con tres iteraciones menores y un rediseño visual completo.",
				"Integré un panel en Tauri v2 al flujo de trabajo del cliente, permitiendo actualizar contenido sin asistencia técnica.",
			],
		},
		{
			company: "Hugo Prieto Portfolio",
			description:
				"Sitio portfolio moderno en React, migrado desde WordPress, con identidad visual y SEO técnico definidos desde cero.",
			period: "2021 – Presente",
			role: "Desarrollador Freelance",
			stack: "React · Firebase · TypeScript · GitHub Actions · CI/CD",
			points: [
				"Migré un sitio básico en WordPress a un sitio moderno en React de cuatro páginas, con navegación guiada.",
				"Rediseñé el sitio por completo, estableciendo su identidad visual y su SEO técnico desde cero.",
			],
		},
	],
	education: [
		{
			title: "Educación secundaria",
			detail: "Incompleta",
		},
		{
			title: "Desarrollador autodidacta",
			detail: "6 años de experiencia práctica",
		},
		{
			title: "Español",
			detail: "Nativo",
		},
		{
			title: "Inglés",
			detail: "Lectura, escritura y comunicación técnica con nivel profesional",
		},
	],
};

const en: SiteContent = {
	profile:
		"Self-taught Full-Stack Developer with nearly 6 years of experience building and maintaining custom web applications for real-world clients. My main strength is frontend development, creating fast, well-structured interfaces with close attention to detail. I also have solid backend experience with Firebase and Cloud Functions, as well as end-to-end delivery experience, from design to automated deployment.",
	stack,
	services: [
		{
			index: "01/",
			title: "Websites",
			description:
				"Fast, responsive experiences that make your business feel as good online as it does in person.",
		},
		{
			index: "02/",
			title: "Web apps",
			description:
				"Custom products, dashboards and tools that turn complicated workflows into simple interactions.",
		},
		{
			index: "03/",
			title: "Backends",
			description:
				"APIs, integrations and data foundations built to support your product as it grows.",
		},
	],
	experiences: [
		{
			company: "Kic Market",
			description:
				"E-commerce marketplace for local businesses in Bahía Blanca with two user types (buyers and sellers), each with their own management panel. Sellers have their own storefront. Includes a Tauri-based superadmin panel for the owner, seller management, and fee-based revenue control.",
			period: "2025 – Present",
			role: "Freelance Developer",
			stack: "Next.js · Shadcn · Tailwind · Firebase · Firestore · Cloud Functions · Storage · MercadoPago Checkout Pro · Split Payments · Tauri v2 · CI/CD",
			points: [
				"Developed an e-commerce marketplace with two user types: buyers and sellers, each with their own management panel.",
				"Each seller has their own storefront page to manage products and sales.",
				"Integrated Mercado Pago Checkout Pro and split payments to handle payments and commission distribution between the platform and sellers.",
				"Built a Tauri v2 superadmin panel for the business owner to manage sellers and control fee-based revenue.",
				"Currently in beta (~85% complete); no public links available for this reason.",
			],
		},
		{
			company: "LevelUp",
			description:
				"Gaming e-commerce with backend logic on Cloudflare Workers, an admin dashboard for desktop and Android, and fully automated deployment.",
			period: "2026 – Present",
			role: "Freelance Developer",
			stack: "Next.js · Supabase · Cloudflare Workers · Tauri v2 · CI/CD",
			points: [
				"Developed a gaming e-commerce platform using Next.js and Supabase, with Cloudflare Workers for backend logic.",
				"Built a Tauri v2 admin dashboard for desktop and Android, enabling centralized store management across platforms.",
				"Configured automated deployment workflows using CI/CD to streamline updates and delivery.",
			],
		},
		{
			company: "Lagom Philosophy",
			description:
				"Handcrafted e-commerce focused on individual sales rather than bulk. Integrated checkout, real-time payment webhooks, and automated transactional emails.",
			period: "2024 – Present",
			role: "Freelance Developer",
			stack: "React · Firebase · MercadoPago Checkout Pro · Webhooks · Resend · Tauri v2 · CI/CD",
			points: [
				"Developed a handcrafted e-commerce platform focused on individual sales, with integrated checkout, real-time payment webhooks, and automated transactional emails.",
				"Built a Tauri v2 dashboard that centralizes product, order, and content management in one place.",
			],
		},
		{
			company: "Rentive Capital",
			description:
				"Investment platform built with Next.js, Firebase, and Cloud Functions, with centralized financial logic and a strong focus on load performance.",
			period: "2025 – Present",
			role: "Freelance Developer",
			stack: "Next.js · Firebase · Cloud Functions · GitHub Actions · CI/CD",
			points: [
				"Developed an investment platform with approximately 25 active users and centralized financial logic implemented in Cloud Functions.",
				"Optimized performance, improving the Speed Insights score from 50% to 80% and reducing page load time by 40%.",
			],
		},
		{
			company: "CXP Resources",
			description:
				"Corporate site maintained for 5 years: three minor iterations, one complete redesign, and a content dashboard integrated into the client's workflow.",
			period: "2020 – Present",
			role: "Freelance Developer",
			stack: "React · Firebase · Tauri v2 · GitHub Actions · CI/CD",
			points: [
				"Maintained a corporate website for 5 years, delivering three minor iterations and one complete visual redesign.",
				"Integrated a Tauri v2 dashboard into the client's workflow, enabling content updates without technical assistance.",
			],
		},
		{
			company: "Hugo Prieto Portfolio",
			description:
				"Modern React portfolio site, migrated from WordPress, with visual identity and technical SEO established from scratch.",
			period: "2021 – Present",
			role: "Freelance Developer",
			stack: "React · Firebase · TypeScript · GitHub Actions · CI/CD",
			points: [
				"Migrated a basic WordPress website into a modern four-page React site with guided navigation.",
				"Completely redesigned the website, establishing its visual identity and technical SEO from the ground up.",
			],
		},
	],
	education: [
		{
			title: "General Secondary Education",
			detail: "Incomplete",
		},
		{
			title: "Self-Taught Developer",
			detail: "6 years of hands-on experience",
		},
		{
			title: "Spanish",
			detail: "Native",
		},
		{
			title: "English",
			detail: "Professional proficiency in reading, writing, and technical communication",
		},
	],
};

export const content: Record<Locale, SiteContent> = { es, en };
