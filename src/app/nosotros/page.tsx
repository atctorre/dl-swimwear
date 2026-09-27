import type { Metadata } from "next";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import SwimPlaceholder from "@/components/SwimPlaceholder";
import { CTA_COPY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "DL Swimwear — marca y fábrica de trajes de baño en Barranquilla, Costa Caribe. Retail y mayoreo.",
};

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-turquoise-deep">Marca</p>
          <h1 className="mt-3 font-display text-4xl text-ocean sm:text-5xl">
            DL Swimwear — marca y fábrica en Barranquilla
          </h1>
          <p className="mt-5 leading-relaxed text-ink/70">
            Somos una marca colombiana de trajes de baño con raíz en Barranquilla. Diseñamos,
            fabricamos y vendemos: a quienes nos escriben por un bikini y a quienes arman su tienda
            con nuestro mayoreo.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            Instagram:{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-turquoise-deep hover:underline"
            >
              @{INSTAGRAM_HANDLE}
            </a>{" "}
            — más de 100 mil personas en la comunidad.
          </p>
          <p className="mt-4 text-sm text-ocean/45">
            [Confirmar: año de fundación, historia corta, foto de taller/equipo si quieren
            mostrarlo.]
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OrderButton variant="instagram">{CTA_COPY.primaryOrder}</OrderButton>
            <Link
              href="/mayoreo"
              className="inline-flex rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
            >
              Cotizar mayoreo
            </Link>
            <Link
              href="/catalogo"
              className="inline-flex rounded-full bg-turquoise px-6 py-3 text-sm font-medium text-ocean-deep hover:bg-turquoise-soft"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
        <SwimPlaceholder
          label="Taller DL Swimwear Barranquilla"
          gradient="from-cyan-100 via-teal-300 to-ocean"
          aspect="aspect-[4/5]"
          style="enterizo"
          className="shadow-2xl shadow-ocean/15"
        />
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          {
            t: "Fabricamos",
            d: "Control de calidad y de colección desde Barranquilla.",
          },
          {
            t: "Vendemos retail",
            d: "Catálogo claro + pedido por el WhatsApp de la bio.",
          },
          {
            t: "Atendemos mayoreo",
            d: "Tiendas, boutiques y revendedoras en Colombia y más.",
          },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border border-ocean/10 bg-sand/40 p-6">
            <h2 className="font-display text-xl text-ocean">{c.t}</h2>
            <p className="mt-2 text-sm text-ink/65">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
