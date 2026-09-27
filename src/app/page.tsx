import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import ProductCard from "@/components/ProductCard";
import SwimPlaceholder from "@/components/SwimPlaceholder";
import { catalogCategories, products } from "@/data/products";
import { CTA_COPY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";

export default function HomePage() {
  const featured = products.filter((p) => p.isNew).slice(0, 4);
  const lookbook = products.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 80% 0%, rgba(46,196,182,0.28), transparent), radial-gradient(ellipse 50% 40% at 5% 90%, rgba(245,230,211,0.9), transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-turquoise-deep">
              Barranquilla · Costa Caribe
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-ocean sm:text-5xl lg:text-[3.25rem]">
              Trajes de baño fabricados en Barranquilla
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Somos DL Swimwear: diseño y fabricación propia de swimwear colombiano. Catálogo para
              ti, mayoreo para tu negocio — todo con el mismo WhatsApp de siempre.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/70">
              {[
                "Fabricantes — control de calidad y de colección",
                "+100.000 personas nos siguen en Instagram",
                "Retail y mayoreo en un solo lugar",
                "Pedidos por WhatsApp, sin enredos",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-turquoise">✦</span> {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-full bg-turquoise px-6 py-3 text-sm font-medium text-ocean-deep shadow-lg shadow-turquoise/25 transition hover:bg-turquoise-soft"
              >
                Ver catálogo
              </Link>
              <OrderButton variant="instagram">{CTA_COPY.primaryOrder}</OrderButton>
              <Link
                href="/mayoreo"
                className="inline-flex items-center justify-center rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean transition hover:border-turquoise hover:text-turquoise-deep"
              >
                Soy tienda / Mayoreo
              </Link>
            </div>
          </div>
          <div className="relative">
            <SwimPlaceholder
              label="Swimwear Costa Caribe DL"
              gradient="from-cyan-100 via-teal-400 to-sky-800"
              aspect="aspect-[4/5] sm:aspect-square"
              className="shadow-2xl shadow-ocean/20"
              style="bikini"
            />
            <div className="absolute -bottom-4 -left-2 rounded-2xl border border-turquoise/30 bg-cream/95 px-4 py-3 shadow-xl sm:left-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-turquoise-deep">Instagram</p>
              <p className="font-display text-lg text-ocean">@{INSTAGRAM_HANDLE} · +100k</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ocean/10 bg-sand/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            `@${INSTAGRAM_HANDLE} — comunidad +100k`,
            "Hecho en Barranquilla, Costa Caribe",
            "Colecciones para playa, piscina y sol todo el año",
            "Retail + mayoreo con el mismo canal",
          ].map((t) => (
            <p key={t} className="text-center text-sm text-ink/75 lg:text-left">
              <span className="mr-2 text-turquoise">◆</span>
              {t}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-turquoise-deep">Propuesta</p>
            <h2 className="mt-3 font-display text-3xl text-ocean sm:text-4xl">
              De la costura a tu feed… y ahora a tu catálogo
            </h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              Diseñamos y fabricamos trajes de baño con identidad de Costa Caribe. Aquí encuentras
              las colecciones organizadas, las tallas claras y dos caminos: comprar tu set o cotizar
              mayoreo para tu tienda.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/catalogo"
                className="inline-flex rounded-full bg-ocean px-6 py-3 text-sm font-medium text-cream hover:bg-ocean-soft"
              >
                Explorar colección
              </Link>
              <Link
                href="/mayoreo"
                className="inline-flex rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
              >
                Hablar de mayoreo
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {featured.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/catalogo/${p.slug}`} className="block">
                <SwimPlaceholder
                  label={p.name}
                  gradient={p.gradient}
                  style={p.style}
                  className="h-full"
                />
              </Link>
            ))}
            <Link
              href="/catalogo"
              className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-dashed border-turquoise/50 bg-sand/40 text-center text-sm text-turquoise-deep transition hover:bg-turquoise/10"
            >
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ocean py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Elige tu estilo</h2>
          <p className="mt-2 max-w-xl text-cream/65">
            Accesos rápidos al catálogo. Precio y disponibilidad: consultar por WhatsApp (bio IG).
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {catalogCategories.map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className="rounded-2xl border border-white/10 bg-ocean-soft/40 p-5 transition hover:border-turquoise/50 hover:bg-ocean-soft/70"
              >
                <p className="font-display text-xl text-cream">{c.name}</p>
                <p className="mt-2 text-sm text-cream/60">{c.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/catalogo" className="text-sm text-turquoise-soft hover:text-turquoise">
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl text-ocean sm:text-4xl">Nuevos ingresos</h2>
            <p className="mt-2 text-sm text-ink/55">Lo último de la colección — muestra editorial</p>
          </div>
          <Link href="/catalogo?coleccion=nuevos" className="text-sm text-turquoise-deep hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-sand/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl text-ocean sm:text-4xl">Lookbook DL</h2>
              <p className="mt-2 max-w-lg text-ink/65">
                Míralos en movimiento. Luego encárgalos por WhatsApp en tu talla.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/lookbook"
                className="inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm text-cream hover:bg-ocean-soft"
              >
                Ver lookbook
              </Link>
              <OrderButton variant="instagram" className="!py-2.5 !px-5">
                Pedir este look
              </OrderButton>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {lookbook.map((p) => (
              <Link key={p.slug} href={`/catalogo/${p.slug}`}>
                <SwimPlaceholder
                  label={p.name}
                  gradient={p.gradient}
                  style={p.style}
                  aspect="aspect-[3/4]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-ocean to-ocean-soft p-8 text-cream sm:p-12">
          <p className="text-xs uppercase tracking-[0.25em] text-turquoise-soft">B2B</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            ¿Tienes tienda o vendes online?
          </h2>
          <p className="mt-4 max-w-2xl text-cream/75">
            Somos fabricantes. Armamos pedidos de mayoreo según tu volumen y la colección vigente.
            Cuéntanos qué necesitas y te cotizamos por WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-turquoise px-6 py-3 text-sm font-medium text-ocean-deep hover:bg-turquoise-soft"
            >
              Cotizar mayoreo
            </a>
            <Link
              href="/mayoreo"
              className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm text-cream hover:border-turquoise-soft"
            >
              Conocer condiciones
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ocean/10 bg-sand/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl text-ocean sm:text-4xl">
            ¿Lista para tu próximo set?
          </h2>
          <p className="mt-4 text-ink/65">
            Entra al catálogo, elige modelo y talla, y escríbenos. Si vienes por mayoreo, dilo de una
            en el mensaje. El WhatsApp está en la bio de Instagram.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <OrderButton variant="instagram">{CTA_COPY.primaryOrder}</OrderButton>
            <Link
              href="/catalogo"
              className="inline-flex rounded-full bg-turquoise px-6 py-3 text-sm font-medium text-ocean-deep hover:bg-turquoise-soft"
            >
              Catálogo
            </Link>
            <Link
              href="/mayoreo"
              className="inline-flex rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
            >
              Mayoreo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
