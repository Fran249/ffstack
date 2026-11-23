import { ExternalLink } from "lucide-react";

interface ExternalLinkButtonProps {
	href: string;
	label: string;
}

export default function ExternalLinkButton({
	href,
	label,
}: ExternalLinkButtonProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-night-surface px-4 py-2 text-xs font-medium text-accent shadow-sm transition-all hover:border-accent/50 hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-night"
		>
			{label}
			<ExternalLink className="w-3 h-3" />
		</a>
	);
}
