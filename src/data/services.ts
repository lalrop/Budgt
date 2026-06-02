export interface Plan {
  id: string;
  name: string;
  tagline: string;
  setupPrice: string;
  monthlyPrice: string | null;
  featured: boolean;
  badge?: string;
  includes: string[];
  cta: string;
  href: string;
}

export const PHONE = '56997135470';

export function waLink(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Presencia Digital',
    tagline: 'Deja de ser invisible en Google',
    setupPrice: '$299.000',
    monthlyPrice: null,
    featured: false,
    includes: [
      'Sitio web profesional (5 páginas) en Astro',
      'Diseño responsivo adaptado a tu marca',
      'Google Business Profile optimizado',
      'SEO on-page: meta tags, sitemap, robots.txt',
      'Botón WhatsApp con mensaje predefinido',
      'Formulario de contacto integrado',
      'Deploy configurado en Netlify/Vercel',
      'Entrega en 7–10 días hábiles',
    ],
    cta: 'Quiero mi sitio web',
    href: '/presencia-digital',
  },
  {
    id: 'medio',
    name: 'Negocio en Línea',
    tagline: 'Capta clientes mientras duermes',
    setupPrice: '$599.000',
    monthlyPrice: '$149.000/mes',
    featured: true,
    badge: 'Más popular',
    includes: [
      'Todo lo del plan Básico',
      'Sitio extendido (hasta 10 páginas + blog)',
      'SEO avanzado: link building + 1 artículo/mes',
      'GEO: directorios locales relevantes',
      'Chatbot WhatsApp (respuestas automáticas a FAQs)',
      'Integración con CRM (HubSpot Free o Notion)',
      'Google Analytics 4 + Search Console configurado',
      'Reporte mensual de métricas',
      '1 ronda de ajustes al sitio por mes',
    ],
    cta: 'Quiero captar más clientes',
    href: '/negocio-en-linea',
  },
  {
    id: 'avanzado',
    name: 'Sistema de Conversión',
    tagline: 'Ventas automáticas con IA',
    setupPrice: '$1.199.000',
    monthlyPrice: '$349.000/mes',
    featured: false,
    badge: 'Máximo impacto',
    includes: [
      'Todo lo del plan Medio',
      'Landing pages de conversión + A/B testing',
      'Chatbot IA (GPT-4o) que califica leads 24/7',
      'Funnel de ventas automatizado',
      'Email marketing automatizado (Brevo/Mailchimp)',
      'Google Ads básico gestionado',
      'Análisis mensual de 2 competidores',
      'Soporte prioritario (respuesta < 24h)',
      '2 rondas de ajustes/mes + optimización trimestral',
    ],
    cta: 'Quiero vender en automático',
    href: '/sistema-conversion',
  },
];
