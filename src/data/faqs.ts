export type FAQ = {
  question: string;
  answer: string;
};

export const generalFAQs: FAQ[] = [
  {
    question: "¿Atienden emergencias de plomería en Panamá?",
    answer:
      "Sí, ofrecemos servicio de emergencias de plomería en Ciudad de Panamá. Para consultar disponibilidad inmediata escríbenos por WhatsApp con la descripción del problema y tu ubicación.",
  },
  {
    question: "¿Cuánto tarda un plomero en llegar?",
    answer:
      "El tiempo de llegada depende de la zona, el horario y la disponibilidad del momento. Para una estimación específica, escríbenos por WhatsApp con tu dirección y describimos disponibilidad inmediata.",
  },
  {
    question: "¿Cuánto cobra un plomero en Panamá?",
    answer:
      "El costo depende del tipo de servicio, la complejidad y los materiales. Damos cotización gratis sin compromiso vía WhatsApp; envíanos una descripción del problema con foto si es posible.",
  },
  {
    question: "¿Dan cotización antes de empezar el trabajo?",
    answer:
      "Sí, damos cotización gratis sin compromiso antes de empezar cualquier trabajo. La evaluación inicial es transparente y se entrega vía WhatsApp.",
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
        "El tiempo varía según la severidad y profundidad del taponamiento. Un destape simple suele resolverse rápido, mientras que un drenaje principal con hidrojet puede tomar más tiempo. Te confirmamos un estimado al evaluar el caso.",
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
      question: "¿Cuánto cuesta destapar una cañería?",
      answer:
        "El costo depende del método requerido (mecánico, hidrojet) y la complejidad del taponamiento. Te damos cotización gratis sin compromiso después de revisar la descripción del problema vía WhatsApp.",
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
      question: "¿Cuánto cuesta reparar una fuga de agua?",
      answer:
        "El costo depende del tipo de fuga (visible u oculta), la ubicación y los materiales necesarios. Las fugas ocultas que requieren detección con cámara o geófono cuestan más. Damos cotización gratis sin compromiso vía WhatsApp.",
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
      question: "¿Cuánto cuesta cambiar tuberías en una casa?",
      answer:
        "El costo varía según el tamaño de la casa, los materiales seleccionados y la dificultad del trabajo. Un cambio parcial es más económico que uno total. Damos cotización gratis sin compromiso después de evaluar el caso.",
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
        "El servicio fuera de horario regular puede tener un recargo sobre la tarifa normal. Te damos la cotización antes de empezar para que decidas si proceder.",
    },
    {
      question: "¿Cuánto tarda un plomero de emergencia en llegar?",
      answer:
        "El tiempo de llegada depende de la zona, el tráfico y la disponibilidad del momento. Confirmamos disponibilidad inmediata cuando recibimos tu WhatsApp con la dirección.",
    },
    {
      question: "¿Atienden emergencias fuera de horario?",
      answer:
        "Ofrecemos servicio de emergencias fuera de horario regular. Para consultar disponibilidad inmediata, escríbenos por WhatsApp con descripción del problema y tu ubicación.",
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
        "Para una familia de 4 personas en Panamá, un calentador eléctrico de 30-40 galones o un tankless de capacidad media es lo común. Si tienes conexión a gas, un calentador a gas es más eficiente a largo plazo. Asesoramos sobre la mejor opción según tu caso.",
    },
    {
      question: "¿Cuánto cuesta instalar un calentador?",
      answer:
        "El costo de instalación depende del tipo de calentador (eléctrico, a gas, tankless) y la complejidad de la conexión. El equipo se cotiza aparte. Damos cotización gratis sin compromiso vía WhatsApp.",
    },
    {
      question: "¿Cuál calentador consume menos electricidad?",
      answer:
        "Los calentadores tankless consumen menos a largo plazo porque solo calientan el agua que usas. Los de tanque mantienen agua caliente constantemente. Si usas mucha agua caliente, el tankless puede ahorrar significativamente al año.",
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
        "La cotización inicial vía WhatsApp es gratis. La visita de evaluación al domicilio puede tener un costo que se descuenta del trabajo si decides contratarnos. Lo confirmamos al coordinar la visita.",
    },
    {
      question: "¿Atienden apartamentos y edificios?",
      answer:
        "Sí, atendemos casas, apartamentos, edificios residenciales y PHs. Coordinamos con el administrador del edificio cuando sea necesario y respetamos las normas de cada PH.",
    },
    {
      question: "¿Dan garantía sobre el trabajo?",
      answer:
        "Sí, damos garantía sobre el trabajo realizado. La duración depende del tipo de servicio y se confirma por escrito en la cotización. La garantía cubre el trabajo realizado y no daños por mal uso posterior.",
    },
    {
      question: "¿Cómo agendo una visita?",
      answer:
        "Escríbenos por WhatsApp con la dirección y descripción del problema. Coordinamos hora según urgencia y disponibilidad. Para emergencias, llamamos en lugar de agendar.",
    },
  ],
};

export const aboutFAQs: FAQ[] = [
  {
    question: "¿Desde cuándo opera Plomero Panamá 24h?",
    answer:
      "Plomero Panamá 24h opera desde 2024 brindando servicios profesionales de plomería en Ciudad de Panamá. Nuestro equipo combina experiencia técnica con cotización transparente.",
  },
  {
    question: "¿Son una empresa registrada en Panamá?",
    answer:
      "Sí, operamos como negocio formal en Panamá. Cumplimos con las normas técnicas locales para plomería residencial y comercial.",
  },
  {
    question: "¿Por qué elegir un plomero local en Panamá?",
    answer:
      "Un plomero local conoce los sistemas hidráulicos típicos de Panamá, las normas de IDAAN, los materiales disponibles localmente y los problemas más comunes del clima panameño. Entiende mejor el contexto de cada caso.",
  },
  {
    question: "¿Atienden tanto residencial como comercial?",
    answer:
      "Sí, atendemos casas, apartamentos, edificios residenciales, oficinas y locales comerciales pequeños. Para proyectos comerciales grandes, coordinamos con tu administrador o gerente de mantenimiento.",
  },
  {
    question: "¿Qué los diferencia de otros plomeros en Panamá?",
    answer:
      "Cotización transparente sin sorpresas, comunicación clara vía WhatsApp y compromiso con el trabajo de calidad. No cobramos por evaluación inicial vía WhatsApp.",
  },
];

export const pricingFAQs: FAQ[] = [
  {
    question: "¿Cuánto cobra un plomero en Panamá?",
    answer:
      "El costo depende del tipo de servicio, la complejidad, los materiales y el horario. Damos cotización gratis sin compromiso vía WhatsApp; envíanos una descripción del problema con foto si es posible.",
  },
  {
    question: "¿Por qué los precios de plomería varían tanto?",
    answer:
      "Los precios varían por: complejidad del problema, materiales necesarios, ubicación, horario (nocturno cuesta más) y tiempo de trabajo. Pide siempre cotización antes de empezar cualquier trabajo.",
  },
  {
    question: "¿Cobran por la cotización?",
    answer:
      "La cotización inicial vía WhatsApp es gratis. Una visita de evaluación al domicilio puede tener un costo simbólico que se descuenta del trabajo si decides contratarnos.",
  },
  {
    question: "¿Cómo evito que un plomero me cobre de más?",
    answer:
      "Pide cotización por escrito antes de empezar, compara con varios plomeros, pregunta qué incluye (mano de obra, materiales, garantía), y desconfía de quien quiera empezar sin darte un estimado claro.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, tarjeta de crédito, transferencia bancaria y Yappy. El pago se coordina al finalizar el trabajo, una vez verifiques que todo quedó funcionando correctamente.",
  },
];

export const emergencyFAQs: FAQ[] = [
  {
    question: "¿Atienden emergencias de plomería fuera de horario en Panamá?",
    answer:
      "Sí, ofrecemos servicio de emergencias fuera de horario regular. Para consultar disponibilidad inmediata, escríbenos por WhatsApp con la descripción del problema y tu ubicación.",
  },
  {
    question: "¿Cuánto cuesta un plomero de emergencia?",
    answer:
      "El costo depende del problema, la zona y el horario. Hay un recargo posible para servicios nocturnos y de fin de semana. La cotización se da antes de empezar el trabajo.",
  },
  {
    question: "¿Qué hago si revienta una tubería de noche?",
    answer:
      "Cierra la llave de paso principal de tu casa, retira muebles y aparatos eléctricos del agua, llama a un plomero. Si hay riesgo eléctrico, baja el breaker general antes de intentar nada.",
  },
  {
    question: "¿Qué emergencias atienden con prioridad?",
    answer:
      "Priorizamos: tubería principal reventada, fuga incontrolable, sin agua total, inodoro desbordándose, fuga en calentador a gas. Estas emergencias reciben atención inmediata sobre trabajos programados.",
  },
];
