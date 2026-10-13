/**
 * UI dictionary.
 *
 * Spanish is the source of truth for the key list: the `en` dictionary is typed
 * as `Record<keyof typeof es, string>`, so forgetting a translation is a
 * compile error instead of a blank string at runtime.
 */

export const defaultLang = "es";

export const languages = {
	es: "Español",
	en: "English",
} as const;

export type Locale = keyof typeof languages;

const es = {
	// Layout
	"site.title": "FFSTACK — Desarrollo Fullstack Freelance",
	"site.description":
		"Desarrollo fullstack freelance de FFSTACK: sitios web y aplicaciones a medida — rápidos, claros y pensados para crecer.",
	"brand.name": "FFSTACK",

	// Header
	"nav.services": "Servicios",
	"nav.hire": "Contratame",
	"nav.languageSwitch": "Cambiar idioma",

	// Home — hero
	"hero.eyebrow": "FFSTACK / Desarrollo Fullstack Freelance",
	"hero.line1": "Construye mejor.",
	"hero.line2": "Lanza antes.",
	"hero.intro":
		"Tu negocio necesita más que un sitio que se vea bien. Construyo sitios rápidos y aplicaciones web a medida que convierten tu próxima idea en algo que la gente puede usar de verdad.",
	"hero.ctaPrimary": "Empezar un proyecto",
	"hero.cardEyebrow": "De la idea a la interfaz",
	"hero.cardLabel": "Tu próximo producto",
	"hero.cardTitle": "Hecho para hacerte avanzar.",
	"hero.frontendLabel": "Frontend",
	"hero.frontendNote": "Se siente bien.",
	"hero.backendLabel": "Backend",
	"hero.backendNote": "Trabaja duro.",
	"hero.ctaSecondary": "Explora mi portfolio",

	// Home — services
	"services.title": "¿Qué necesita tu negocio ahora?",
	"services.intro":
		"Más presencia online, lanzar un producto o menos trabajo manual. Construyamos la solución correcta — no solo más código.",

	// Home — contact
	"contact.title": "Convirtamos tu idea en tu próximo lanzamiento.",
	"contact.intro":
		"Cuéntame qué estás construyendo, qué te está frenando y a dónde quieres llegar. Te ayudo a encontrar un camino práctico desde la idea hasta el lanzamiento.",
	"contact.nameLabel": "Tu nombre",
	"contact.namePlaceholder": "Tu nombre",
	"contact.emailLabel": "Correo electrónico",
	"contact.emailPlaceholder": "tu@ejemplo.com",
	"contact.messageLabel": "¿Qué estás construyendo?",
	"contact.messagePlaceholder": "Cuéntame sobre tu proyecto, los plazos y tus objetivos…",
	"contact.submit": "Enviar consulta",
	"contact.sending": "Enviando…",
	"contact.success": "¡Gracias! Te respondo a la brevedad.",
	"contact.error": "No se pudo enviar. Probá de nuevo en un momento.",

	// Footer
	"footer.tagline": "Pensado con criterio. De punta a punta.",

	// Hire me — closing CTA
	"about.title": "La persona detrás del proyecto.",
	"about.intro":
		"Soy Francisco, el desarrollador detrás de FFSTACK. Mi foco es el desarrollo web fullstack: interfaces que dan gusto usar, sostenidas por sistemas que las hacen funcionar.",
	"about.cta": "Construyamos algo",

	// Hire me — hero
	"hire.pageTitle": "FFSTACK — Contratame",
	"hire.pageDescription":
		"Experiencia y forma de trabajo de FFSTACK, desarrollo web fullstack freelance: proyectos reales, del diseño al deploy.",
	"hire.eyebrow": "Francisco Lopez / Desarrollador Fullstack",
	"hire.title": "Menos ruido. Más oficio.",
	"hire.intro":
		"Una mirada a cómo pienso, construyo y conecto los puntos. Abajo están los proyectos que construí y entregué para clientes reales.",

	// Hire me — resume sections
	"profile.label": "Perfil",
	"profile.stackLabel": "Stack técnico",
	"experience.label": "Experiencia",
	"education.label": "Educación e idiomas",

	// Project detail page
	"project.documentTitle": "Proyecto",
	"project.coverAltPrefix": "Portada de",
	"project.back": "Volver a la experiencia",
	"project.next": "Siguiente proyecto",
	"project.overviewLabel": "El proyecto",
	"project.challengeLabel": "El desafío",
	"project.approachLabel": "La implementación",
	"project.outcomeLabel": "Resultado",
	"project.highlightsLabel": "En detalle",
	"project.workLabel": "Trabajo realizado",
	"project.galleryLabel": "Galería del proyecto",
	"project.slideAltPrefix": "Captura",
	"project.prevImage": "Imagen anterior",
	"project.nextImage": "Imagen siguiente",
	"project.goToImage": "Ir a la imagen",

	// Home — new hero
	"home.eyebrow": "Desarrollador Fullstack Freelance",
	"home.title": "Tu próximo producto, construido para crecer.",
	"home.subtitle": "Sitios web y aplicaciones a medida que convierten tu idea en algo que la gente usa de verdad. Sin plantillas, sin relleno.",
	"home.heroNote": "Sin compromiso. Salimos con claridad sobre viabilidad, alcance y próximos pasos.",
	"home.ctaPrimary": "Agenda una llamada de 30 min",
	"home.ctaSecondary": "Ver casos reales",

	// Home — problem/solution
	"home.problemsTitle": "¿En qué punto estás?",
	"home.problems": [
		{
			"pain": "Necesitas lanzar ya",
			"solution": "MVP en 6–8 semanas, listo para usuarios reales"
		},
		{
			"pain": "Tu web no convierte",
			"solution": "Rediseño enfocado en conversión + stack que escala"
		},
		{
			"pain": "La tecnología frena tu crecimiento",
			"solution": "Arquitectura limpia, APIs robustas, cero deuda técnica"
		}
	],

	"home.problemsBridge": "No importa cuál, para todas hay una solución",

	// Home — process
	"home.processTitle": "Cómo trabajamos juntos",
	"home.processSteps": [
		{
			"number": "01",
			"title": "Llamada de descubrimiento (30 min)",
			"desc": "Entiendo tu negocio, objetivos y restricciones. Sin compromiso."
		},
		{
			"number": "02",
			"title": "Propuesta fija por escrito",
			"desc": "Alcance, timeline, hitos y precio cerrado. Sin sorpresas."
		},
		{
			"number": "03",
			"title": "Entregas semanales visibles",
			"desc": "Ves progreso real cada semana. Feedback temprano, cero túnel."
		},
		{
			"number": "04",
			"title": "Lanzamiento + 30 días de soporte",
			"desc": "Ponemos en producción, monitorizamos y ajustamos. Quedas autónomo."
		}
	],

	// Home — services with anchor cases
	"home.servicesTitle": "Qué construyo",
	"home.servicesIntro": "Cada servicio tiene un caso real que puedes ver en detalle.",
	"home.services": [
		{
			"index": "01/",
			"title": "Marketplaces y plataformas multi-vendedor",
			"desc": "Split payments, storefronts por vendedor, paneles de administración. Stack: Next.js, Firebase, Tauri.",
			"caseStudy": "kic-market",
			"caseLabel": "Ver caso Kic Market →"
		},
		{
			"index": "02/",
			"title": "E-commerce a medida y productos transaccionales",
			"desc": "Checkout integrado, webhooks, paneles de gestión, automatizaciones. Stack: React, Firebase, MercadoPago.",
			"caseStudy": "lagom-philosophy",
			"caseLabel": "Ver caso Lagom Philosophy →"
		},
		{
			"index": "03/",
			"title": "Plataformas fintech y productos con lógica compleja",
			"desc": "Lógica financiera en Cloud Functions, rendimiento obsesivo, seguridad. Stack: Next.js, Firebase, Cloud Functions.",
			"caseStudy": "rentive-capital",
			"caseLabel": "Ver caso Rentive Capital →"
		}
	],

	// Home — social proof
	"home.proofTitle": "Lo que dicen quienes ya lanzaron",
	"home.testimonials": [
		{
			"quote": "Francisco entendió el negocio antes que el código. Entregó un marketplace funcional en semanas, no meses.",
			"author": "Dueño, Kic Market",
			"role": "Marketplace local Bahía Blanca"
		},
		{
			"quote": "El panel de administración en Tauri nos ahorra horas cada semana. Gestionamos todo desde un solo lugar.",
			"author": "Fundador, LevelUp",
			"role": "E-commerce gaming multi-plataforma"
		},
		{
			"quote": "Subió el Score de Speed Insights de 50 a 80. La plataforma aguanta carga real sin caerse.",
			"author": "CTO, Rentive Capital",
			"role": "Plataforma de inversión 25+ usuarios"
		}
	],

	// Home — FAQ / objections
	"home.faqTitle": "Preguntas frecuentes",
	"home.faq": [
		{
			"q": "¿Cuánto cuesta un proyecto?",
			"a": "Depende del tipo de proyecto: web simple desde USD 250, sitio corporativo desde USD 500, e-commerce desde USD 900 y sistema a medida desde USD 1.500. Probá la calculadora de acá abajo para una referencia al instante; el precio final se cierra por escrito según alcance."
		},
		{
			"q": "¿Cuánto tarda en estar listo?",
			"a": "MVP simple: 6–8 semanas. Plataforma completa: 3–4 meses. Timeline real en la propuesta, no estimaciones vagas."
		},
		{
			"q": "¿Y si cambia el alcance a mitad de camino?",
			"a": "Se evalúa el impacto, se acuerda por escrito y se ajusta precio/fechas antes de continuar. Sin trabajo invisible."
		},
		{
			"q": "¿Das mantenimiento después del lanzamiento?",
			"a": "Cada proyecto incluye 30 días de soporte post-lanzamiento. Después ofrezco un plan mensual de mantenimiento y gestión de infraestructura, calculado como un porcentaje del proyecto según su tipo (3–6% mensual, con un mínimo). La nube siempre se factura aparte, a nombre del cliente."
		},
		{
			"q": "¿Trabajas con mi stack actual o impones el tuyo?",
			"a": "Me adapto si tu stack tiene sentido técnico. Si no, propongo migración justificada. La decisión siempre es tuya."
		}
	],

	// Home — pricing calculator
	"home.calcTitle": "Calculá tu proyecto",
	"home.calcSubtitle": "Elegí el tipo de web y te muestro una referencia de precio y mantenimiento mensual. El presupuesto final se cierra por escrito según alcance.",
	"home.calcBuildLabel": "Precio del proyecto",
	"home.calcCareLabel": "Mantenimiento mensual",
	"home.calcCareUnit": "/mes",
	"home.calcCarePctSuffix": "del proyecto",
	"home.calcNote": "El mantenimiento es un servicio: incluye actualizaciones, soporte y gestión de la infraestructura. La nube siempre se factura aparte, a nombre del cliente.",
	"home.calcTiers": [
		{
			"id": "simple",
			"name": "Web simple",
			"desc": "Landing o sitio de pocas secciones, con diseño a medida y formulario de contacto.",
			"build": [250, 400],
			"pct": 3,
			"floor": 15
		},
		{
			"id": "corporate",
			"name": "Sitio corporativo",
			"desc": "Estructura multi-página (5 a 10 secciones) con foco en conversión.",
			"build": [500, 800],
			"pct": 4,
			"floor": 20
		},
		{
			"id": "shop",
			"name": "E-commerce / tienda",
			"desc": "Catálogo, carrito, pagos con MercadoPago y panel de administración.",
			"build": [900, 1500],
			"pct": 5,
			"floor": 40
		},
		{
			"id": "system",
			"name": "Sistema a medida / MVP",
			"desc": "Plataforma o sistema con lógica de backend, usuarios y datos reales.",
			"build": [1500, 2500],
			"pct": 6,
			"floor": 80
		}
	],

	// Home — final CTA
	"home.finalCtaTitle": "¿Listo para construir lo que necesitas?",
	"home.finalCtaDesc": "30 minutos, sin compromiso, salimos con claridad sobre viabilidad, alcance y próximos pasos.",
	"home.finalCtaPrimary": "Reservar llamada gratis",
	"home.finalCtaSecondary": "Primero quiero ver más casos",

	// For whom / not for
	"home.fitTitle": "Esto es para ti si…",
	"home.fitForTitle": "Encaja",
	"home.fitNotTitle": "No encaja",
	"home.fitFor": [
		"Buscas un socio técnico que piense en negocio, no solo en código",
		"Valoras la comunicación clara y entregas visibles cada semana",
		"Necesitas que la tecnología escale, no que frene"
	],
	"home.fitNot": [
		"Quieres la web más barata posible, ya",
		"Buscas un ejecutor de tareas sin criterio propio",
		"Necesitas 10 reuniones antes de decidir el color del botón"
	],

	// Calendly placeholder
	"home.calendlyUrl": "https://calendly.com/franlopez9724/30min",
} as const;

export type UIKey = keyof typeof es;

const en: Record<UIKey, string> = {
	// Layout
	"site.title": "FFSTACK — Freelance Fullstack Development",
	"site.description":
		"FFSTACK freelance fullstack development: custom websites and web apps — fast, clear, and built to grow.",
	"brand.name": "FFSTACK",

	// Header
	"nav.services": "Services",
	"nav.hire": "Hire me",
	"nav.languageSwitch": "Change language",

	// Home — hero
	"hero.eyebrow": "FFSTACK / Freelance Fullstack Development",
	"hero.line1": "Build better.",
	"hero.line2": "Launch sooner.",
	"hero.intro":
		"Your business needs more than a good-looking website. I build fast websites and custom web apps that turn your next idea into something people can actually use.",
	"hero.ctaPrimary": "Start a project",
	"hero.cardEyebrow": "From idea to interface",
	"hero.cardLabel": "Your next product",
	"hero.cardTitle": "Made to move you forward.",
	"hero.frontendLabel": "Frontend",
	"hero.frontendNote": "Feels right.",
	"hero.backendLabel": "Backend",
	"hero.backendNote": "Works hard.",
	"hero.ctaSecondary": "Explore my portfolio",

	// Home — services
	"services.title": "What does your business need next?",
	"services.intro":
		"A stronger online presence, a product launch, or less manual work. Let's build the right solution — not just more code.",

	// Home — contact
	"contact.title": "Let's turn your idea into your next launch.",
	"contact.intro":
		"Tell me what you're building, what's getting in the way, and where you want to go. I'll help you find a practical path from idea to launch.",
	"contact.nameLabel": "Your name",
	"contact.namePlaceholder": "Your name",
	"contact.emailLabel": "Email address",
	"contact.emailPlaceholder": "you@example.com",
	"contact.messageLabel": "What are you building?",
	"contact.messagePlaceholder": "Tell me about your project, timeline, and goals...",
	"contact.submit": "Send inquiry",
	"contact.sending": "Sending…",
	"contact.success": "Thanks! I'll get back to you shortly.",
	"contact.error": "Something went wrong. Please try again in a moment.",

	// Footer
	"footer.tagline": "Thoughtfully built. Front to back.",

	// Hire me — closing CTA
	"about.title": "The person behind the build.",
	"about.intro":
		"I'm Francisco, the developer behind FFSTACK. My focus is fullstack web development: interfaces people enjoy using, backed by systems that make them work.",
	"about.cta": "Let's build something",

	// Hire me — hero
	"hire.pageTitle": "FFSTACK — Hire me",
	"hire.pageDescription":
		"FFSTACK's experience and way of working: real fullstack web projects shipped for clients, from design to deployment.",
	"hire.eyebrow": "Francisco Lopez / Fullstack Developer",
	"hire.title": "Less noise. More craft.",
	"hire.intro":
		"A look at how I think, build, and connect the dots. Below are the projects I've built and shipped for real clients.",

	// Hire me — resume sections
	"profile.label": "Profile",
	"profile.stackLabel": "Technical stack",
	"experience.label": "Experience",
	"education.label": "Education & languages",

	// Project detail page
	"project.documentTitle": "Project",
	"project.coverAltPrefix": "Cover of",
	"project.back": "Back to experience",
	"project.next": "Next project",
	"project.overviewLabel": "The project",
	"project.challengeLabel": "The challenge",
	"project.approachLabel": "The approach",
	"project.outcomeLabel": "Outcome",
	"project.highlightsLabel": "In detail",
	"project.workLabel": "Work delivered",
	"project.galleryLabel": "Project gallery",
	"project.slideAltPrefix": "Screenshot",
	"project.prevImage": "Previous image",
	"project.nextImage": "Next image",
	"project.goToImage": "Go to image",

	// Home — new hero
	"home.eyebrow": "Freelance Fullstack Developer",
	"home.title": "Your next product, built to grow.",
	"home.subtitle": "Custom websites and web apps that turn your idea into something people actually use. No templates, no fluff.",
	"home.heroNote": "No commitment. We walk away with clarity on viability, scope, and next steps.",
	"home.ctaPrimary": "Book a 30-min call",
	"home.ctaSecondary": "See real cases",

	// Home — problem/solution
	"home.problemsTitle": "Where are you at?",
	"home.problems": [
		{
			"pain": "Need to launch now",
			"solution": "MVP in 6–8 weeks, ready for real users"
		},
		{
			"pain": "Website doesn't convert",
			"solution": "Conversion-focused redesign + stack that scales"
		},
		{
			"pain": "Technology blocks your growth",
			"solution": "Clean architecture, robust APIs, zero tech debt"
		}
	],

	"home.problemsBridge": "No matter which one — there's a solution for every stage",

	// Home — process
	"home.processTitle": "How we work together",
	"home.processSteps": [
		{
			"number": "01",
			"title": "Discovery call (30 min)",
			"desc": "I understand your business, goals, and constraints. No commitment."
		},
		{
			"number": "02",
			"title": "Fixed written proposal",
			"desc": "Scope, timeline, milestones, and closed price. No surprises."
		},
		{
			"number": "03",
			"title": "Weekly visible deliveries",
			"desc": "You see real progress every week. Early feedback, no black box."
		},
		{
			"number": "04",
			"title": "Launch + 30 days support",
			"desc": "We go live, monitor, and adjust. You walk away autonomous."
		}
	],

	// Home — services with anchor cases
	"home.servicesTitle": "What I build",
	"home.servicesIntro": "Each service has a real case you can explore in detail.",
	"home.services": [
		{
			"index": "01/",
			"title": "Marketplaces and multi-vendor platforms",
			"desc": "Split payments, seller storefronts, admin panels. Stack: Next.js, Firebase, Tauri.",
			"caseStudy": "kic-market",
			"caseLabel": "See Kic Market case →"
		},
		{
			"index": "02/",
			"title": "Custom e-commerce and transactional products",
			"desc": "Integrated checkout, webhooks, management panels, automations. Stack: React, Firebase, MercadoPago.",
			"caseStudy": "lagom-philosophy",
			"caseLabel": "See Lagom Philosophy case →"
		},
		{
			"index": "03/",
			"title": "Fintech platforms and complex logic products",
			"desc": "Financial logic in Cloud Functions, obsessive performance, security. Stack: Next.js, Firebase, Cloud Functions.",
			"caseStudy": "rentive-capital",
			"caseLabel": "See Rentive Capital case →"
		}
	],

	// Home — social proof
	"home.proofTitle": "What clients say after launch",
	"home.testimonials": [
		{
			"quote": "Francisco understood the business before the code. Delivered a functional marketplace in weeks, not months.",
			"author": "Owner, Kic Market",
			"role": "Local marketplace Bahía Blanca"
		},
		{
			"quote": "The Tauri admin panel saves us hours every week. We manage everything from one place.",
			"author": "Founder, LevelUp",
			"role": "Multi-platform gaming e-commerce"
		},
		{
			"quote": "Speed Insights score went from 50 to 80. The platform handles real load without crashing.",
			"author": "CTO, Rentive Capital",
			"role": "Investment platform 25+ users"
		}
	],

	// Home — FAQ / objections
	"home.faqTitle": "Frequently asked questions",
	"home.faq": [
		{
			"q": "How much does a project cost?",
			"a": "It depends on the type of project: simple website from USD 250, corporate site from USD 500, e-commerce from USD 900, and custom system from USD 1,500. Try the calculator below for an instant reference; the final price is closed in writing by scope."
		},
		{
			"q": "How long until it's ready?",
			"a": "Simple MVP: 6–8 weeks. Full platform: 3–4 months. Real timeline in the proposal, not vague estimates."
		},
		{
			"q": "What if scope changes mid-project?",
			"a": "We assess impact, agree in writing, and adjust price/dates before continuing. No invisible work."
		},
		{
			"q": "Do you provide maintenance after launch?",
			"a": "Every project includes 30 days of post-launch support. After that I offer a monthly maintenance and infrastructure management plan, calculated as a percentage of the project by type (3–6% monthly, with a minimum). Cloud costs are always billed separately, in the client's name."
		},
		{
			"q": "Do you work with my current stack or impose yours?",
			"a": "I adapt if your stack makes technical sense. If not, I propose justified migration. The call is always yours."
		}
	],

	// Home — pricing calculator
	"home.calcTitle": "Estimate your project",
	"home.calcSubtitle": "Pick the type of website and get a reference for price and monthly maintenance. The final quote is closed in writing by scope.",
	"home.calcBuildLabel": "Project price",
	"home.calcCareLabel": "Monthly maintenance",
	"home.calcCareUnit": "/mo",
	"home.calcCarePctSuffix": "of the project",
	"home.calcNote": "Maintenance is a service: it covers updates, support, and infrastructure management. Cloud costs are billed separately, in the client's name.",
	"home.calcTiers": [
		{
			"id": "simple",
			"name": "Simple website",
			"desc": "Landing or a small site with custom design and a contact form.",
			"build": [250, 400],
			"pct": 3,
			"floor": 15
		},
		{
			"id": "corporate",
			"name": "Corporate site",
			"desc": "Multi-page structure (5–10 sections) focused on conversion.",
			"build": [500, 800],
			"pct": 4,
			"floor": 20
		},
		{
			"id": "shop",
			"name": "E-commerce / store",
			"desc": "Catalog, cart, MercadoPago payments, and an admin dashboard.",
			"build": [900, 1500],
			"pct": 5,
			"floor": 40
		},
		{
			"id": "system",
			"name": "Custom system / MVP",
			"desc": "Platform or system with backend logic, users, and real data.",
			"build": [1500, 2500],
			"pct": 6,
			"floor": 80
		}
	],

	// Home — final CTA
	"home.finalCtaTitle": "Ready to build what you need?",
	"home.finalCtaDesc": "30 minutes, no commitment, we walk away with clarity on viability, scope, and next steps.",
	"home.finalCtaPrimary": "Book free call",
	"home.finalCtaSecondary": "Want to see more cases first",

	// For whom / not for
	"home.fitTitle": "This is for you if…",
	"home.fitForTitle": "Fits you",
	"home.fitNotTitle": "Not for you",
	"home.fitFor": [
		"You want a technical partner who thinks in business, not just code",
		"You value clear communication and visible weekly deliveries",
		"You need technology that scales, not blocks"
	],
	"home.fitNot": [
		"You want the cheapest website possible, yesterday",
		"You need a task executor without own judgment",
		"You need 10 meetings before deciding button color"
	],

	// Calendly placeholder
	"home.calendlyUrl": "https://calendly.com/franlopez9724/30min",
};

export const ui: Record<Locale, Record<UIKey, string>> = { es, en };
