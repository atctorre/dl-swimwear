export type ProductStyle = "bikini" | "enterizo" | "cover-up";
export type CollectionId = "costa-viva" | "basicos-dl" | "nuevos";
export type SizeId = "XS" | "S" | "M" | "L" | "XL";

export interface Product {
  slug: string;
  name: string;
  style: ProductStyle;
  collection: CollectionId;
  color: string;
  sizes: SizeId[];
  shortDescription: string;
  isNew?: boolean;
  gradient: string;
  accent: string;
}

export const STYLE_LABELS: Record<ProductStyle, string> = {
  bikini: "Bikini",
  enterizo: "Enterizo",
  "cover-up": "Cover-up",
};

export const COLLECTION_LABELS: Record<CollectionId, string> = {
  "costa-viva": "Costa Viva",
  "basicos-dl": "Básicos DL",
  nuevos: "Nuevos ingresos",
};

export const products: Product[] = [
  {
    slug: "bikini-arena-dual",
    name: "Bikini Arena Dual",
    style: "bikini",
    collection: "costa-viva",
    color: "Arena",
    sizes: ["XS", "S", "M", "L", "XL"],
    shortDescription:
      "Bikini de tiro medio y top adjustable, pensado para largos días de sol en la Costa. Combina con nuestros cover-ups de la misma línea.",
    isNew: true,
    gradient: "from-amber-100 via-teal-300 to-cyan-700",
    accent: "#2EC4B6",
  },
  {
    slug: "bikini-caribe-triangulo",
    name: "Bikini Caribe Triángulo",
    style: "bikini",
    collection: "costa-viva",
    color: "Turquesa",
    sizes: ["XS", "S", "M", "L"],
    shortDescription:
      "Triángulo clásico con lazos laterales: bronceado limpio y vibe de playa Barranquilla. Ideal para piscina y mar.",
    gradient: "from-cyan-200 via-teal-400 to-sky-800",
    accent: "#14B8A6",
  },
  {
    slug: "bikini-sunset-bandeau",
    name: "Bikini Sunset Bandeau",
    style: "bikini",
    collection: "nuevos",
    color: "Coral atardecer",
    sizes: ["S", "M", "L", "XL"],
    shortDescription:
      "Bandeau con detalle fruncido y bottom de cobertura media. Un look de atardecer caribeño sin enredos.",
    isNew: true,
    gradient: "from-orange-200 via-rose-300 to-teal-600",
    accent: "#FF8A7A",
  },
  {
    slug: "bikini-palmera-high-waist",
    name: "Bikini Palmera High-Waist",
    style: "bikini",
    collection: "basicos-dl",
    color: "Verde palmera",
    sizes: ["XS", "S", "M", "L", "XL"],
    shortDescription:
      "Bottom de tiro alto que estiliza y top de soporte suave. Un básico DL para usar toda la temporada.",
    gradient: "from-lime-100 via-emerald-400 to-teal-800",
    accent: "#10B981",
  },
  {
    slug: "enterizo-olas-scoop",
    name: "Enterizo Olas Scoop",
    style: "enterizo",
    collection: "costa-viva",
    color: "Azul océano",
    sizes: ["S", "M", "L", "XL"],
    shortDescription:
      "Enterizo de escote scoop y espalda abierta: un solo gesto, máximo impacto en la orilla.",
    isNew: true,
    gradient: "from-sky-200 via-blue-400 to-teal-900",
    accent: "#0EA5E9",
  },
  {
    slug: "enterizo-luna-cruzada",
    name: "Enterizo Luna Cruzada",
    style: "enterizo",
    collection: "basicos-dl",
    color: "Negro noche",
    sizes: ["XS", "S", "M", "L"],
    shortDescription:
      "Cruce frontal y pierna alta: silueta segura para piscina, hotel o foto de lookbook.",
    gradient: "from-stone-200 via-slate-500 to-teal-900",
    accent: "#334155",
  },
  {
    slug: "enterizo-brisas-anillo",
    name: "Enterizo Brisas Anillo",
    style: "enterizo",
    collection: "nuevos",
    color: "Arena rosada",
    sizes: ["S", "M", "L"],
    shortDescription:
      "Detalle de anillo metálico en la cintura y caída suave. Para looks de resort con sello Costa Caribe.",
    isNew: true,
    gradient: "from-rose-100 via-amber-200 to-teal-700",
    accent: "#F472B6",
  },
  {
    slug: "cover-up-marea-kimono",
    name: "Cover-up Marea Kimono",
    style: "cover-up",
    collection: "costa-viva",
    color: "Blanco arena",
    sizes: ["S", "M", "L", "XL"],
    shortDescription:
      "Kimono liviano para salir del mar o cruzar el hotel. Capa perfecta sobre cualquier bikini DL.",
    gradient: "from-stone-50 via-amber-100 to-teal-500",
    accent: "#F5E6D3",
  },
  {
    slug: "cover-up-sol-pareo",
    name: "Cover-up Sol Pareo",
    style: "cover-up",
    collection: "basicos-dl",
    color: "Mostaza sol",
    sizes: ["S", "M", "L", "XL"],
    shortDescription:
      "Pareo versátil de amarre libre: falda, vestido corto o wrap. Un esencial de maleta playera.",
    gradient: "from-yellow-100 via-amber-300 to-orange-600",
    accent: "#F59E0B",
  },
  {
    slug: "bikini-coral-anillo",
    name: "Bikini Coral Anillo",
    style: "bikini",
    collection: "nuevos",
    color: "Coral vivo",
    sizes: ["XS", "S", "M", "L"],
    shortDescription:
      "Top con anillo central y bottom de lazos. Color que se ve de lejos — hecho para el feed y para la playa.",
    isNew: true,
    gradient: "from-rose-200 via-orange-300 to-red-500",
    accent: "#FB7185",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.style === product.style || p.collection === product.collection)
    )
    .slice(0, limit);
}

export const collections = [
  {
    id: "costa-viva" as CollectionId,
    name: "Costa Viva",
    description:
      "Mood de Costa Caribe: turquesa, arena y piezas listas para sol todo el año. [Nombre de colección a confirmar con el cliente.]",
    href: "/catalogo?coleccion=costa-viva",
  },
  {
    id: "basicos-dl" as CollectionId,
    name: "Básicos DL",
    description:
      "Siluetas que se repiten temporada a temporada: black, verdes y neutrales que combinan con todo.",
    href: "/catalogo?coleccion=basicos-dl",
  },
  {
    id: "nuevos" as CollectionId,
    name: "Nuevos ingresos",
    description: "Lo último que subimos al catálogo y al feed de @dl_swimwear.",
    href: "/catalogo?coleccion=nuevos",
  },
];

export const catalogCategories = [
  {
    slug: "bikini",
    name: "Bikinis",
    description: "Tops y bottoms que combinan",
    href: "/catalogo?estilo=bikini",
  },
  {
    slug: "enterizo",
    name: "Enterizos",
    description: "Un solo gesto, máximo impacto",
    href: "/catalogo?estilo=enterizo",
  },
  {
    slug: "cover-up",
    name: "Cover-ups",
    description: "Salidas de baño [Confirmar línea]",
    href: "/catalogo?estilo=cover-up",
  },
  {
    slug: "nuevos",
    name: "Nuevos ingresos",
    description: "Lo último de la colección",
    href: "/catalogo?coleccion=nuevos",
  },
];

/** Soft size guide — official table pending client confirmation */
export const sizeGuideRows = [
  { size: "XS", busto: "78–82", cintura: "60–64", cadera: "86–90" },
  { size: "S", busto: "82–86", cintura: "64–68", cadera: "90–94" },
  { size: "M", busto: "86–90", cintura: "68–72", cadera: "94–98" },
  { size: "L", busto: "90–96", cintura: "72–78", cadera: "98–104" },
  { size: "XL", busto: "96–102", cintura: "78–84", cadera: "104–110" },
];
