
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
    spots: ''
  },
  // { 
  //   title: 'Novo Discord Server Lançado', 
  //   description: 'Migramos para um servidor Discord mais robusto com canais organizados por tópicos. Faça seu cadastro novamente!', 
  //   date: '10 Jan 2026', 
  //   badge: 'Comunicado', 
  //   color: 'ring-secondary', 
  //   bg: 'bg-[#fff2ec]',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg'
  // },
  // { 
  //   title: 'Chamada para Mentoras Voluntárias', 
  //   description: 'Estamos buscando mulheres com experiência em Web3 para mentorar iniciantes. Se você tem pelo menos 1 ano de experiência, candidate-se!', 
  //   date: '9 Jan 2026', 
  //   badge: 'Convite', 
  //   color: 'ring-primary', 
  //   bg: 'bg-white',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg'
  // },
  // { 
  //   title: 'Parceria com Ethereum Foundation', 
  //   description: 'Temos o prazer de anunciar nossa nova parceria que trará grants e oportunidades para a comunidade!', 
  //   date: '8 Jan 2026', 
  //   badge: 'Comunicado', 
  //   color: 'ring-primary', 
  //   bg: 'bg-white',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg'
  // },
  // { 
  //   title: 'Inscrições abertas: Hackathon Mulheres na Web3 2026', 
  //   date: '12 Jan 2026', 
  //   badge: 'Urgente', 
  //   color: 'ring-secondary',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg'
  // },
  // { 
  //   title: 'Nova trilha de aprendizado: DeFi do Zero', 
  //   date: '11 Jan 2026', 
  //   color: 'ring-[#6f42c1]',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg'
  // },
  // { 
  //   title: 'Meetup presencial em São Paulo - 20/Jan', 
  //   date: '10 Jan 2026', 
  //   color: 'ring-primary',
  //   type: 'anuncio',
  //   image: '/images/events/events-web3.jpeg'
  // },
];
