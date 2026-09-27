import type { Metadata } from "next";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import { CTA_COPY, PREFILL_HINTS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Envíos Colombia",
  description:
    "Envíos de trajes de baño en Colombia. Políticas de cambio y cuidado — confirmar detalles al cotizar.",
};

export default function EnviosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-turquoise-deep">Logística</p>
      <h1 className="mt-3 font-display text-4xl text-ocean sm:text-5xl">
        Envíos, cambios y políticas
      </h1>
      <p className="mt-4 max-w-2xl text-ink/65">
        Los detalles exactos se confirman al cotizar por WhatsApp según ciudad y pedido. Aquí va lo
        que ya comunicamos públicamente y lo pendiente de confirmar.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Envíos Colombia",
            body: "Bio pública: domicilios en Barranquilla y envíos nacionales. Transportadoras, tiempos y cobertura Costa / nacional: [Confirmar con el cliente].",
          },
          {
            title: "Export / fuera de Colombia",
            body: "La bio menciona envíos internacionales. Condiciones, costos y plazos: [Confirmar si aplica y cómo se cotiza].",
          },
          {
            title: "Costos",
            body: "Se confirman al cotizar por WhatsApp según ciudad y pedido. No inventamos tarifas en el sitio.",
          },
          {
            title: "Cambios",
            body: "Política de cambios para swimwear (talla, defecto, plazos, higiene): [Confirmar con el cliente]. Escríbenos y te explicamos tu caso.",
          },
          {
            title: "Mayoreo",
            body: "Condiciones de despacho y pagos se acuerdan en la cotización de mayoreo.",
          },
          {
            title: "Medios de pago (bio)",
            body: "Según Instagram: Addi, Sistecrédito y tarjeta de crédito. Detalles al confirmar el pedido.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-ocean/10 bg-sand/30 p-6"
          >
            <h2 className="font-display text-xl text-ocean">{card.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <OrderButton variant="instagram" title={PREFILL_HINTS.shipping}>
          {CTA_COPY.shipping}
        </OrderButton>
        <Link
          href="/faq"
          className="inline-flex rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
        >
          Ver FAQ
        </Link>
      </div>
    </div>
  );
}
