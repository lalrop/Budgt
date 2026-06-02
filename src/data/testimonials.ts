export interface Testimonial {
  name: string;
  role: string;
  text: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Camila R.',
    role: 'Dueña de tienda de ropa, Santiago',
    text: 'Antes dependía 100% del Instagram y los DMs me tenían saturada. Ahora el sitio capta clientes solos y el chatbot filtra los que van en serio.',
    initials: 'CR',
  },
  {
    name: 'Rodrigo M.',
    role: 'Proveedor de servicios, Concepción',
    text: 'En el primer mes ya aparecía en Google Maps cuando alguien buscaba mi servicio en la ciudad. Eso no lo había logrado en años.',
    initials: 'RM',
  },
  {
    name: 'Paula T.',
    role: 'Nutricionista, remota',
    text: 'Contraté el plan Básico y a los 3 meses hice el upgrade al Medio. Las consultas por el sitio ya superan a las que llegaban por Instagram.',
    initials: 'PT',
  },
];
