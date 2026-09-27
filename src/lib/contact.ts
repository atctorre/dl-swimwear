/** Contact helpers — WhatsApp number unconfirmed; CTAs route via Instagram bio link. */
export const INSTAGRAM_HANDLE = "dl_swimwear";
export const INSTAGRAM_URL = "https://instagram.com/dl_swimwear";
export const SITE_NAME = "DL Swimwear";
export const SITE_URL = "https://dl-swimwear.vercel.app";
export const CITY = "Barranquilla";
export const COUNTRY = "Colombia";

/** No confirmed WA digits — never invent wa.me numbers. */
export const WHATSAPP_NUMBER: string | null = null;

export function orderLink(_message?: string): string {
  return INSTAGRAM_URL;
}

export const CTA_COPY = {
  primaryOrder: "Pedir por WhatsApp (mismo link de la bio)",
  primaryOrderShort: "Pedir por Instagram",
  floating: "Pide tu talla o cotiza mayoreo",
  floatingLabel: "WhatsApp vía IG",
  mayoreo: "Cotizar mayoreo por Instagram",
  mayoreoShort: "Soy tienda / Mayoreo",
  product: "Encargar por WhatsApp (bio IG)",
  sizeHelp: "Ayuda con mi talla (bio IG)",
  shipping: "Preguntar envío (bio IG)",
} as const;

export const PREFILL_HINTS = {
  home: "Hola DL Swimwear, vengo de la web. Quiero: ( ) pedido personal  ( ) mayoreo",
  product: (name: string) =>
    `Hola DL Swimwear, quiero encargar: ${name} — talla ___, color ___. Vengo de la página web.`,
  mayoreo: (name?: string) =>
    name
      ? `Hola DL, quiero mayoreo de ${name}. Ciudad: ___. Cantidad aproximada: ___.`
      : `Hola DL Swimwear, soy tienda/revendedora y quiero cotizar mayoreo. Ciudad: ___. Volumen aproximado: ___.`,
  size: "Hola DL Swimwear, necesito ayuda con mi talla. Mis medidas: busto ___, cintura ___, cadera ___.",
  shipping: "Hola DL Swimwear, quiero preguntar por envío a mi ciudad: ___.",
} as const;
