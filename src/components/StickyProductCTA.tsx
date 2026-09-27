"use client";

import { CTA_COPY, INSTAGRAM_URL } from "@/lib/contact";

export default function StickyProductCTA({ productName }: { productName: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ocean/10 bg-cream/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          title={`Encargar ${productName} — WhatsApp en bio de Instagram`}
          className="flex-1 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] py-3 text-center text-sm font-medium text-white"
        >
          Encargar
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-ocean/20 px-4 py-3 text-sm text-ocean"
        >
          {CTA_COPY.mayoreoShort.split(" ")[0]}
        </a>
      </div>
    </div>
  );
}
