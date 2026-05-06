export type Testimonial = {
  name: string;
  zone: string;
  service: string;
  rating: number;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "María R.",
    zone: "Costa del Este",
    service: "Reparación de fuga",
    rating: 5,
    text: "Llegaron en 35 minutos a Costa del Este un domingo. Identificaron la fuga oculta sin romper paredes y la repararon el mismo día. Excelente servicio.",
  },
  {
    name: "Carlos M.",
    zone: "San Francisco",
    service: "Destape de cañería",
    rating: 5,
    text: "Tenía el lavamanos de la cocina tapado hace días. Vinieron rápido, lo destaparon con cable mecánico y dejaron todo limpio. Cobraron justo lo que dijeron.",
  },
  {
    name: "Ana P.",
    zone: "Punta Pacífica",
    service: "Plomero 24h emergencia",
    rating: 5,
    text: "Tubería reventada a las 11 de la noche. Llegaron en 40 minutos, cerraron el paso y repararon. Muy profesionales en una situación complicada.",
  },
  {
    name: "Luis G.",
    zone: "Obarrio",
    service: "Instalación de calentador",
    rating: 5,
    text: "Instalaron un calentador tankless en mi apartamento. Trabajo limpio, todo funcionó al primer intento. Me explicaron bien cómo usarlo.",
  },
  {
    name: "Patricia D.",
    zone: "Bella Vista",
    service: "Cambio de tuberías",
    rating: 5,
    text: "Cambié las tuberías oxidadas de mi casa. Hicieron el trabajo en 2 días, dejaron todo ordenado. La cotización inicial fue exacta a lo final.",
  },
  {
    name: "Roberto S.",
    zone: "El Cangrejo",
    service: "Reparación de fuga",
    rating: 4,
    text: "Vinieron rápido a reparar una fuga en el baño. Trabajo bueno, único detalle: tardaron un poco más de lo prometido en llegar. Pero el resultado quedó bien.",
  },
  {
    name: "Sofía L.",
    zone: "Vía España",
    service: "Destape inodoro",
    rating: 5,
    text: "Inodoro tapado durante la cena con familia. Atendieron por WhatsApp y mandaron alguien en 45 minutos. Salvaron la noche, literal.",
  },
  {
    name: "Jorge T.",
    zone: "Calle 50",
    service: "Plomero residencial",
    rating: 5,
    text: "Contraté para mantenimiento general de la casa. Revisaron todo el sistema, cambiaron grifería vieja y dejaron todo funcionando bien. Volveré a contratar.",
  },
  {
    name: "Elena V.",
    zone: "Costa del Este",
    service: "Fuga oculta",
    rating: 5,
    text: "Mi factura de agua subió mucho de un mes a otro. Vinieron con cámara y geófono, encontraron una fuga en la pared del baño. Lo arreglaron sin destrozar todo.",
  },
  {
    name: "Pedro N.",
    zone: "Panamá Pacífico",
    service: "Reparación calentador",
    rating: 5,
    text: "El calentador dejó de funcionar. Diagnosticaron que era el termostato, lo cambiaron en una visita. Resolvieron sin tratar de venderme uno nuevo. Honestos.",
  },
  {
    name: "Cristina B.",
    zone: "Obarrio",
    service: "Instalación grifería",
    rating: 5,
    text: "Compré grifería nueva en El Costo y necesitaba quien la instalara. Vinieron, instalaron 3 grifos en 2 horas, todo perfecto. Precio razonable.",
  },
  {
    name: "Miguel A.",
    zone: "San Francisco",
    service: "Destape drenaje principal",
    rating: 5,
    text: "Drenaje principal del edificio tapado. Hidrojet profesional, trabajo en 90 minutos. La administración del edificio quedó satisfecha. Recomendados.",
  },
];

export const getTestimonialsByService = (service: string, count = 3) => {
  const filtered = testimonials.filter((t) =>
    t.service.toLowerCase().includes(service.toLowerCase())
  );
  if (filtered.length >= count) return filtered.slice(0, count);
  return testimonials.slice(0, count);
};
