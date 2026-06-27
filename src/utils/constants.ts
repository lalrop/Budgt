export const SITE_CONFIG = {
  name: 'Budgt',
  description: 'Tecnología e inteligencia para pequeños negocios de Chile',
  url: 'https://budgt.cl',
  phone: '+56997135470',
  phoneFormatted: '56997135470',
} as const;

export const WHATSAPP_MESSAGES = {
  general: 'Hola, quiero conocer más sobre los servicios de Budgt.',
  contenido: 'Hola, me interesa el servicio de Contenido que Trabaja de Budgt.',
  automatico: 'Hola, me interesa Tu Negocio en Automático de Budgt.',
  mercado: 'Hola, me interesa saber más sobre Inteligencia de Mercado de Budgt.',
  tis: 'Hola, me interesa conocer los servicios de Budgt TIS para trabajadoras independientes.',
  emprende: 'Hola, me interesa digitalizar mi negocio con Budgt Emprende.',
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONFIG.phoneFormatted}?text=${encodeURIComponent(message)}`;
}
