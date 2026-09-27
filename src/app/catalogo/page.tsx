import type { Metadata } from "next";
import CatalogFilters from "@/components/CatalogFilters";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Catálogo de trajes de baño",
  description:
    "Explora bikinis, enterizos y cover-ups. Filtra por talla, estilo y color. Encarga por WhatsApp.",
  openGraph: {
    title: "Catálogo de trajes de baño | DL Swimwear Colombia",
    description: "Filtra por estilo y colección. Encarga por el WhatsApp de la bio en Instagram.",
  },
};

type Props = {
  searchParams: Promise<{ estilo?: string; coleccion?: string }>;
};

export default async function CatalogoPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-turquoise-deep">Colección DL</p>
      <h1 className="mt-3 font-display text-4xl text-ocean sm:text-5xl">Catálogo DL Swimwear</h1>
      <p className="mt-4 max-w-2xl text-ink/65">
        Filtra por estilo, talla y color. Cada ficha tiene fotos, composición y botón para encargar
        o preguntar mayoreo por WhatsApp (mismo link de la bio en Instagram).
      </p>
      <div className="mt-10">
        <CatalogFilters
          products={products}
          initialStyle={params.estilo}
          initialCollection={params.coleccion}
        />
      </div>
    </div>
  );
}
