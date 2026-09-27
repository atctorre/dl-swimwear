import Link from "next/link";
import { CTA_COPY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/mayoreo", label: "Mayoreo" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/tallas", label: "Guía de tallas" },
  { href: "/envios", label: "Envíos" },
  { href: "/faq", label: "FAQ" },
  { href: "/nosotros", label: "Sobre DL" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ocean/10 bg-ocean text-cream/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-cream">
            DL <span className="text-turquoise-soft">Swimwear</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Fabricantes de trajes de baño en Barranquilla. Retail y mayoreo — pide por el WhatsApp
            de la bio en Instagram.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-turquoise-soft">Explorar</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-turquoise-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-turquoise-soft">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-turquoise-soft"
              >
                {CTA_COPY.primaryOrder}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-turquoise-soft"
              >
                Instagram: @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li className="text-cream/45">
              Dirección, NIT y horarios: se confirman al escribirnos. [Confirmar con el cliente]
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} DL Swimwear · Fabricado en Barranquilla, Costa Caribe
      </div>
    </footer>
  );
}
