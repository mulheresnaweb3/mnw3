import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Rocket, Users, BadgeCheck, Hammer, CheckCircle } from 'lucide-react'
import { pixelFont } from '@/app/fonts'

export default function ConstruirPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <section className="relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7c9b6] via-[#f1dfd2] to-[#cdb4e6]" />
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)]" />
          <div className="relative mx-auto max-w-5xl text-center ">
            <h1 className={`${pixelFont.className} pt-16 uppercase text-2xl sm:text-3xl md:text-3xl tracking-[0.2em] text-foreground`}>
              CONSTRUIR
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-gray-700">
            Transforme ideias em realidade. Participe de projetos, crie soluções e <br/> construa o futuro da Web3
            </p>
          </div>
        </section>

        {/* <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Projetos Ativos
            </h2>
            <p className="text-center md:text-lg text-gray-700">
              Iniciativas em andamento que você pode contribuir agora
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'DAO Mulheres na Web3',
                  desc: 'Governança descentralizada da comunidade com votação on-chain',
                  participants: '45 participantes',
                  tags: ['Snapshot', 'Aragon', 'Safe'],
                },
                {
                  title: 'NFT Collection: Pioneiras',
                  desc: 'Coleção de NFTs celebrando mulheres pioneiras em tecnologia',
                  participants: '12 participantes',
                  tags: ['Solidity', 'IPFS', 'OpenSea'],
                },
                {
                  title: 'Marketplace de Habilidades',
                  desc: 'Plataforma Web3 para conexão entre talentos femininos e oportunidades',
                  participants: '28 participantes',
                  tags: ['React', 'Ethers', 'The Graph'],
                },
              ].map((proj) => (
                <div key={proj.title} className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-200">
                  <div className="flex items-center justify-between">
                    <Rocket className="h-6 w-6 text-secondary" />
                    <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Em andamento</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{proj.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{proj.desc}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-700">
                    <Users className="h-4 w-4 text-secondary" />
                    <span>{proj.participants}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {proj.tags.map((t) => (
                      <span key={t} className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link href="#" className="mt-6 inline-flex items-center justify-center rounded-md bg-secondary px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90">
                    Participar do Projeto →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-background p-8 ring-1 ring-gray-200 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
                Projetos em Construção
              </h2>
              <p className="mt-2 text-center md:text-lg text-gray-700">
                Próximas iniciativas que estão sendo desenvolvidas
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  { badge: 'Prototipagem', title: 'Wallet Educacional', desc: 'Carteira digital focada em aprendizado para iniciantes' },
                  { badge: 'Planejamento', title: 'Token de Comunidade', desc: 'Token de governança e recompensas para membros ativos' },
                  { badge: 'Desenvolvimento', title: 'Plataforma de Mentoria', desc: 'Sistema de match entre mentoras e mentoradas' },
                ].map((p) => (
                  <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <div className="flex items-center gap-2">
                      <Hammer className="h-5 w-5 text-primary" />
                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{p.badge}</span>
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-xs text-gray-700">{p.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="#" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-primary/90">
                  Propor um Novo Projeto
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Nossos Resultados
            </h2>
            <p className="text-center md:text-lg text-gray-700">
              O impacto da comunidade em números
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {[
                { value: '12 Projetos', desc: 'Lançados pela comunidade' },
                { value: '200+ Mulheres', desc: 'Contribuíram em projetos' },
                { value: 'R$ 500k', desc: 'Em financiamento coletivo' },
                { value: '8 Parcerias', desc: 'Com empresas Web3' },
              ].map((m) => (
                <div key={m.value} className="rounded-2xl px-6 py-6 shadow-sm text-center ring-1 ring-gray-200 bg-gradient-to-b from-[#fff3ea] to-white">
                  <div className="text-lg font-bold text-secondary">{m.value}</div>
                  <div className="text-xs mt-2 text-gray-700">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="bg-gradient-to-b from-[#fbeae2] via-[#f3e7fb] to-[#eadcf7] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Ecossistema
            </h2>
            <p className="text-center md:text-lg text-gray-700">
              Empresas e organizações que apoiam nosso movimento
            </p>
            <div className="mt-8 flex justify-center">
              {[
                { 
                  name: 'Web3EduBrasil', 
                  sub: 'Impulsionando a Inovação na Web3',
                  logo: '/images/partner/web3edubrasil.png'
                },
              ].map((p) => (
                <div key={p.name} className="max-w-md w-full rounded-2xl bg-white px-6 py-5 shadow-sm ring-1 ring-gray-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {p.logo ? (
                      <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50/50 p-2">
                        <Image
                          src={p.logo}
                          alt={p.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <BadgeCheck className="h-12 w-12 text-secondary flex-shrink-0" />
                    )}
                    <div>
                      <div className="text-sm font-semibold text-foreground">{p.name}</div>
                      <div className="text-xs text-gray-600">{p.sub}</div>
                    </div>
                  </div>
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                </div>
              ))}
            </div>
            <div className="mt-10">
              <div className="rounded-2xl bg-white px-6 py-8 shadow-sm ring-1 ring-gray-100 text-center">
                <h3 className="text-sm font-semibold text-foreground">Seja uma Parceira</h3>
                <p className="mt-2 text-xs text-gray-700">
                  Sua empresa quer apoiar a diversidade e inclusão na Web3? Entre em contato para conhecer nossas
                  oportunidades de parceria e patrocínio.
                </p>
                <Link href="/contato" className="mt-6 inline-flex items-center justify-center rounded-md bg-secondary px-6 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90">
                  Falar com a Equipe
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Governança
            </h2>
            <p className="text-center md:text-lg text-gray-700">
              Decisões coletivas, transparentes e descentralizadas
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                { title: 'Propostas Abertas', desc: 'Qualquer membro pode propor iniciativas, mudanças ou projetos' },
                { title: 'Votação Transparente', desc: 'Decisões importantes passam por votação da comunidade' },
                { title: 'Grupos de Trabalho', desc: 'Equipes autogeridas focadas em áreas específicas' },
                { title: 'Estrutura DAO-Ready', desc: 'Preparadas para transição completa para governança descentralizada' },
              ].map((g) => (
                <div key={g.title} className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-100 flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{g.title}</div>
                    <div className="text-xs text-gray-700 mt-1">{g.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-8 ring-1 ring-gray-200 bg-gradient-to-r from-[#fff3ea] via-[#f7f0fb] to-[#f4e9ff]">
              <h3 className="text-base md:text-lg font-semibold text-center text-foreground">
                Como Participar da Governança
              </h3>
              <p className="mt-2 text-center text-xs md:text-sm text-gray-700">
                Toda membro ativa da comunidade pode participar das decisões. Saiba como:
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  { n: '1', t: 'Participe das discussões no Discord' },
                  { n: '2', t: 'Vote nas propostas ativas' },
                  { n: '3', t: 'Proponha suas próprias ideias' },
                ].map((s) => (
                  <div key={s.n} className="rounded-xl bg-white px-6 py-5 text-center shadow-sm ring-1 ring-gray-200">
                    <div className="text-base md:text-lg font-bold text-secondary">{s.n}</div>
                    <div className="mt-2 text-xs text-gray-700">{s.t}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="#" className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90">
                  Ver Propostas Ativas
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-gradient-to-r from-secondary via-[#ff7a3d] to-primary py-20 mb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-white">
            <h3 className="text-base md:text-lg font-semibold">Pronta para construir?</h3>
            <p className="mt-2 text-xs text-white/90">Escolha um projeto e comece a contribuir hoje mesmo</p>
            <div className="mt-6 flex justify-center gap-3">
              {/* <Link href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-xs font-semibold text-primary shadow-sm transition hover:bg-white/90">
                Ver Projetos Ativos
              </Link> */}
              <a 
                href="https://forms.gle/6GSCBSZHPGLEeg6r7" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-white px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-white/10"
              >
                Propor um Projeto
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
