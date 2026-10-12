/**
 * Fetches the blue dollar rate from dolarapi.com
 * Returns the "venta" (sell) rate for USD to ARS conversion.
 * Caches the result for 1 hour to avoid excessive API calls.
 */

interface DolarBlueResponse {
	moneda: string;
	casa: string;
	nombre: string;
	compra: number;
	venta: number;
	fechaActualizacion: string;
}

let cachedRate: { rate: number; timestamp: number } | null = null;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

export async function getDolarBlueRate(): Promise<number> {
	const now = Date.now();

	if (cachedRate && now - cachedRate.timestamp < CACHE_DURATION_MS) {
		return cachedRate.rate;
	}

	try {
		const response = await fetch("https://dolarapi.com/v1/dolares/blue");
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}
		const data: DolarBlueResponse = await response.json();
		const rate = data.venta; // Use "venta" rate for USD -> ARS conversion

		cachedRate = { rate, timestamp: now };
		return rate;
	} catch (error) {
		console.warn("Failed to fetch blue dollar rate, using fallback:", error);
		// Fallback rate if API fails
		return 1300;
	}
}

export function convertUsdToArs(usd: number, rate: number): number {
	return Math.round(usd * rate);
}

export function formatArs(amount: number, locale: "es" | "en" = "es"): string {
	const formatter = new Intl.NumberFormat(locale === "es" ? "es-AR" : "en-US", {
		style: "currency",
		currency: "ARS",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});
	return formatter.format(amount);
}

export function formatUsd(amount: number, locale: "es" | "en" = "en"): string {
	const formatter = new Intl.NumberFormat(locale === "es" ? "es-AR" : "en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});
	return formatter.format(amount);
}