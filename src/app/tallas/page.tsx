import type { Metadata } from "next";
import Link from "next/link";
import OrderButton from "@/components/OrderButton";
import { sizeGuideRows } from "@/data/products";
import { CTA_COPY, PREFILL_HINTS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Guía de tallas",
  description: "Encuentra tu talla de bikini y enterizo. Tabla de medidas DL Swimwear.",
};

export default function TallasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-turquoise-deep">Fit</p>
      <h1 className="mt-3 font-display text-4xl text-ocean sm:text-5xl">
        Guía de tallas DL Swimwear
      </h1>
      <p className="mt-4 max-w-2xl text-ink/65">
        La talla correcta es la que te hace sentir segura. Mídete y compárala con nuestra tabla.
      </p>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-ocean/10">
        <table className="w-full min-w-[32rem] text-sm">
          <thead className="bg-ocean text-cream">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Talla</th>
              <th className="px-4 py-3 text-left font-medium">Busto (cm)</th>
              <th className="px-4 py-3 text-left font-medium">Cintura (cm)</th>
              <th className="px-4 py-3 text-left font-medium">Cadera (cm)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ocean/10 bg-cream">
            {sizeGuideRows.map((r) => (
              <tr key={r.size} className="hover:bg-sand/40">
                <td className="px-4 py-3 font-medium text-ocean">{r.size}</td>
                <td className="px-4 py-3 text-ink/75">{r.busto}</td>
                <td className="px-4 py-3 text-ink/75">{r.cintura}</td>
                <td className="px-4 py-3 text-ink/75">{r.cadera}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-ocean/45">
        Tabla orientativa de muestra. Insertar tabla oficial del cliente — [Confirmar medidas
        reales].
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-ocean/10 bg-sand/40 p-6">
          <h2 className="font-display text-xl text-ocean">Tips para medirte</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li>• Mídete sin ropa gruesa, con cinta flexible.</li>
            <li>
              • Si estás entre dos tallas,{" "}
              <em className="not-italic text-ocean/45">
                [Confirmar criterio: subir de talla / escribir a WA]
              </em>
              .
            </li>
            <li>• ¿Dudas? Mándanos tus medidas por WhatsApp y te orientamos.</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-ocean p-6 text-cream">
          <h2 className="font-display text-xl">Cuida tu traje de baño</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>• Enjuaga con agua dulce después de mar o piscina.</li>
            <li>• Lava a mano con jabón suave; evita lavadora y secadora.</li>
            <li>• No retuerzas la prenda; deja secar a la sombra.</li>
            <li>• Evita dejarlo húmedo en bolsas cerradas.</li>
            <li className="text-cream/45">
              • Composición típica: [Confirmar elastano/poliéster/etc.]
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <OrderButton variant="instagram" title={PREFILL_HINTS.size}>
          {CTA_COPY.sizeHelp}
        </OrderButton>
        <Link
          href="/catalogo"
          className="inline-flex rounded-full border border-ocean/20 px-6 py-3 text-sm text-ocean hover:border-turquoise"
        >
          Volver al catálogo
        </Link>
      </div>
    </div>
  );
}
