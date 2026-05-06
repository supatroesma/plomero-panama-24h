export type FAQ = {
  question: string;
  answer: string;
};

export const generalFAQs: FAQ[] = [
  {
    question: "¿Atienden emergencias de plomería las 24 horas en Panamá?",
    answer:
      "Sí, atendemos emergencias de plomería 24 horas, 7 días a la semana en toda Ciudad de Panamá. Nuestro equipo llega en 30-60 minutos según la zona.",
  },
  {
    question: "¿Cuánto tarda en llegar un plomero en Panamá?",
    answer:
      "Un plomero llega entre 30 y 60 minutos según la zona. Costa del Este, San Francisco, Punta Pacífica y Obarrio: 30 minutos. Panamá Oeste y áreas alejadas: 60-90 minutos.",
  },
  {
    question: "¿Cuánto cuesta un plomero en Panamá?",
    answer:
      "El costo de un plomero en Panamá varía entre $30 y $200 según el tipo de servicio. Un destape simple cuesta $30-80, una reparación de fuga $50-150 y la instalación de un calentador $100-250 más materiales.",
  },
  {
    question: "¿Dan cotización antes de empezar el trabajo?",
    answer:
      "Sí, damos cotización gratis sin compromiso antes de empezar cualquier trabajo. La evaluación inicial es transparente y por escrito vía WhatsApp.",
  },
  {
    question: "¿En qué zonas de Panamá atienden?",
    answer:
      "Atendemos toda Ciudad de Panamá: Costa del Este, San Francisco, Punta Pacífica, Obarrio, Bella Vista, El Cangrejo, Vía España, Calle 50, Panamá Pacífico y áreas cercanas.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, tarjeta de crédito, transferencia bancaria y Yappy. Coordinamos el pago al finalizar el trabajo, una vez verifiques que todo quedó funcionando.",
  },
];

export const serviceFAQs: Record<string, FAQ[]> = {
  "destape-canerias": [
    {
      question: "¿Cuánto tarda destapar una cañería?",
      answer:
        "Destapar una cañería toma entre 30 minutos y 2 horas según la severidad y profundidad del taponamiento. Un destape simple de lavamanos toma 30 minutos; un drenaje principal con hidrojet puede tomar hasta 2 horas.",
      },
    {
      question: "¿Qué método de destape es mejor?",
      answer:
        "El mejor método depende del problema. Para taponamientos superficiales: mecánico (cable). Para grasa y acumulación: hidrojet. Los químicos solo se recomiendan en casos puntuales porque pueden dañar tuberías plásticas a largo plazo.",
    },
    {
      question: "¿Puedo destapar la cañería con productos químicos del super?",
      answer:
        "Los productos químicos pueden funcionar en taponamientos leves, pero no se recomiendan para uso frecuente. Dañan tuberías de PVC, son corrosivos y peligrosos. Si el taponamiento persiste, llama a un plomero profesional.",
    },
    {
      question: "¿Cuánto cuesta destapar una cañería en Panamá?",
      answer:
        "Un destape simple en Panamá cuesta entre $30 y $80. Un destape con hidrojet o drenaje principal puede costar $80-200 según la complejidad y el tiempo requerido.",
    },
    {
      question: "¿Cómo evito que se vuelva a tapar?",
      answer:
        "Evita tirar grasa, cabello, toallitas húmedas y residuos sólidos por el desagüe. Coloca rejillas en lavamanos y duchas. Una vez al mes, vierte agua caliente con bicarbonato y vinagre por los desagües.",
    },
  ],
  "fugas-de-agua": [
    {
      question: "¿Cómo detecto una fuga de agua oculta?",
      answer:
        "Una fuga oculta se detecta por: factura de agua que sube sin razón, manchas de humedad en paredes o pisos, olor a moho, sonido constante de agua corriendo, presión baja en las llaves. Llama un plomero con equipo de detección.",
    },
    {
      question: "¿Cuánto cuesta reparar una fuga de agua en Panamá?",
      answer:
        "La reparación de una fuga visible cuesta entre $50 y $120. Una fuga oculta que requiere detección con cámara o geófono puede costar $150-400 incluyendo la reparación, según la ubicación y el daño.",
    },
    {
      question: "¿Las fugas de agua están cubiertas por el seguro en Panamá?",
      answer:
        "Algunos seguros de hogar en Panamá cubren daños por fugas de agua si no son por mantenimiento descuidado. Solicita la reparación por escrito al plomero para presentarla a tu aseguradora.",
    },
    {
      question: "¿Qué hago mientras llega el plomero?",
      answer:
        "Cierra la llave de paso principal de tu casa para detener el flujo de agua. Coloca trapos o baldes en la zona afectada. No intentes reparar tú mismo si no estás seguro: puedes empeorar el daño.",
    },
    {
      question: "¿Puedo detectar una fuga sin romper paredes?",
      answer:
        "Sí, usamos métodos no invasivos: geófonos acústicos, cámaras termográficas y endoscopios. La detección no destructiva ahorra costos de reparación posterior y permite identificar la fuga con precisión.",
    },
  ],
  "reparacion-tuberias": [
    {
      question: "¿Cuánto dura una tubería de PVC en Panamá?",
      answer:
        "Una tubería de PVC bien instalada dura entre 25 y 40 años en Panamá. El clima cálido y la humedad pueden acelerar el deterioro si la instalación es deficiente o si recibe golpes constantes.",
    },
    {
      question: "¿Qué es mejor: PVC o CPVC?",
      answer:
        "El CPVC es mejor para agua caliente porque resiste hasta 90°C. El PVC se recomienda solo para agua fría. En instalaciones modernas en Panamá, lo común es PVC para agua fría y CPVC o cobre para agua caliente.",
    },
    {
      question: "¿Cuánto cuesta cambiar tuberías en una casa en Panamá?",
      answer:
        "El cambio total de tuberías de una casa pequeña en Panamá cuesta entre $800 y $2,500 según el tamaño, materiales y dificultad. Un cambio parcial (un baño o cocina) cuesta $200-600.",
    },
    {
      question: "¿Puedo reparar una tubería sin cortar la pared?",
      answer:
        "En algunos casos sí, usando técnicas de reparación localizada o relining. Sin embargo, si la tubería está muy dañada o oxidada, lo recomendable es cambiarla. Un plomero evalúa el estado real con cámara endoscópica.",
    },
    {
      question: "¿Qué señales indican que necesito cambiar las tuberías?",
      answer:
        "Señales de cambio: agua color marrón, fugas frecuentes, presión baja constante, ruidos en las tuberías, manchas de humedad recurrentes. Si tu casa tiene más de 25 años y nunca cambió tuberías, considera una inspección.",
    },
  ],
  "plomero-24-horas": [
    {
      question: "¿Qué se considera una emergencia de plomería?",
      answer:
        "Es emergencia: tubería reventada, fuga incontrolable, inodoro desbordándose, sin agua en toda la casa, fuga de gas en calentador. Si hay riesgo de daño a tu propiedad o a tu salud, llama de inmediato.",
    },
    {
      question: "¿Cobran extra por servicio nocturno o de fin de semana?",
      answer:
        "El servicio nocturno y de fin de semana puede tener un recargo del 20-50% sobre la tarifa normal. Te damos la cotización antes de empezar para que decidas si proceder.",
    },
    {
      question: "¿Cuánto tarda un plomero de emergencia en llegar?",
      answer:
        "Un plomero de emergencia en Ciudad de Panamá llega en 30-60 minutos. Costa del Este, San Francisco, Punta Pacífica: 30 minutos. Áreas más alejadas: 60-90 minutos.",
    },
    {
      question: "¿Atienden emergencias en madrugada?",
      answer:
        "Sí, atendemos emergencias de plomería las 24 horas, incluyendo madrugada, fines de semana y feriados. El número de WhatsApp y teléfono está activo siempre.",
    },
    {
      question: "¿Qué hago mientras esperan al plomero?",
      answer:
        "Cierra la llave de paso principal de la casa. Si es fuga de gas, abre ventanas y no enciendas luces. Documenta con fotos para tu seguro. No intentes reparaciones complejas si no tienes experiencia.",
    },
  ],
  "instalacion-calentadores": [
    {
      question: "¿Qué calentador conviene para una familia en Panamá?",
      answer:
        "Para una familia de 4 personas en Panamá, un calentador eléctrico de 30-40 galones o un tankless de 12 lpm es lo ideal. Si tienes conexión a gas, un calentador a gas es más eficiente a largo plazo.",
    },
    {
      question: "¿Cuánto cuesta instalar un calentador en Panamá?",
      answer:
        "La instalación de un calentador eléctrico en Panamá cuesta entre $80 y $180 (mano de obra, sin incluir el calentador). Un tankless o a gas puede costar $150-350 por la instalación específica.",
    },
    {
      question: "¿Cuál calentador consume menos electricidad?",
      answer:
        "Los calentadores tankless consumen menos a largo plazo porque solo calientan el agua que usas. Los de tanque mantienen agua caliente constantemente. Si usas mucha agua caliente, el tankless ahorra entre 20% y 30% al año.",
    },
    {
      question: "¿Cuánto dura un calentador de agua?",
      answer:
        "Un calentador de tanque dura 8-12 años con buen mantenimiento. Un tankless puede durar 15-20 años. La calidad del agua de Panamá (sedimentos) afecta la vida útil; el mantenimiento anual la prolonga.",
    },
    {
      question: "¿Reparan calentadores que dejaron de calentar?",
      answer:
        "Sí, reparamos calentadores eléctricos, a gas y tankless. Las fallas más comunes son: termostato, resistencia, válvula de gas y sensor. Diagnosticamos y damos cotización antes de reparar.",
    },
  ],
  "plomero-residencial": [
    {
      question: "¿Qué incluye el servicio de plomero residencial?",
      answer:
        "Incluye: reparación de fugas, destape de cañerías, cambio de grifería, instalación de inodoros y lavamanos, conexión de calentadores, mantenimiento preventivo y emergencias. Cubrimos todo el sistema hidráulico de tu hogar.",
    },
    {
      question: "¿Hacen visitas a domicilio sin costo?",
      answer:
        "La cotización inicial vía WhatsApp es gratis. La visita de evaluación al domicilio puede tener un costo de $15-25 que se descuenta del trabajo si decides contratarnos.",
    },
    {
      question: "¿Atienden apartamentos y edificios?",
      answer:
        "Sí, atendemos casas, apartamentos, edificios residenciales y PHs. Coordinamos con el administrador del edificio cuando sea necesario y respetamos las normas de cada PH.",
    },
    {
      question: "¿Dan garantía sobre el trabajo?",
      answer:
        "Sí, damos garantía sobre el trabajo realizado. La duración de la garantía depende del tipo de servicio: reparaciones tienen 30-90 días; instalaciones nuevas hasta 6 meses. Te lo confirmamos por escrito.",
    },
    {
      question: "¿Cómo agendo una visita?",
      answer:
        "Escríbenos por WhatsApp con la dirección y descripción del problema. Coordinamos hora el mismo día o al día siguiente según urgencia. Para emergencias, llamamos en lugar de agendar.",
    },
  ],
};

export const aboutFAQs: FAQ[] = [
  {
    question: "¿Desde cuándo opera Plomero Panamá 24h?",
    answer:
      "Plomero Panamá 24h opera desde 2024 brindando servicios profesionales de plomería en toda Ciudad de Panamá. Nuestro equipo combina experiencia técnica con disponibilidad 24 horas.",
  },
  {
    question: "¿Son una empresa registrada en Panamá?",
    answer:
      "Sí, operamos como negocio formal en Panamá. Cumplimos con las normas técnicas locales para plomería residencial y comercial.",
  },
  {
    question: "¿Por qué elegir un plomero local en Panamá?",
    answer:
      "Un plomero local conoce los sistemas hidráulicos típicos de Panamá, las normas de IDAAN, los materiales disponibles localmente y los problemas más comunes del clima panameño. Llega más rápido y entiende el contexto.",
  },
  {
    question: "¿Atienden tanto residencial como comercial?",
    answer:
      "Sí, atendemos casas, apartamentos, edificios residenciales, oficinas y locales comerciales pequeños. Para proyectos comerciales grandes, coordinamos con tu administrador o gerente de mantenimiento.",
  },
  {
    question: "¿Qué los diferencia de otros plomeros en Panamá?",
    answer:
      "Tres factores: disponibilidad real 24/7, cotización transparente sin sorpresas, y compromiso de llegar en 30-60 minutos según la zona. No cobramos por evaluación inicial vía WhatsApp.",
  },
];

export const pricingFAQs: FAQ[] = [
  {
    question: "¿Cuánto cobra un plomero en Panamá?",
    answer:
      "Un plomero en Panamá cobra entre $30 y $250 según el tipo de servicio. Destape simple: $30-80. Reparación de fuga: $50-150. Instalación de calentador: $100-250 más el equipo. Servicio nocturno tiene recargo.",
  },
  {
    question: "¿Por qué los precios de plomería varían tanto?",
    answer:
      "Los precios varían por: complejidad del problema, materiales necesarios, ubicación (Costa del Este es distinto a Panamá Oeste), horario (nocturno cuesta más) y tiempo de trabajo. Pide siempre cotización antes.",
  },
  {
    question: "¿Cobran por la cotización?",
    answer:
      "La cotización inicial vía WhatsApp es gratis. Una visita de evaluación al domicilio puede tener un costo simbólico ($15-25) que se descuenta del trabajo si decides contratarnos.",
  },
  {
    question: "¿Cómo evito que un plomero me cobre de más?",
    answer:
      "Pide cotización por escrito antes de empezar, compara con 2-3 plomeros, pregunta qué incluye (mano de obra, materiales, garantía), y desconfía de quien quiera empezar sin darte un estimado claro.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, tarjeta de crédito, transferencia bancaria y Yappy. El pago se coordina al finalizar el trabajo, una vez verifiques que todo quedó funcionando correctamente.",
  },
];

export const emergencyFAQs: FAQ[] = [
  {
    question: "¿Atienden emergencias de plomería en madrugada en Panamá?",
    answer:
      "Sí, atendemos emergencias 24 horas todos los días, incluyendo madrugadas, fines de semana y feriados. WhatsApp y teléfono activos siempre. Llegamos en 30-60 minutos según la zona.",
  },
  {
    question: "¿Cuánto cuesta un plomero de emergencia en Panamá?",
    answer:
      "Un plomero de emergencia en Panamá cuesta entre $50 y $200 según el problema. Hay un recargo del 20-50% para servicios nocturnos y de fin de semana. La cotización se da antes de empezar.",
  },
  {
    question: "¿Qué hago si revienta una tubería de noche?",
    answer:
      "Cierra la llave de paso principal de tu casa, retira muebles y aparatos eléctricos del agua, llama a un plomero 24h. Si hay riesgo eléctrico, baja el breaker general antes de intentar nada.",
  },
  {
    question: "¿Qué emergencias atienden con prioridad?",
    answer:
      "Priorizamos: tubería principal reventada, fuga incontrolable, sin agua total, inodoro desbordándose, fuga en calentador a gas. Estas emergencias reciben atención inmediata sobre trabajos programados.",
  },
];
