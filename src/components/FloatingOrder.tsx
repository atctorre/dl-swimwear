import { CTA_COPY, INSTAGRAM_URL } from "@/lib/contact";

export default function FloatingOrder() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
      aria-label={CTA_COPY.floating}
      title="Abre Instagram @dl_swimwear y usa el link de WhatsApp de la bio"
    >
      <span className="hidden max-w-[11rem] rounded-full bg-ocean/95 px-3 py-1.5 text-xs text-cream opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        {CTA_COPY.floating}
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-xl shadow-black/25 transition hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.25 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        </svg>
      </span>
    </a>
  );
}
