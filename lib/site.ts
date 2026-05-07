export const site = {
  name: "Meu Café",
  tagline: "Padaria artesanal · Café especial",
  foundedYear: 2010,
  url: "https://meucoffe.com.br",
  description:
    "Padaria artesanal com fermentação natural, café especial e atendimento caloroso no coração do bairro. Pães frescos todos os dias, doces de receita autoral e cafés selecionados.",
  whatsapp: "5511999999999",
  whatsappMessage:
    "Olá! Vim pelo site da Meu Café e gostaria de tirar uma dúvida.",
  phone: "(11) 99999-9999",
  phoneTel: "+5511999999999",
  email: "ola@meucoffe.com.br",
  instagram: "meucoffe",
  instagramUrl: "https://instagram.com/meucoffe",
  address: {
    street: "Rua das Flores, 123",
    neighborhood: "Centro",
    city: "São Paulo",
    state: "SP",
    zip: "01000-000",
    country: "BR",
    full: "Rua das Flores, 123 — Centro, São Paulo — SP",
    geo: { lat: -23.55052, lng: -46.633308 },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+das+Flores+123+Centro+S%C3%A3o+Paulo",
    embedUrl:
      "https://www.google.com/maps?q=-23.55052,-46.633308&hl=pt-BR&z=16&output=embed",
  },
  hours: [
    { day: "Segunda", short: "Seg", open: "06:00", close: "20:00", dow: 1 },
    { day: "Terça", short: "Ter", open: "06:00", close: "20:00", dow: 2 },
    { day: "Quarta", short: "Qua", open: "06:00", close: "20:00", dow: 3 },
    { day: "Quinta", short: "Qui", open: "06:00", close: "20:00", dow: 4 },
    { day: "Sexta", short: "Sex", open: "06:00", close: "20:00", dow: 5 },
    { day: "Sábado", short: "Sáb", open: "07:00", close: "20:00", dow: 6 },
    { day: "Domingo", short: "Dom", open: "07:00", close: "14:00", dow: 0 },
  ] as const,
  priceRange: "$$",
} as const;

export const whatsappLink = (msg = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
