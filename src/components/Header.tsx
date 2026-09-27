"use client";

import Link from "next/link";
import { useState } from "react";
import { CTA_COPY, INSTAGRAM_URL } from "@/lib/contact";

const nav = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/mayoreo", label: "Mayoreo" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/tallas", label: "Tallas" },
  { href: "/envios", label: "Envíos" },
  { href: "/faq", label: "FAQ" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ocean/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group shrink-0" onClick={() => setOpen(false)}>
          <span className="block font-display text-lg tracking-wide text-ocean sm:text-xl">
            DL <span className="text-turquoise-deep">Swimwear</span>
          </span>
          <span className="block text-[10px] uppercase tracking-[0.22em] text-ocean/55">
            Barranquilla · Costa Caribe
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/75 transition hover:text-turquoise-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/mayoreo"
            className="hidden rounded-full border border-ocean/15 px-3 py-1.5 text-xs text-ocean transition hover:border-turquoise hover:text-turquoise-deep sm:inline-flex"
          >
            Mayoreo
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp: usa el link de la bio en Instagram"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] px-3 py-1.5 text-xs font-medium text-white transition hover:opacity-95 sm:px-4 sm:text-sm"
          >
            <span className="hidden sm:inline">{CTA_COPY.primaryOrderShort}</span>
            <span className="sm:hidden">Pedir</span>
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ocean/15 text-ocean lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-ocean/10 bg-cream px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-ink/90 hover:bg-sand/60 hover:text-turquoise-deep"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-2 py-2 text-turquoise-deep"
              onClick={() => setOpen(false)}
            >
              Instagram @dl_swimwear
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
