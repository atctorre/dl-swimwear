type Props = {
  label: string;
  gradient?: string;
  className?: string;
  aspect?: string;
  style?: "bikini" | "enterizo" | "cover-up";
};

export default function SwimPlaceholder({
  label,
  gradient = "from-cyan-200 via-teal-400 to-sky-800",
  className = "",
  aspect = "aspect-[3/4]",
  style = "bikini",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-ocean ${aspect} ${className}`}
      role="img"
      aria-label={`Placeholder de catálogo: ${label}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95`} />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.5), transparent 40%), radial-gradient(circle at 80% 75%, rgba(10,77,104,0.35), transparent 50%)",
        }}
      />
      <svg
        className="absolute inset-x-0 bottom-0 h-1/3 w-full opacity-30"
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 60 Q50 30 100 60 T200 60 T300 60 T400 60 V120 H0 Z"
          fill="white"
          fillOpacity="0.25"
        />
        <path
          d="M0 80 Q50 55 100 80 T200 80 T300 80 T400 80"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </svg>
      <svg
        className="absolute left-1/2 top-[28%] h-[42%] w-[45%] -translate-x-1/2 opacity-35"
        viewBox="0 0 80 120"
        fill="none"
        aria-hidden
      >
        {style === "bikini" && (
          <>
            <path d="M20 28 C28 18, 52 18, 60 28 L54 42 C48 36, 32 36, 26 42 Z" stroke="white" strokeWidth="1.5" />
            <path d="M24 78 C32 68, 48 68, 56 78 L52 108 C44 102, 36 102, 28 108 Z" stroke="white" strokeWidth="1.5" />
          </>
        )}
        {style === "enterizo" && (
          <path
            d="M28 22 C36 14, 44 14, 52 22 L56 48 C58 58, 56 70, 54 88 L50 110 C42 104, 38 104, 30 110 L26 88 C24 70, 22 58, 24 48 Z"
            stroke="white"
            strokeWidth="1.5"
          />
        )}
        {style === "cover-up" && (
          <path
            d="M22 20 L30 28 L28 110 L52 110 L50 28 L58 20 M30 40 L50 40"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}
      </svg>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-deep/80 to-transparent p-4 pt-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-sand/90">
          Placeholder catálogo
        </p>
        <p className="mt-1 font-display text-sm text-cream line-clamp-2">{label}</p>
      </div>
    </div>
  );
}
