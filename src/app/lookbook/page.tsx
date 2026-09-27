import type { Metadata } from "next";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import SwimPlaceholder from "@/components/SwimPlaceholder";
import { products } from "@/data/products";
import { CTA_COPY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "Campañas y looks DL Swimwear. Inspiración de playa y piscina con nuestra colección.",
};

export default function LookbookPage() {
  const looks = products;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-turquoise-deep">Editorial</p>
      <h1 className="mt-3 font-display text-4xl text-ocean sm:text-5xl">Lookbook</h1>
      <p className="mt-4 max-w-2xl text-ink/65">
        Galería editorial de campaña. Créditos y assets finales:{" "}
        <em className="not-italic text-ocean/45">[Confirmar con el cliente]</em>. Cada look enlaza a
        fichas del catálogo.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <OrderButton variant="instagram">{CTA_COPY.primaryOrder}</OrderButton>
        <Link
          href="/catalogo"
          className="inline-flex rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
        >
          Ir al catálogo
        </Link>
      </div>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {looks.map((p, i) => (
          <Link
            key={p.slug}
            href={`/catalogo/${p.slug}`}
            className="mb-4 block break-inside-avoid"
          >
            <SwimPlaceholder
              label={`Look ${i + 1}: ${p.name}`}
              gradient={p.gradient}
              style={p.style}
              aspect={i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}
            />
            <p className="mt-2 font-display text-sm text-ocean">{p.name}</p>
            <p className="text-xs text-ink/50">{p.color}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
