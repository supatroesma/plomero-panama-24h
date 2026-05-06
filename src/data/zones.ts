export type Zone = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  highlights: string[];
};

export const zones: Zone[] = [
  {
    slug: "costa-del-este",
    name: "Costa del Este",
    h1: "Plomero en Costa del Este, Panamá",
    metaTitle: "Plomero en Costa del Este | Servicio 24h en Panamá",
    metaDescription:
      "Plomero profesional en Costa del Este, Panamá. Servicio 24 horas para apartamentos y casas. Llegamos en 30 minutos. WhatsApp directo.",
    description:
      "Atendemos toda Costa del Este: torres residenciales, casas y locales. Tiempo de llegada promedio: 30 minutos.",
    highlights: [
      "Servicio especializado en torres residenciales",
      "Llegada en 30 minutos a Costa del Este",
      "Disponible 24 horas, fines de semana incluidos",
      "Conocemos los sistemas de presión típicos de la zona",
    ],
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    h1: "Plomero en San Francisco, Panamá",
    metaTitle: "Plomero en San Francisco, Panamá | Servicio Profesional 24h",
    metaDescription:
      "Plomero en San Francisco, Ciudad de Panamá. Atendemos casas, apartamentos y comercios. Servicio 24h. Cotización gratis vía WhatsApp.",
    description:
      "San Francisco es una de nuestras zonas de cobertura principal. Atención rápida en edificios y casas.",
    highlights: [
      "Cobertura completa en San Francisco",
      "Especialistas en edificios antiguos y modernos",
      "Tiempo de llegada: 30-45 minutos",
      "Servicio nocturno disponible",
    ],
  },
  {
    slug: "punta-pacifica",
    name: "Punta Pacífica",
    h1: "Plomero en Punta Pacífica, Panamá",
    metaTitle: "Plomero en Punta Pacífica | Plomería Profesional Panamá",
    metaDescription:
      "Plomero profesional en Punta Pacífica, Panamá. Servicio 24h para torres residenciales y oficinas. Cotización gratis sin compromiso.",
    description:
      "Trabajamos en torres de Punta Pacífica con sistemas de presión específicos. Servicio rápido y profesional.",
    highlights: [
      "Especialistas en torres de alta presión",
      "Llegada en 30 minutos",
      "Servicio para residentes y administradores",
      "Disponible 24/7",
    ],
  },
  {
    slug: "obarrio",
    name: "Obarrio",
    h1: "Plomero en Obarrio, Panamá",
    metaTitle: "Plomero en Obarrio, Panamá | Servicio 24 Horas",
    metaDescription:
      "Plomero en Obarrio, Ciudad de Panamá. Atendemos casas y oficinas. Servicio 24 horas. Llamada o WhatsApp para cotización gratis.",
    description:
      "Obarrio combina zona residencial y comercial. Atendemos ambos perfiles con la misma rapidez y profesionalismo.",
    highlights: [
      "Cobertura en zona comercial y residencial",
      "Servicio para oficinas y locales comerciales",
      "Llegada en 30-45 minutos",
      "Atención en horario de oficina y emergencias",
    ],
  },
  {
    slug: "panama-pacifico",
    name: "Panamá Pacífico",
    h1: "Plomero en Panamá Pacífico",
    metaTitle: "Plomero en Panamá Pacífico | Servicio Profesional 24h",
    metaDescription:
      "Plomero profesional en Panamá Pacífico. Atendemos casas, condominios y oficinas. Servicio 24 horas. Cotización gratis sin compromiso.",
    description:
      "Cubrimos Panamá Pacífico con servicio completo de plomería residencial y comercial. Tiempo de llegada: 45-60 minutos.",
    highlights: [
      "Cobertura completa en Panamá Pacífico",
      "Especialistas en condominios y casas",
      "Tiempo de llegada: 45-60 minutos",
      "Servicio 24 horas con tarifa transparente",
    ],
  },
];

export const getZone = (slug: string) => zones.find((z) => z.slug === slug);
