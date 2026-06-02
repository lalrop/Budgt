export interface FAQItem {
  q: string;
  a: string;
}

export const faqGeneral: FAQItem[] = [
  {
    q: '¿Cuánto tiempo tarda en estar listo mi sitio web?',
    a: 'El plan Básico se entrega en 1–3 días hábiles. Los planes Medio y Avanzado demoran entre 5 y 10 días hábiles por la configuración adicional de automatizaciones.',
  },
  {
    q: '¿Necesito saber programar para mantener el sitio?',
    a: 'No. Te entregamos todo configurado y, en los planes Medio y Avanzado, nosotros nos encargamos del mantenimiento mensual.',
  },
  {
    q: '¿Puedo cambiar de plan más adelante?',
    a: 'Sí. Puedes hacer upgrade en cualquier momento. El valor del setup que ya pagaste se descuenta del nuevo setup.',
  },
  {
    q: '¿Qué pasa si no quiero seguir con la mensualidad?',
    a: 'El sitio es tuyo. Si cancelas, te entregamos acceso completo al código y al hosting. Solo dejas de recibir optimización SEO, reportes y soporte.',
  },
  {
    q: '¿Por qué Astro y no WordPress?',
    a: 'Astro genera sitios estáticos ultrarrápidos que cargan en menos de 1 segundo, lo que mejora el SEO y la experiencia del usuario. WordPress es más lento por defecto y requiere actualizaciones de seguridad constantes.',
  },
  {
    q: '¿Incluye el dominio y el hosting?',
    a: 'El hosting en Netlify/Vercel es gratuito y lo configuramos por ti. El dominio (.cl o .com) tiene un costo anual de aproximadamente $15 USD que contratas directamente, o te ayudamos a gestionarlo.',
  },
];

export const faqAvanzado: FAQItem[] = [
  {
    q: '¿Cómo funciona el chatbot con IA?',
    a: 'Usamos la API de OpenAI integrada con WhatsApp Business. El chatbot responde preguntas frecuentes, califica si el prospecto es apto, agenda reuniones y solo transfiere a ti cuando es un lead calificado.',
  },
  {
    q: '¿Qué presupuesto necesito para Google Ads?',
    a: 'La gestión de campaña está incluida en la mensualidad. El presupuesto de pauta (lo que le pagas a Google) va por tu cuenta; recomendamos partir con $100–200 USD/mes.',
  },
];
