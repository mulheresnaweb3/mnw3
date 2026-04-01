
export interface CommunityEvent {
  title: string
  date: string
  location?: string
  description?: string
  coupon?: string
  link?: string
  image?: string
  type: string
  badge?: string
  color?: string
  bg?: string
  isFeatured?: boolean
  time?: string
  spots?: string
  expiryDate?: string // Formato: YYYY-MM-DD
}

export const communityEvents: CommunityEvent[] = [
  {
    title: 'Web3Experts Brazil 2026',
    date: '26, 27 e 28 de junho de 2026',
    location: 'Oracle — São Paulo/SP',
    description: '3 dias intensos de conteúdo técnico, conexões estratégicas e networking de alto nível com profissionais que estão construindo o ecossistema Web3 no Brasil.',
    coupon: 'MW310',
    link: 'https://www.sympla.com.br/evento/web3experts-brazil-2026/3323454',
    image: '/images/events/events-web3.jpeg',
    type: 'evento',
    badge: 'Destaque',
    color: 'ring-primary',
    isFeatured: true,
    time: '',
    spots: '',
    expiryDate: '2026-06-29'
  },
  {
    title: 'SheFI Brazil',
    date: '07 de abril - 19 horas',
    location: 'Online',
    description: 'Tokenização de Ativos: Do Zero ao Entendimento. Mais do que teoria, essa conversa vai te ajudar a entender:\n- O que é tokenização de ativos na prática\n- Como bens do dia a dia — como imóveis e obras de arte — viram ativos digitais\n- Onde estão as oportunidades reais nesse mercado em crescimento',
    coupon: '',
    link: 'https://luma.com/5lvth3yt',
    image: '/images/events/SheFi.jpeg',
    type: 'Meetup',
    badge: 'Destaque',
    color: 'ring-primary',
    isFeatured: true,
    time: '',
    spots: '',
    expiryDate: '2026-04-08'
  },
  {
    title: 'Web3 SP',
    date: '11 de abril 2026 - 14h às 21h',
    location: 'Oracle — São Paulo/SP',
    description: 'O Web3 SP chega a São Paulo como um ponto de encontro para quem quer aprender, se conectar e explorar oportunidades reais no ecossistema Web3, reunindo conteúdo prático, networking e especialistas do mercado — com o apoio da Oracle e da Mulheres na Web3 ',
    coupon: '',
    link: 'https://luma.com/1ikdxopt',
    image: '/images/events/web3sp.jpeg',
    type: 'evento',
    badge: 'Destaque',
    color: 'ring-primary',
    isFeatured: true,
    time: '',
    spots: '',
    expiryDate: '2026-04-11'
  },

  // { 
  //   title: 'Parceria com Ethereum Foundation', 
  //   description: 'Temos o prazer de anunciar nossa nova parceria que trará grants e oportunidades para a comunidade!', 
  //   date: '8 Jan 2026', 
  //   badge: 'Comunicado', 
  //   color: 'ring-primary', 
  //   bg: 'bg-white',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg',
  //   expiryDate: '2026-12-31'
  // },
  // { 
  //   title: 'Inscrições abertas: Hackathon Mulheres na Web3 2026', 
  //   date: '12 Jan 2026', 
  //   badge: 'Urgente', 
  //   color: 'ring-secondary',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg',
  //   expiryDate: '2026-01-31'
  // },
  // { 
  //   title: 'Nova trilha de aprendizado: DeFi do Zero', 
  //   date: '11 Jan 2026', 
  //   color: 'ring-[#6f42c1]',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg',
  //   expiryDate: '2026-12-31'
  // },
  // { 
  //   title: 'Meetup presencial em São Paulo - 20/Jan', 
  //   date: '10 Jan 2026', 
  //   color: 'ring-primary',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg',
  //   expiryDate: '2026-01-21'
  // },
];
