import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Quote, Star } from 'lucide-react'
import { pixelFont } from '@/app/fonts'

export default function VozesPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <section className="relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7c9b6] via-[#f1dfd2] to-[#cdb4e6]" />
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)]" />
          <div className="relative mx-auto max-w-5xl text-center ">
            <h1 className={`${pixelFont.className} pt-16 uppercase text-2xl sm:text-3xl md:text-3xl tracking-[0.2em] text-foreground`}>
              Vozes da Comunidade
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-gray-700">
            Histórias, reflexões e conquistas de mulheres que  <br/> estão construindo o futuro da Web3
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Depoimentos
            </h2>
            <p className="text-center md:text-lg text-gray-700">
              Histórias reais de transformação e impacto
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  quote:
                    'Entrei na comunidade sem saber nada sobre Web3. Hoje, 6 meses depois, já desenvolvi meu primeiro smart contract e consegui minha primeira oportunidade como dev blockchain. A mentoria e o apoio foram fundamentais!',
                  author: 'Ana Paula Costa',
                  role: 'Desenvolvedora Blockchain',
                  img: '/images/dep/AnaPaulaCosta.jpg',
                },
                {
                  quote:
                    'Encontrei aqui as co-fundadoras da minha startup. Sem a comunidade Mulheres na Web3, meu projeto não teria saído do papel. É inspirador estar rodeada de mulheres tão talentosas.',
                  author: 'Camila Santos',
                  role: 'Fundadora de Startup Web3',
                  img: '/images/dep/camilaSantos.jpg',
                },
              ].map((d) => (
                <div key={d.author} className="rounded-2xl px-6 py-6 shadow-sm ring-1 ring-[#f5c9bd] bg-gradient-to-r from-[#fff3ea] via-white to-[#f3e7fb]">
                  <Quote className="h-8 w-8 text-secondary" />
                  <p className="mt-3 text-sm text-gray-700 italic">{d.quote}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Image src={d.img} alt={d.author} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{d.author}</div>
                      <div className="text-xs text-gray-600">{d.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                {
                  author: 'Juliana Ferreira',
                  role: 'Product Manager Web3',
                  quote:
                    'A rede de networking que construi aqui abriu portas que eu nem imaginava. Conheci outras mulheres incríveis e hoje trabalhamos juntas em projetos que estão mudando o ecossistema.',
                  img: '/images/dep/JulianaFerreira.jpg',
                },
                {
                  author: 'Beatriz Oliveira',
                  role: 'Designer UI/UX Web3',
                  quote:
                    'Como designer, sempre achei difícil entrar na Web3. A comunidade me mostrou que há espaço para todas as perfis. Hoje contribuo com design em vários projetos e me sinto parte de revolução.',
                  img: '/images/dep/BeatrizOliveira.jpg',
                },
                {
                  author: 'Renata Alves',
                  role: 'Educadora Web3',
                  quote:
                    'Vim buscar conhecimento e acabei me tornando educadora. A comunidade me deu confiança para compartilhar o que sei e ajudar outras mulheres a começarem na Web3.',
                  img: '/images/dep/RenataAlves.jpg',
                },
                {
                  author: 'Patrícia Lima',
                  role: 'Community Manager',
                  quote:
                    'Este é o lugar mais acolhedor que já encontrei na minha carreira. Não existe competição, existe colaboração. Me inspirei a contribuir, e todas se ajudam. É assim que mudamos o mundo da tecnologia!',
                  img: '/images/dep/PatriciaLima.jpg',
                },
              ].map((s) => (
                <div key={s.author} className="rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-gray-200">
                  <div className="flex items-center gap-3">
                    <Image src={s.img} alt={s.author} width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{s.author}</div>
                      <div className="text-xs text-gray-600">{s.role}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-gray-700">{s.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-background p-8 ring-1 ring-gray-200 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
                Textos e Reflexões
              </h2>
              <p className="mt-2 text-center md:text-lg text-gray-700">
                Pensamentos e análises da comunidade
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    badge: 'Reflexão',
                    title: 'Por que precisamos de mais mulheres na Web3',
                    desc: 'A diversidade não é apenas sobre números, é sobre perspectivas diferentes que levam a soluções melhores...',
                    author: 'Carolina Mendes',
                    date: '10 Jan 2026',
                  },
                  {
                    badge: 'História',
                    title: 'Minha jornada: de iniciante a desenvolvedora',
                    desc: 'Compartilho aqui os desafios e vitórias dos meus primeiros 3 meses estudando blockchain...',
                    author: 'Fernanda Rodrigues',
                    date: '8 Jan 2026',
                  },
                  {
                    badge: 'Análise',
                    title: 'O futuro da governança descentralizada',
                    desc: 'Como as DAOs estão transformando a forma como organizações tomam decisões...',
                    author: 'Mariana Souza',
                    date: '5 Jan 2026',
                  },
                ].map((a) => (
                  <div key={a.title} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 h-full flex flex-col">
                    <span className="inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[11px] font-medium bg-[#efe7ff] text-[#6f42c1]">{a.badge}</span>
                    <h3 className="mt-3 text-sm font-semibold text-foreground">{a.title}</h3>
                    <p className="mt-2 text-xs text-gray-700">{a.desc}</p>
                    <div className="mt-3 text-[11px] text-gray-600">{a.author} • {a.date}</div>
                    <div className="flex-1" />
                    <Link href="#" className="mt-4 inline-flex items-center justify-start text-secondary text-xs font-semibold">
                      Ler mais →
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="#" className="inline-flex items-center justify-center rounded-md bg-[#6f42c1] px-6 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#5b35a0]">
                  Compartilhar Sua História
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-2">
              <Star className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-1">
              Destaques da Semana
            </h2>
            <p className="text-center md:text-lg text-gray-700">
              Celebrando conquistas e marcos da comunidade
            </p>
            <div className="mt-8 space-y-4">
              {[
                { tag: 'Conquista', time: 'Há 3 dias', text: 'Larissa conquistou certificação Ethereum Developer' },
                { tag: 'Projeto', time: 'Há 3 dias', text: 'Equipe feminina vence hackathon ETHGlobal' },
                { tag: 'Oportunidade', time: 'Há 5 dias', text: '5 membros contratadas em empresas Web3' },
                { tag: 'Evento', time: 'Há 1 semana', text: 'Workshop de Smart Contracts reuniu 80 participantes' },
              ].map((d) => (
                <div key={d.text} className="rounded-2xl bg-gradient-to-r from-[#f9eef2] via-[#f6f1fb] to-[#f7f0ff] px-4 py-3 shadow-sm flex items-center gap-5">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-secondary to-[#ff7a3d] flex items-center justify-center shrink-0">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex rounded-full bg-[#ffe6d6] px-2 py-0.5 text-[10px] font-semibold text-[#f45920]">{d.tag}</span>
                      <span className="text-[10px] text-gray-600">{d.time}</span>
                    </div>
                    <div className="mt-2 text-[11px] font-bold text-foreground">{d.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



      </main>

      <Footer />
    </div>
  )
}
