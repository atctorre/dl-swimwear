import { CTA_COPY, INSTAGRAM_URL, orderLink } from "@/lib/contact";

type Props = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "instagram" | "turquoise";
  href?: string;
  title?: string;
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-turquoise text-ocean-deep hover:bg-turquoise-soft shadow-lg shadow-turquoise/25",
  secondary:
    "bg-sand text-ink border border-turquoise/30 hover:border-turquoise hover:bg-sand-deep",
  ghost:
    "bg-transparent text-ink border border-ocean/20 hover:border-turquoise hover:text-turquoise-deep",
  instagram:
    "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-95 shadow-lg shadow-black/10",
  turquoise:
    "bg-ocean text-cream hover:bg-ocean-soft shadow-lg shadow-ocean/20",
};

export default function OrderButton({
  children,
  className = "",
  variant = "instagram",
  href,
  title,
}: Props) {
  return (
    <a
      href={href ?? orderLink()}
      target="_blank"
      rel="noopener noreferrer"
      title={title ?? "Usa el link de WhatsApp en la bio de @dl_swimwear"}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children ?? CTA_COPY.primaryOrder}
    </a>
  );
}

export { INSTAGRAM_URL };
