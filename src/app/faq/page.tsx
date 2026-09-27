import type { Metadata } from "next";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import { CTA_COPY, INSTAGRAM_HANDLE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Tallas, mayoreo, envíos, cuidados y cómo pedir por WhatsApp. FAQ DL Swimwear Barranquilla.",
};

const faqs = [
  {
    q: "¿Ustedes fabrican o solo revenden?",
    a: "Somos fabricantes en Barranquilla: diseñamos y producimos nuestros trajes de baño. Por eso manejamos colección propia y mayoreo.",
  },
  {
    q: "¿Cómo compro un set si no veo precio en la web?",
    a: "Eliges modelo y talla en el catálogo y nos escribes por WhatsApp (el mismo de nuestra bio en Instagram). Te confirmamos disponibilidad y precio.",
  },
  {
    q: "¿Hacen mayoreo para tiendas?",
    a: "Sí. Cuéntanos ciudad, tipo de negocio y volumen aproximado. Cotizamos sobre la colección vigente y [Confirmar mínimos].",
  },
  {
    q: "¿Cómo sé mi talla?",
    a: "Usa nuestra guía de tallas con busto/cintura/cadera. Si dudas, mándanos tus medidas por WhatsApp y te orientamos antes de encargar.",
  },
  {
    q: "¿Envían a toda Colombia?",
    a: "La bio indica envíos nacionales (y menciona internacionales). Cobertura exacta: [Confirmar]. Al cotizar te decimos tiempo y costo a tu ciudad.",
  },
  {
    q: "¿Puedo cambiar la prenda si la talla no me quedó?",
    a: "[Confirmar política de cambios para swimwear — higiene, plazos, solo defecto vs cambio de talla]. Escríbenos y te explicamos el caso.",
  },
  {
    q: "¿Las fotos son del producto real?",
    a: "En el sitio usamos placeholders elegantes hasta cargar campañas propias. En Instagram @dl_swimwear verás fotos reales de prendas y campañas. Colores pueden variar un poco según pantalla.",
  },
  {
    q: "¿El mayoreo usa otro WhatsApp?",
    a: "Puedes escribir al mismo WhatsApp de la bio e indicar que es mayoreo. [Confirmar si más adelante tendrán línea dedicada.]",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-turquoise-deep">Ayuda</p>
      <h1 className="mt-3 font-display text-4xl text-ocean sm:text-5xl">Preguntas frecuentes</h1>
      <p className="mt-4 text-ink/65">
        Tallas, mayoreo, envíos, cuidados y cómo pedir. Canal oficial: Instagram @{INSTAGRAM_HANDLE}{" "}
        → link de WhatsApp en la bio.
      </p>

      <div className="mt-10 space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-ocean/10 bg-sand/30 px-5 py-4 open:bg-sand/50"
          >
            <summary className="cursor-pointer list-none font-display text-lg text-ocean marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {f.q}
                <span className="text-turquoise transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <OrderButton variant="instagram">{CTA_COPY.primaryOrder}</OrderButton>
        <Link
          href="/tallas"
          className="inline-flex rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
        >
          Guía de tallas
        </Link>
        <Link
          href="/mayoreo"
          className="inline-flex rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
        >
          Mayoreo
        </Link>
      </div>
    </div>
  );
}
