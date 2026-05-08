export const siteConfig = {
  name: "Plomero Panamá 24h",
  shortName: "Plomero PA 24h",
  description:
    "Plomero profesional en Panamá. Destape de cañerías, fugas de agua, instalación de calentadores. Servicio de emergencias. Cotización gratis vía WhatsApp.",
  url: "https://plomeropanama24h.com",

  phone: "+507 6843-7411",
  phoneClean: "50768437411",
  whatsapp: "+507 6843-7411",
  whatsappClean: "50768437411",
  whatsappMessage: "Hola, necesito información sobre servicios de plomería en Panamá. Vi su sitio web.",
  email: "contacto@plomeropanama24h.com",

  serviceArea: "Ciudad de Panamá y áreas cercanas",
  hoursText: "Servicio de emergencias disponible — consulta disponibilidad vía WhatsApp",
  yearEstablished: "2024",

  defaultOgImage: "/og-image.jpg",
  twitterHandle: "",

  // Analytics
  ga4MeasurementId: "G-10FK2BQ94H",

  geo: {
    latitude: "8.9824",
    longitude: "-79.5199",
  },

  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  areasServed: [
    "Ciudad de Panamá",
    "Costa del Este",
    "San Francisco",
    "Punta Pacífica",
    "Obarrio",
    "Panamá Pacífico",
    "Bella Vista",
    "El Cangrejo",
    "Vía España",
    "Calle 50",
  ] as const,

  servicesList: [
    {
      name: "Destape de Cañerías",
      description:
        "Servicio profesional de destape de cañerías y desagües en Ciudad de Panamá.",
    },
    {
      name: "Reparación de Fugas de Agua",
      description:
        "Detección y reparación de fugas de agua visibles y ocultas en hogares y edificios.",
    },
    {
      name: "Plomería de Emergencia",
      description:
        "Servicio de emergencias de plomería. Consulta disponibilidad vía WhatsApp.",
    },
    {
      name: "Reparación de Tuberías",
      description:
        "Cambio y reparación de tuberías dañadas, oxidadas o reventadas en Panamá.",
    },
    {
      name: "Instalación de Calentadores",
      description:
        "Instalación profesional de calentadores de agua eléctricos, a gas y tankless.",
    },
    {
      name: "Plomero Residencial",
      description:
        "Servicios completos de plomería para hogares en Ciudad de Panamá.",
    },
  ],

  languages: ["es-PA"] as const,
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Yappy"] as const,
  currenciesAccepted: "USD",
} as const;

export const editorialTeam = {
  name: "Equipo Plomero Panamá 24h",
  description:
    "Equipo de plomeros profesionales con experiencia en servicios residenciales y comerciales en Ciudad de Panamá.",
  url: "https://plomeropanama24h.com/sobre-nosotros",
} as const;

export const buildWhatsAppLink = (message?: string) => {
  const text = encodeURIComponent(message || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappClean}?text=${text}`;
};

export const buildPhoneLink = () => `tel:+${siteConfig.phoneClean}`;
