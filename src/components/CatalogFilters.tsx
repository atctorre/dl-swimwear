"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  COLLECTION_LABELS,
  STYLE_LABELS,
  type CollectionId,
  type Product,
  type ProductStyle,
} from "@/data/products";
import { CTA_COPY, INSTAGRAM_URL } from "@/lib/contact";

type Props = {
  products: Product[];
  initialStyle?: string;
  initialCollection?: string;
};

const styles = Object.keys(STYLE_LABELS) as ProductStyle[];
const collections = Object.keys(COLLECTION_LABELS) as CollectionId[];

export default function CatalogFilters({ products, initialStyle, initialCollection }: Props) {
  const [estilo, setEstilo] = useState<string>(
    initialStyle && initialStyle in STYLE_LABELS ? initialStyle : "todos"
  );
  const [coleccion, setColeccion] = useState<string>(
    initialCollection && initialCollection in COLLECTION_LABELS ? initialCollection : "todas"
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const styleOk = estilo === "todos" || p.style === estilo;
      const colOk = coleccion === "todas" || p.collection === coleccion;
      return styleOk && colOk;
    });
  }, [products, estilo, coleccion]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-ocean/10 bg-sand/40 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-5">
        <div className="grid flex-1 gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-ocean/60">
              Estilo
            </span>
            <select
              value={estilo}
              onChange={(e) => setEstilo(e.target.value)}
              className="w-full rounded-xl border border-ocean/15 bg-cream px-3 py-2.5 text-ink outline-none focus:border-turquoise"
            >
              <option value="todos">Todos</option>
              {styles.map((t) => (
                <option key={t} value={t}>
                  {STYLE_LABELS[t]}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-ocean/60">
              Colección
            </span>
            <select
              value={coleccion}
              onChange={(e) => setColeccion(e.target.value)}
              className="w-full rounded-xl border border-ocean/15 bg-cream px-3 py-2.5 text-ink outline-none focus:border-turquoise"
            >
              <option value="todas">Todas</option>
              {collections.map((c) => (
                <option key={c} value={c}>
                  {COLLECTION_LABELS[c]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="text-xs text-ocean/50 sm:text-right">
          Fabricado en Colombia · {filtered.length} prendas
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-ocean/20 bg-sand/30 px-6 py-12 text-center">
          <p className="font-display text-xl text-ink">No hay prendas con esa combinación.</p>
          <p className="mt-2 text-sm text-ink/60">
            Prueba otra talla o color, o escríbenos por el WhatsApp de la bio y te ayudamos a
            encontrar tu fit.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] px-5 py-2.5 text-sm font-medium text-white hover:opacity-95"
          >
            {CTA_COPY.primaryOrderShort}
          </a>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
