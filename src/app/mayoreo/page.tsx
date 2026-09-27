import type { Metadata } from "next";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import { CTA_COPY, INSTAGRAM_URL, PREFILL_HINTS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Mayoreo trajes de baño Colombia",
  description:
    "Fabricante de swimwear en Barranquilla. Mayoreo para tiendas y revendedoras. Cotiza por WhatsApp.",
};

const steps = [
  "Escríbenos por Instagram y abre el WhatsApp de la bio.",
  "Indica: ciudad, tipo de negocio, referencias de interés y volumen aproximado.",
  "Te compartimos disponibilidad, tiempos y condiciones.",
];

export default function MayoreoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-turquoise-deep">B2B · Fabricantes</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl text-ocean sm:text-5xl">
        Mayoreo y fabricación — DL Swimwear Barranquilla
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-ink/70">
        ¿Buscas trajes de baño al por mayor hechos en Colombia? Cotiza con nosotros.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-ocean/10 bg-sand/40 p-6 sm:p-8">
          <h2 className="font-display text-2xl text-ocean">Qué ofrecemos</h2>
          <ul className="mt-5 space-y-3 text-sm text-ink/70">
            <li className="flex gap-2">
              <span className="text-turquoise">✦</span> Pedidos de mayoreo sobre colección vigente
            </li>
            <li className="flex gap-2">
              <span className="text-turquoise">✦</span> Mínimos de unidades / referencias:{" "}
              <em className="not-italic text-ocean/50">[Confirmar con el cliente]</em>
            </li>
            <li className="flex gap-2">
              <span className="text-turquoise">✦</span> Fabricación / desarrollos especiales:{" "}
              <em className="not-italic text-ocean/50">[Confirmar si aplican]</em>
            </li>
            <li className="flex gap-2">
              <span className="text-turquoise">✦</span> Atención a tiendas físicas, boutiques y marcas
              que revenden
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-ocean p-6 text-cream sm:p-8">
          <h2 className="font-display text-2xl">Cómo cotizar</h2>
          <ol className="mt-5 space-y-4 text-sm text-cream/80">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-turquoise/20 text-xs font-semibold text-turquoise-soft">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-xl bg-white/5 p-4 text-xs text-cream/60">
            Mensaje sugerido: “{PREFILL_HINTS.mayoreo()}”
          </p>
          <div className="mt-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-turquoise px-6 py-3 text-sm font-medium text-ocean-deep hover:bg-turquoise-soft"
            >
              Escribir por WhatsApp — Mayoreo (bio IG)
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-dashed border-ocean/20 bg-cream p-6 sm:p-8">
        <h2 className="font-display text-xl text-ocean">Formulario rápido (opcional)</h2>
        <p className="mt-2 text-sm text-ink/60">
          Por ahora cotizamos por Instagram/WhatsApp. Si quieres adelantar, mándanos: nombre,
          negocio, ciudad, WhatsApp y mensaje. Copy de éxito cuando haya form: “Recibimos tu
          solicitud. Te escribimos pronto; si quieres adelantar, mándanos un WhatsApp.”
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <OrderButton variant="instagram">{CTA_COPY.mayoreo}</OrderButton>
          <Link
            href="/catalogo"
            className="inline-flex rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
          >
            Ver catálogo para tiendas
          </Link>
        </div>
      </div>
    </div>
  );
}
