import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingOrder from "@/components/FloatingOrder";
import Header from "@/components/Header";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dl-swimwear.vercel.app"),
  title: {
    default: "Trajes de baño fabricados en Barranquilla | DL Swimwear",
    template: "%s | DL Swimwear",
  },
  description:
    "DL Swimwear: fabricante de swimwear en Barranquilla. Bikinis, enterizos y más. Pedidos y mayoreo por WhatsApp. +100k en Instagram.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "DL Swimwear",
    title: "Trajes de baño fabricados en Barranquilla | DL Swimwear",
    description:
      "Fabricante de swimwear en Barranquilla. Catálogo, mayoreo y pedidos por el WhatsApp de la bio en Instagram.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DL Swimwear — Trajes de baño Barranquilla",
    description: "Fabricantes de swimwear. Pedidos y mayoreo vía Instagram @dl_swimwear.",
  },
  robots: { index: true, follow: true },
  keywords: [
    "trajes de baño Barranquilla",
    "swimwear fabricante Colombia",
    "bikini mayoreo Colombia",
    "trajes de baño fabricados en Barranquilla",
    "Costa Caribe",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingOrder />
      </body>
    </html>
  );
}
