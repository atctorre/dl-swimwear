import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import OrderButton from "@/components/OrderButton";
import ProductCard from "@/components/ProductCard";
import StickyProductCTA from "@/components/StickyProductCTA";
import SwimPlaceholder from "@/components/SwimPlaceholder";
import {
  COLLECTION_LABELS,
  STYLE_LABELS,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { CTA_COPY, INSTAGRAM_URL, PREFILL_HINTS } from "@/lib/contact";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto" };
  return {
    title: `${product.name} — DL Swimwear`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | DL Swimwear`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 pb-28 sm:px-6 sm:py-16 md:pb-16">
        <nav className="text-xs text-ocean/50">
          <Link href="/catalogo" className="hover:text-turquoise-deep">
            Catálogo
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ocean/80">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <SwimPlaceholder
              label={`${product.name} traje de baño Barranquilla DL Swimwear`}
              gradient={product.gradient}
              style={product.style}
              aspect="aspect-[3/4]"
              className="shadow-xl shadow-ocean/10"
            />
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <SwimPlaceholder
                  key={i}
                  label={`${product.name} detalle ${i + 1}`}
                  gradient={product.gradient}
                  style={product.style}
                  aspect="aspect-square"
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {product.isNew && (
                <span className="rounded-full bg-coral/20 px-3 py-1 text-[10px] uppercase tracking-wider text-coral">
                  Nueva colección
                </span>
              )}
              <span className="rounded-full bg-turquoise/15 px-3 py-1 text-[10px] uppercase tracking-wider text-turquoise-deep">
                {product.sizes.join(" · ")}
              </span>
              <span className="rounded-full bg-sand px-3 py-1 text-[10px] uppercase tracking-wider text-ocean/70">
                Fabricado en Colombia
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl text-ocean sm:text-4xl">
              {product.name} — DL Swimwear
            </h1>
            <p className="mt-2 text-sm text-turquoise-deep">
              {STYLE_LABELS[product.style]} · {COLLECTION_LABELS[product.collection]} ·{" "}
              {product.color}
            </p>
            <p className="mt-5 leading-relaxed text-ink/70">{product.shortDescription}</p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-ocean/10">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-ocean/10">
                  {[
                    ["Estilo", STYLE_LABELS[product.style]],
                    ["Tallas", `${product.sizes.join(", ")} — ver guía de tallas`],
                    ["Color / estampado", product.color],
                    ["Composición", "Consultar % fibras [Confirmar con cliente]"],
                    ["Forro", "Consultar [Confirmar]"],
                    ["Colección", COLLECTION_LABELS[product.collection]],
                    ["Cuidados", "Enjuague + lavado a mano (ver guía)"],
                    ["Precio", "Consultar / encargar por WhatsApp"],
                    ["Mayoreo", "Disponible para cotizar"],
                  ].map(([k, v]) => (
                    <tr key={k} className="bg-cream/50">
                      <th className="w-1/3 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-ocean/55">
                        {k}
                      </th>
                      <td className="px-4 py-3 text-ink/80">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-ink/50">
              Tip: ¿Entre dos tallas?{" "}
              <Link href="/tallas" className="text-turquoise-deep underline">
                Guía de tallas
              </Link>{" "}
              · o escríbenos. Mensaje sugerido: “{PREFILL_HINTS.product(product.name)}”
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <OrderButton variant="instagram" className="sm:flex-1">
                {CTA_COPY.product}
              </OrderButton>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title={PREFILL_HINTS.mayoreo(product.name)}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
              >
                Cotizar mayoreo de esta referencia
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <Link href="/tallas" className="text-turquoise-deep hover:underline">
                Ver guía de tallas
              </Link>
              <Link
                href={`/catalogo?coleccion=${product.collection}`}
                className="text-turquoise-deep hover:underline"
              >
                Ver más de la colección
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl text-ocean">También te puede gustar</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
      <StickyProductCTA productName={product.name} />
    </>
  );
}
