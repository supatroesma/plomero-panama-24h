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
    metaTitle: "Plomero en Costa del Este | Servicio Profesional en Panamá",
    metaDescription:
      "Plomero profesional en Costa del Este, Panamá. Servicio para apartamentos y casas. Cotización gratis vía WhatsApp.",
    description:
      "Atendemos toda Costa del Este: torres residenciales, casas y locales. Servicio profesional con cotización transparente.",
    highlights: [
      "Servicio especializado en torres residenciales",
      "Cobertura completa en Costa del Este",
      "Atención de emergencias — consulta disponibilidad vía WhatsApp",
      "Conocemos los sistemas de presión típicos de la zona",
    ],
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    h1: "Plomero en San Francisco, Panamá",
    metaTitle: "Plomero en San Francisco, Panamá | Servicio Profesional",
    metaDescription:
      "Plomero en San Francisco, Ciudad de Panamá. Atendemos casas, apartamentos y comercios. Cotización gratis vía WhatsApp.",
    description:
      "San Francisco es una de nuestras zonas de cobertura principal. Atención profesional en edificios y casas.",
    highlights: [
      "Cobertura completa en San Francisco",
      "Plomeros con experiencia en edificios antiguos y modernos",
      "Servicio residencial y comercial",
      "Atención de emergencias — consulta disponibilidad vía WhatsApp",
    ],
  },
  {
    slug: "punta-pacifica",
    name: "Punta Pacífica",
    h1: "Plomero en Punta Pacífica, Panamá",
    metaTitle: "Plomero en Punta Pacífica | Plomería Profesional Panamá",
    metaDescription:
      "Plomero profesional en Punta Pacífica, Panamá. Servicio para torres residenciales y oficinas. Cotización gratis sin compromiso.",
    description:
      "Trabajamos en torres de Punta Pacífica con sistemas de presión específicos. Servicio profesional con cotización transparente.",
    highlights: [
      "Plomeros con experiencia en torres de alta presión",
      "Cobertura en torres residenciales y oficinas",
      "Servicio para residentes y administradores",
      "Atención de emergencias — consulta disponibilidad vía WhatsApp",
    ],
  },
  {
    slug: "obarrio",
    name: "Obarrio",
    h1: "Plomero en Obarrio, Panamá",
    metaTitle: "Plomero en Obarrio, Panamá | Servicio Profesional",
    metaDescription:
      "Plomero en Obarrio, Ciudad de Panamá. Atendemos casas y oficinas. Llamada o WhatsApp para cotización gratis.",
    description:
      "Obarrio combina zona residencial y comercial. Atendemos ambos perfiles con servicio profesional.",
    highlights: [
      "Cobertura en zona comercial y residencial",
      "Servicio para oficinas y locales comerciales",
      "Atención en horario de oficina",
      "Servicio de emergencias disponible — consulta vía WhatsApp",
    ],
  },
  {
    slug: "panama-pacifico",
    name: "Panamá Pacífico",
    h1: "Plomero en Panamá Pacífico",
    metaTitle: "Plomero en Panamá Pacífico | Servicio Profesional",
    metaDescription:
      "Plomero profesional en Panamá Pacífico. Atendemos casas, condominios y oficinas. Cotización gratis sin compromiso.",
    description:
      "Cubrimos Panamá Pacífico con servicio completo de plomería residencial y comercial. Cotización transparente.",
    highlights: [
      "Cobertura en Panamá Pacífico",
      "Plomeros con experiencia en condominios y casas",
      "Servicio residencial y comercial",
      "Atención de emergencias — consulta disponibilidad vía WhatsApp",
    ],
  },
];

export const getZone = (slug: string) => zones.find((z) => z.slug === slug);
