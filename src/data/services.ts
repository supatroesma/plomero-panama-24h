export type Service = {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  icon: string;
  keyword: string;
  intent: "transactional" | "commercial" | "urgent";
  subTopics: string[];
  image?: string;
};

export const services: Service[] = [
  {
    slug: "destape-canerias",
    name: "Destape de Cañerías",
    shortName: "Destape Cañerías",
    h1: "Destape de Cañerías en Panamá",
    metaTitle: "Destape de Cañerías en Panamá | Servicio Profesional",
    metaDescription:
      "Servicio profesional de destape de cañerías en Ciudad de Panamá. Métodos mecánico, químico e hidrojet. Cotización gratis vía WhatsApp.",
    description:
      "Destapamos cañerías y desagües tapados con métodos profesionales. Servicio en toda Ciudad de Panamá.",
    icon: "Pipette",
    keyword: "destapa cañerias panama",
    intent: "transactional",
    subTopics: [
      "Qué causa que se tape una cañería",
      "Métodos de destape: mecánico, químico, hidrojet",
      "Cuánto tiempo toma destapar una cañería",
      "Cómo prevenir taponamientos",
      "Diferencia entre destape simple y destape profundo",
      "Productos químicos: cuándo SÍ y cuándo NO usarlos",
    ],
    image: "/images/servicios/destape-canerias.webp",
  },
  {
    slug: "fugas-de-agua",
    name: "Reparación de Fugas de Agua",
    shortName: "Fugas de Agua",
    h1: "Reparación de Fugas de Agua en Panamá",
    metaTitle: "Reparación de Fugas de Agua en Panamá | Detección y Reparación",
    metaDescription:
      "Detección y reparación profesional de fugas de agua visibles y ocultas en Ciudad de Panamá. Servicio de emergencias. Cotización gratis.",
    description:
      "Detectamos y reparamos fugas de agua en muros, pisos y subterráneas. Tecnología profesional, mínimo daño.",
    icon: "Droplets",
    keyword: "fugas de agua panama",
    intent: "transactional",
    subTopics: [
      "Tipos de fugas (visibles, ocultas, en muros, subterráneas)",
      "Cómo detectar una fuga oculta",
      "Métodos de detección (visual, con cámara, geófono)",
      "Daños que causa una fuga sin reparar",
      "Cobertura de seguros en Panamá para fugas",
    ],
    image: "/images/servicios/fugas-de-agua.jpg",
  },
  {
    slug: "reparacion-tuberias",
    name: "Reparación de Tuberías",
    shortName: "Reparación Tuberías",
    h1: "Reparación de Tuberías en Panamá",
    metaTitle: "Reparación y Cambio de Tuberías en Panamá | Plomero Profesional",
    metaDescription:
      "Reparación y cambio de tuberías rotas, oxidadas o reventadas en Ciudad de Panamá. Servicio profesional. Cotización gratis vía WhatsApp.",
    description:
      "Cambiamos y reparamos tuberías de PVC, cobre, CPVC y galvanizadas. Servicio completo residencial y comercial.",
    icon: "Wrench",
    keyword: "reparacion de tuberias panama",
    intent: "transactional",
    subTopics: [
      "Tipos de tuberías (PVC, CPVC, cobre, galvanizadas)",
      "Señales de que necesitas cambiar la tubería",
      "Tuberías reventadas: causas y reparación",
      "Cambio parcial vs cambio total",
      "Cuánto tiempo dura una tubería en Panamá",
    ],
    image: "/images/servicios/reparacion-tuberias.jpg",
  },
  {
    slug: "plomero-24-horas",
    name: "Plomero 24 Horas",
    shortName: "Plomero 24h",
    h1: "Plomero 24 Horas en Panamá | Emergencias",
    metaTitle: "Plomero 24 Horas en Panamá | Servicio de Emergencia",
    metaDescription:
      "Servicio de plomería de emergencia en Ciudad de Panamá. Tuberías reventadas, fugas, destape urgente. Cotización gratis vía WhatsApp.",
    description:
      "Servicio de plomería de emergencia. Atención de problemas urgentes en toda Ciudad de Panamá. Consulta disponibilidad vía WhatsApp.",
    icon: "Clock",
    keyword: "plomero 24 horas panama",
    intent: "urgent",
    subTopics: [
      "Cuándo es una emergencia de plomería real",
      "Qué hacer mientras llega el plomero",
      "Cobertura por zona en Ciudad de Panamá",
      "Tarifas nocturnas y de fin de semana",
      "Tipos de emergencias más comunes",
    ],
    image: "/images/servicios/plomero-24-horas.png",
  },
  {
    slug: "instalacion-calentadores",
    name: "Instalación de Calentadores",
    shortName: "Calentadores",
    h1: "Instalación de Calentadores de Agua en Panamá",
    metaTitle: "Instalación de Calentadores de Agua en Panamá | Eléctricos y Gas",
    metaDescription:
      "Instalación profesional de calentadores de agua en Panamá. Eléctricos, a gas, tankless. Cotización gratis vía WhatsApp.",
    description:
      "Instalamos calentadores eléctricos, a gas y tankless. Asesoría sobre el modelo ideal para tu casa o apartamento.",
    icon: "Flame",
    keyword: "instalacion calentadores panama",
    intent: "commercial",
    subTopics: [
      "Tipos de calentadores: eléctrico, gas, tankless, solar",
      "Cuál calentador conviene en clima panameño",
      "Costo aproximado de instalación",
      "Mantenimiento de calentadores",
      "Reparación de calentadores que no calientan",
    ],
    image: "/images/servicios/instalacion-calentadores.jpg",
  },
  {
    slug: "plomero-residencial",
    name: "Plomero Residencial",
    shortName: "Plomero Residencial",
    h1: "Plomero Residencial a Domicilio en Panamá",
    metaTitle: "Plomero Residencial a Domicilio en Panamá | Servicio Completo",
    metaDescription:
      "Plomero residencial a domicilio en Ciudad de Panamá. Servicios completos para casas y apartamentos. Cotización gratis sin compromiso.",
    description:
      "Servicios completos de plomería para hogares: instalaciones, reparaciones y mantenimiento. Visitas a domicilio en toda Ciudad de Panamá.",
    icon: "Home",
    keyword: "plomero residencial panama",
    intent: "commercial",
    subTopics: [
      "Servicios incluidos en plomería residencial",
      "Diferencia entre plomero residencial y comercial",
      "Mantenimiento preventivo del hogar",
      "Cobertura: casas, apartamentos, edificios",
      "Cómo agendar una visita",
    ],
    image: "/images/servicios/plomero-residencial.jpg",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export const getRelatedServices = (slug: string, count = 3): Service[] => {
  const others = services.filter((s) => s.slug !== slug);
  return others.slice(0, count);
};
