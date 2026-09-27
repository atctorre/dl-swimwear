import Link from "next/link";
import SwimPlaceholder from "@/components/SwimPlaceholder";
import { COLLECTION_LABELS, STYLE_LABELS, type Product } from "@/data/products";
import { CTA_COPY, INSTAGRAM_URL } from "@/lib/contact";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ocean/10 bg-white shadow-sm transition hover:border-turquoise/40 hover:shadow-lg hover:shadow-turquoise/10">
      <Link href={`/catalogo/${product.slug}`} className="block">
        <SwimPlaceholder
          label={product.name}
          gradient={product.gradient}
          style={product.style}
          className="rounded-none rounded-t-2xl"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-turquoise/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-turquoise-deep">
            {STYLE_LABELS[product.style]}
          </span>
          <span className="rounded-full bg-sand px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-ocean/70">
            {COLLECTION_LABELS[product.collection]}
          </span>
          {product.isNew && (
            <span className="rounded-full bg-coral/20 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-coral">
              Nuevo
            </span>
          )}
        </div>
        <h3 className="font-display text-lg text-ink">
          <Link href={`/catalogo/${product.slug}`} className="hover:text-turquoise-deep">
            {product.name}
          </Link>
        </h3>
        <p className="text-xs text-ocean/50">{product.color}</p>
        <p className="line-clamp-2 flex-1 text-sm text-ink/60">{product.shortDescription}</p>
        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp: link en la bio de @dl_swimwear"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] px-4 py-2.5 text-xs font-medium text-white transition hover:opacity-95"
          >
            {CTA_COPY.product}
          </a>
          <Link
            href={`/catalogo/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-ocean/15 px-4 py-2.5 text-xs text-ocean transition hover:border-turquoise hover:text-turquoise-deep"
          >
            Ver ficha
          </Link>
        </div>
      </div>
    </article>
  );
}
