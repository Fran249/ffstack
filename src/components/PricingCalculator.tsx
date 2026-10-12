import { useState, useEffect } from "react";

export interface CalcTier {
	id: string;
	name: string;
	desc: string;
	build: [number, number];
	pct: number;
	floor: number;
}

export interface PricingCalculatorProps {
	locale: "es" | "en";
	title: string;
	subtitle: string;
	buildLabel: string;
	careLabel: string;
	careUnit: string;
	carePctSuffix: string;
	note: string;
	tiers: CalcTier[];
}

interface DolarBlueResponse {
	venta: number;
}

function formatCurrency(amount: number, locale: "es" | "en", currency: "USD" | "ARS"): string {
	return new Intl.NumberFormat(locale === "es" ? "es-AR" : "en-US", {
		style: "currency",
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(amount);
}

function formatRange(
	low: number,
	high: number,
	locale: "es" | "en",
	currency: "USD" | "ARS"
): string {
	if (low === high) {
		return formatCurrency(low, locale, currency);
	}
	return `${formatCurrency(low, locale, currency)}–${formatCurrency(high, locale, currency)}`;
}

const FALLBACK_RATE = 1300;

export default function PricingCalculator({
	locale,
	title,
	subtitle,
	buildLabel,
	careLabel,
	careUnit,
	carePctSuffix,
	note,
	tiers,
}: PricingCalculatorProps) {
	const [selectedId, setSelectedId] = useState(tiers[0].id);
	const [focusedId, setFocusedId] = useState<string | null>(null);
	const [dolarRate, setDolarRate] = useState<number | null>(null);
	const [loading, setLoading] = useState(true);

	const selected = tiers.find((tier) => tier.id === selectedId) ?? tiers[0];
	const [low, high] = selected.build;
	const careLow = Math.max(selected.floor, Math.round((low * selected.pct) / 100));
	const careHigh = Math.max(selected.floor, Math.round((high * selected.pct) / 100));

	// Fetch dollar rate at runtime
	useEffect(() => {
		let cancelled = false;

		async function fetchRate() {
			try {
				const response = await fetch("https://dolarapi.com/v1/dolares/blue");
				if (response.ok) {
					const data: DolarBlueResponse = await response.json();
					if (!cancelled) {
						setDolarRate(data.venta);
					}
				} else {
					throw new Error(`HTTP ${response.status}`);
				}
			} catch {
				if (!cancelled) {
					setDolarRate(FALLBACK_RATE);
				}
			} finally {
				if (!cancelled) {
					setLoading(false);
				}
			}
		}

		fetchRate();
		return () => { cancelled = true; };
	}, []);

	const isARS = locale === "es";
	const currency = isARS ? "ARS" : "USD";

	const effectiveRate = dolarRate ?? FALLBACK_RATE;
	const buildLow = isARS ? low * effectiveRate : low;
	const buildHigh = isARS ? high * effectiveRate : high;
	const careLowFinal = isARS ? careLow * effectiveRate : careLow;
	const careHighFinal = isARS ? careHigh * effectiveRate : careHigh;

	function formatCurrency(amount: number, currency: "USD" | "ARS"): string {
		return new Intl.NumberFormat(locale === "es" ? "es-AR" : "en-US", {
			style: "currency",
			currency,
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	}

	function formatRange(
		low: number,
		high: number,
		currency: "USD" | "ARS"
	): string {
		if (low === high) {
			return formatCurrency(low, currency);
		}
		return `${formatCurrency(low, currency)}–${formatCurrency(high, currency)}`;
	}

	if (loading) {
		return (
			<section className="px-6 pb-16 md:px-16 md:pb-24">
				<div className="mx-auto w-full max-w-3xl border-t border-white/10 pt-14 md:pt-16">
					<div className="text-center text-white/60">Cargando cotización del dólar...</div>
				</div>
			</section>
		);
	}

	return (
		<section className="px-6 pb-16 md:px-16 md:pb-24">
			<div className="mx-auto w-full max-w-3xl border-t border-white/10 pt-14 md:pt-16">
				<h2 className="mx-auto max-w-[28ch] text-center text-[2rem] leading-[1.05] font-extrabold tracking-[-0.03em] text-white md:text-[2.5rem]">
					{title}
				</h2>
				<p className="mx-auto mt-4 max-w-[52ch] text-center text-base leading-relaxed text-white/60">
					{subtitle}
				</p>

				<div
					className="mt-10 grid gap-3 md:grid-cols-2"
					role="radiogroup"
					aria-label={title}
					data-calc
				>
					{tiers.map((tier) => {
						const isSelected = tier.id === selectedId;
						const isFocused = tier.id === focusedId;
						const [tLow, tHigh] = tier.build;
						const tLowFinal = isARS ? tLow * effectiveRate : tLow;
						const tHighFinal = isARS ? tHigh * effectiveRate : tHigh;
						return (
							<label
								key={tier.id}
								className={`block cursor-pointer rounded-xl border p-5 transition-colors duration-200 md:p-6 ${
									isSelected
										? "border-accent bg-accent/5"
										: "border-white/10 bg-night-surface"
								} ${isFocused ? "outline-2 outline-offset-2 outline-accent" : ""}`}
							>
								<input
									type="radio"
									name="calc-tier"
									value={tier.id}
									className="sr-only"
									data-tier
									checked={isSelected}
									onChange={() => setSelectedId(tier.id)}
									onFocus={() => setFocusedId(tier.id)}
									onBlur={() => setFocusedId(null)}
								/>
								<span className="flex items-baseline justify-between gap-3">
									<span className="text-base font-semibold text-white">{tier.name}</span>
									<span className="text-sm font-medium text-accent tabular-nums">
										{formatRange(tLowFinal, tHighFinal, currency)}
									</span>
								</span>
								<span className="mt-1.5 block text-sm leading-relaxed text-white/60">
									{tier.desc}
								</span>
							</label>
						);
					})}
				</div>

				<div
					className="mt-6 rounded-xl border border-white/10 bg-night-surface p-6 md:p-7"
					aria-live="polite"
					data-result
				>
					<dl className="space-y-4">
						<div className="flex items-baseline justify-between gap-4">
							<dt className="text-sm text-white/60">{buildLabel}</dt>
							<dd className="text-right text-lg font-bold text-white tabular-nums" data-build>
								{formatRange(buildLow, buildHigh, currency)}
							</dd>
						</div>
						<div className="flex items-baseline justify-between gap-4">
							<dt className="text-sm text-white/60">{careLabel}</dt>
							<dd className="text-right">
								<span className="block text-lg font-bold text-accent tabular-nums" data-care>
									{formatRange(careLowFinal, careHighFinal, currency)}
									{careUnit}
								</span>
								<span className="block text-xs text-white/40" data-care-pct>
									{selected.pct}% {carePctSuffix}
								</span>
							</dd>
						</div>
					</dl>
					<div className="mt-5 border-t border-white/10 pt-5">
						<p className="text-sm leading-relaxed text-white/60">{note}</p>
					</div>
				</div>
			</div>
		</section>
	);
}