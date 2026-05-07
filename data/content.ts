export type Diet = "vegano" | "sem-gluten" | "lactose-free" | "novo";

export type Category =
  | "paes"
  | "doces"
  | "salgados"
  | "cafes"
  | "bebidas"
  | "almoco";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  diet?: Diet[];
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  text: string;
  image: string;
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories: { id: Category; label: string }[] = [
  { id: "paes", label: "Pães" },
  { id: "doces", label: "Doces" },
  { id: "salgados", label: "Salgados" },
  { id: "cafes", label: "Cafés" },
  { id: "bebidas", label: "Bebidas" },
  { id: "almoco", label: "Almoço executivo" },
];

export const products: Product[] = [
  {
    id: "pao-fermentacao-natural",
    name: "Pão de fermentação natural",
    description:
      "Massa madre cultivada há 10 anos. Crosta crocante, miolo úmido e sabor profundo. Fermentação lenta de 24h.",
    price: 28,
    image: u("photo-1509440159596-0249088772ff"),
    category: "paes",
    featured: true,
    diet: ["vegano"],
  },
  {
    id: "croissant-manteiga",
    name: "Croissant de manteiga francesa",
    description:
      "81 camadas de massa folhada com manteiga Échiré. Folhas que se desfazem ao toque.",
    price: 14,
    image: u("photo-1555507036-ab1f4038808a"),
    category: "paes",
    featured: true,
  },
  {
    id: "espresso-bourbon",
    name: "Espresso Bourbon Amarelo",
    description:
      "Grão de Carmo de Minas, torra média. Notas de chocolate ao leite, caramelo e nozes.",
    price: 8,
    image: u("photo-1510707577719-ae7c14805e3a"),
    category: "cafes",
    featured: true,
  },
  {
    id: "bolo-do-dia",
    name: "Bolo do dia",
    description:
      "Receita autoral que muda diariamente. Hoje: bolo de fubá cremoso com goiabada.",
    price: 12,
    image: u("photo-1565299585323-38d6b0865b47"),
    category: "doces",
    featured: true,
    diet: ["novo"],
  },
  {
    id: "brioche-trancado",
    name: "Brioche trançado",
    description:
      "Massa enriquecida com manteiga e ovos caipiras. Doce na medida, perfeito para o café da manhã.",
    price: 22,
    image: u("photo-1568471173242-461f0a730452"),
    category: "paes",
    featured: true,
  },
  {
    id: "sanduiche-autoral",
    name: "Sanduíche da casa",
    description:
      "Pão sourdough, brie, geleia de figo da serra, rúcula e prosciutto curado por 18 meses.",
    price: 32,
    image: u("photo-1528735602780-2552fd46c7af"),
    category: "salgados",
    featured: true,
  },
  {
    id: "cookie-chocolate",
    name: "Cookie de chocolate belga",
    description:
      "Bordas crocantes, centro derretido. Três tipos de chocolate e flor de sal.",
    price: 9,
    image: u("photo-1499636136210-6f4ee915583e"),
    category: "doces",
  },
  {
    id: "cappuccino",
    name: "Cappuccino italiano",
    description:
      "Espresso, leite vaporizado em microespuma sedosa. Sem chocolate, à italiana.",
    price: 11,
    image: u("photo-1572442388796-11668a67e53d"),
    category: "cafes",
  },
];

export const allMenuItems: Product[] = [
  ...products,
  {
    id: "pao-frances",
    name: "Pão francês tradicional",
    description: "O clássico de cada manhã, fornadas a cada 30 minutos.",
    price: 1.5,
    image: u("photo-1586444248902-2f64eddc13df"),
    category: "paes",
  },
  {
    id: "pao-de-queijo",
    name: "Pão de queijo mineiro",
    description: "Polvilho azedo, queijo canastra meia cura. Servido quente.",
    price: 5,
    image: u("photo-1619985632461-f33748ef8ba7"),
    category: "salgados",
  },
  {
    id: "pao-integral",
    name: "Pão integral 100%",
    description: "Trigo integral orgânico moído na pedra. Sem açúcar.",
    price: 24,
    image: u("photo-1586444248879-bc604cbd555a"),
    category: "paes",
    diet: ["vegano"],
  },
  {
    id: "macaron",
    name: "Macarons sortidos",
    description: "Sabores da semana: pistache, framboesa, baunilha, café.",
    price: 7,
    image: u("photo-1569864358642-9d1684040f43"),
    category: "doces",
  },
  {
    id: "quiche-lorraine",
    name: "Quiche lorraine",
    description: "Massa amanteigada, bacon defumado, gruyère, creme fresco.",
    price: 18,
    image: u("photo-1565299507177-b0ac66763828"),
    category: "salgados",
  },
  {
    id: "filtrado",
    name: "Café filtrado V60",
    description: "Método pour-over, grão da semana. Notas frutadas.",
    price: 14,
    image: u("photo-1497935586351-b67a49e012bf"),
    category: "cafes",
  },
  {
    id: "chocolate-quente",
    name: "Chocolate quente clássico",
    description: "70% cacau, leite integral, raspas de chocolate por cima.",
    price: 16,
    image: u("photo-1542990253-0d0f5be5f0ed"),
    category: "bebidas",
  },
  {
    id: "limonada-suica",
    name: "Limonada suíça",
    description: "Limão tahiti com casca, leite condensado, hortelã.",
    price: 12,
    image: u("photo-1556679343-c7306c1976bc"),
    category: "bebidas",
  },
  {
    id: "almoco-do-dia",
    name: "Prato executivo",
    description:
      "Proteína do dia, arroz integral, mix de folhas, legumes assados, molho da casa.",
    price: 42,
    image: u("photo-1546069901-ba9599a7e63c"),
    category: "almoco",
    diet: ["novo"],
  },
  {
    id: "salada-bowl",
    name: "Bowl da horta",
    description:
      "Quinoa, grão de bico, abobrinha, beterraba, tahine, sementes torradas.",
    price: 38,
    image: u("photo-1512621776951-a57141f2eefd"),
    category: "almoco",
    diet: ["vegano"],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Carolina M.",
    role: "Cliente desde 2014",
    avatar: u("photo-1494790108377-be9c29b29330", 200),
    rating: 5,
    quote:
      "Aquele lugar onde você entra para comprar um pão e sai com a manhã inteira mais leve. O cheiro do café de manhã é a melhor parte do meu dia.",
  },
  {
    name: "Rafael T.",
    role: "Vizinho do bairro",
    avatar: u("photo-1500648767791-00dcc994a43e", 200),
    rating: 5,
    quote:
      "Trabalho aqui do lado e venho todo santo dia. O atendimento é familiar e o pão de fermentação natural é simplesmente o melhor da cidade.",
  },
  {
    name: "Beatriz S.",
    role: "Confeiteira",
    avatar: u("photo-1438761681033-6461ffad8d80", 200),
    rating: 5,
    quote:
      "Como profissional da área, reconheço técnica de verdade. Aqui tem alma — receitas tradicionais feitas com ingredientes excepcionais.",
  },
];

export const faq: FaqItem[] = [
  {
    q: "Posso reservar mesa?",
    a: "Atendemos por ordem de chegada, mas para grupos acima de 6 pessoas pedimos um aviso prévio pelo WhatsApp para te receber bem.",
  },
  {
    q: "Aceitam encomendas para festas e eventos?",
    a: "Aceitamos com 48h de antecedência. Bolos personalizados, kits de café da manhã, mesas de doces e coffee breaks corporativos. Solicite um orçamento na página de Encomendas — a retirada é sempre na loja, com horário combinado.",
  },
  {
    q: "Têm opções sem glúten ou veganas?",
    a: "Sim, mantemos uma seleção fixa de itens veganos e sem glúten todos os dias. Os itens com restrição alimentar estão marcados no cardápio do site, mas a vitrine real é maior do que essa seleção.",
  },
  {
    q: "Servem almoço?",
    a: "Servimos prato executivo de segunda a sexta, das 11h30 às 14h30. Cardápio rotativo semanal com opções vegetarianas. Vale a pena passar.",
  },
  {
    q: "Posso conhecer a casa antes de encomendar algo?",
    a: "Adoramos quando isso acontece. Passe no balcão, prove um café, conheça os produtos e a equipe. A maior parte das nossas encomendas começa numa visita.",
  },
  {
    q: "Os ingredientes são orgânicos?",
    a: "Trabalhamos com pequenos produtores locais e priorizamos ingredientes orgânicos sempre que possível. O trigo do nosso sourdough é integral orgânico moído na pedra.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Lucas Andrade",
    role: "Padeiro-chefe & sócio",
    bio: "12 anos refinando técnicas de fermentação natural. Aprendeu na Le Cordon Bleu Paris e voltou para casa com uma missão: trazer pão de verdade para o bairro.",
    photo: u("photo-1556157382-97eda2d62296", 600),
  },
  {
    name: "Mariana Costa",
    role: "Confeiteira",
    bio: "Apaixonada por sabores brasileiros reinterpretados. Cria receitas que misturam goiabada, cupuaçu e técnicas francesas clássicas.",
    photo: u("photo-1580489944761-15a19d654956", 600),
  },
  {
    name: "Henrique Silva",
    role: "Barista-chefe",
    bio: "Barista certificado SCA, 8 anos de balcão. Faz uma seleção semanal de grãos brasileiros de microlotes.",
    photo: u("photo-1560250097-0b93528c311a", 600),
  },
  {
    name: "Tereza Oliveira",
    role: "Atendimento",
    bio: "O sorriso e a memória da casa. Sabe o nome e o pedido habitual de cada cliente regular há 7 anos.",
    photo: u("photo-1573496359142-b8d87734a5a2", 600),
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "2010",
    title: "Onde tudo começou",
    text: "Lucas abriu uma vitrine de 20 metros quadrados na esquina, vendendo pães e bolos da receita da avó.",
    image: u("photo-1568254183919-78a4f43a2877", 800),
  },
  {
    year: "2014",
    title: "O forno a lenha",
    text: "Construímos nosso forno a lenha artesanal. A crosta dos pães nunca mais foi a mesma.",
    image: u("photo-1517686469429-8bdb88b9f907", 800),
  },
  {
    year: "2018",
    title: "Café especial chega à casa",
    text: "Henrique entrou para liderar o balcão de cafés. Curadoria de microlotes brasileiros tornou-se identidade.",
    image: u("photo-1495474472287-4d71bcdd2085", 800),
  },
  {
    year: "2022",
    title: "Reforma e expansão",
    text: "Dobramos o espaço, abrimos terraço com horta de ervas e mantivemos a alma do balcão original.",
    image: u("photo-1559925393-8be0ec4767c8", 800),
  },
  {
    year: "Hoje",
    title: "A casa que somos",
    text: "Mais de 200 pães por dia, 40 variedades de receita e a mesma promessa: fazer com calma e cuidado.",
    image: u("photo-1509042239860-f550ce710b93", 800),
  },
];

export const gallery = [
  u("photo-1509440159596-0249088772ff", 900),
  u("photo-1517686469429-8bdb88b9f907", 900),
  u("photo-1495474472287-4d71bcdd2085", 900),
  u("photo-1556157382-97eda2d62296", 900),
  u("photo-1568254183919-78a4f43a2877", 900),
  u("photo-1559925393-8be0ec4767c8", 900),
  u("photo-1509042239860-f550ce710b93", 900),
  u("photo-1555507036-ab1f4038808a", 900),
  u("photo-1572442388796-11668a67e53d", 900),
];

export const stats = [
  { value: 15, suffix: "+", label: "anos no bairro" },
  { value: 240, suffix: "", label: "pães por dia, frescos" },
  { value: 18, suffix: "", label: "variedades de café" },
];

export const heroImage = u("photo-1509440159596-0249088772ff", 1920);
export const aboutImage = u("photo-1556157382-97eda2d62296", 1400);
export const ctaImage = u("photo-1517686469429-8bdb88b9f907", 1600);
