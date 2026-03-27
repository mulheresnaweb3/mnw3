'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Heart, Tag, TrendingUp, Wrench } from 'lucide-react'
import { pixelFont } from '@/app/fonts'
import NewsletterForm from '@/components/NewsletterForm'
import { COMMUNITY_LINK } from '@/constants/links'
import { communityEvents } from '@/lib/community-events'

export default function Home() {
  const today = new Date().toISOString().split('T')[0]
  const activeEvents = communityEvents.filter(e => !e.expiryDate || e.expiryDate >= today)

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />

      <main className="flex-grow pt-16">
        <section
          id="hero"
          className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-primary"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.png"
              alt="Mulher usando óculos de realidade virtual"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-secondary/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center text-white">
            <h1 className={`${pixelFont.className} uppercase text-2xl md:text-3xl lg:text-3xl leading-tight tracking-[0.2em] mb-6`}>
              VOCÊ PERTENCE
              <br />
              AO FUTURO.
            </h1>
            <p className="text-base md:text-lg mb-10">
              Movimento coletivo de mulheres na Web3
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-secondary px-8 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-secondary/40 transition hover:bg-secondary/90 rounded-lg"
              >
                Entrar na Comunidade
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1sl8pvCtSvfxuDadgLZKPHV51xq5gr-up/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/80 bg-white/90 px-8 py-3 text-sm md:text-base font-semibold text-primary shadow-sm transition hover:bg-white rounded-lg"
              >
                Conhecer o Movimento
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                O que é Mulheres na Web3?
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Somos um movimento coletivo que conecta, capacita e empodera
                mulheres no ecossistema Web3. Acreditamos que o futuro
                descentralizado será construído com diversidade, equidade e
                inclusão.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Você vai encontrar comunidade, conhecimento e oportunidades para
                fazer parte da revolução blockchain.
              </p>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/images/mulheresgrupo.png"
                  alt="Mulheres reunidas em torno de um computador"
                  width={640}
                  height={426}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-xl md:text-2xl font-semibold text-primary">
              Aqui, cada voz tem valor, cada história importa e cada mulher é <br /> 
              parte essencial do impacto que estamos construindo.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl rounded-3xl px-6 py-10 shadow-sm sm:px-10" style={{ backgroundColor: '#FFF0E8' }}>
            <div className="mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Por que existimos?
              </h2>
              <p className="mt-6 text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Existimos para criar um ecossistema seguro, diverso e colaborativo onde mulheres ocupam a tecnologia com voz, autonomia, educação e impacto real.
              </p>
            </div>
            {/* <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: '#FF7043' }}>
                  5%
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  das posições em Web3 são <br /> ocupadas por mulheres
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: '#7C3AED' }}>
                  85%
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  das mulheres relatam falta <br /> de mentoria na área
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: '#FF7043' }}>
                  100%
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  do nosso compromisso em <br /> mudar essa realidade
                </p>
              </div>
            </div> */}
          </div>
        </section>

        <section
          id="pertencer"
          className="bg-background py-20 md:py-24"
        >
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Nossos Pilares
            </h2>
            <p className="mt-4 text-gray-600">
              Três pilares fundamentais guiam nossa missão de transformar o
              ecossistema Web3.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div
                id="crescer"
                className="rounded-2xl bg-white px-6 py-8 text-left shadow-lg ring-1 ring-gray-100"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-secondary/10 p-3">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Pertencer
                </h3>
                <p className="text-sm text-gray-600">
                  Encontre sua tribo. Conecte-se com mulheres que compartilham
                  sua visão de futuro descentralizado.
                </p>
                <Link href="/pertencer" className="mt-4 inline-block text-sm font-semibold text-secondary rounded-lg hover:underline">
                  Saiba mais →
                </Link>
              </div>
              <div
                className="rounded-2xl bg-white px-6 py-8 text-left shadow-lg ring-1 ring-gray-100"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Crescer
                </h3>
                <p className="text-sm text-gray-600">
                  Desenvolva suas habilidades. Acesse cursos, trilhas de
                  aprendizado e conteúdos exclusivos.
                </p>
                <Link href="/crescer" className="mt-4 inline-block text-sm font-semibold text-secondary rounded-lg hover:underline">
                  Saiba mais →
                </Link>
              </div>
              <div
                id="construir"
                className="rounded-2xl bg-white px-6 py-8 text-left shadow-lg ring-1 ring-gray-100"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-secondary/10 p-3">
                  <Wrench className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Construir
                </h3>
                <p className="text-sm text-gray-600">
                  Transforme ideias em realidade. Participe de projetos,
                  hackathons e construa o futuro da Web3.
                </p>
                <Link href="/construir" className="mt-4 inline-block text-sm font-semibold text-secondary rounded-lg hover:underline">
                  Saiba mais →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Projetos em Destaque
              </h2>
              <p className="mt-3 text-gray-600">
                Iniciativas que estão transformando o ecossistema Web3.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-100">
                <span className="inline-flex rounded-full bg-accent/40 px-3 py-1 text-xs font-semibold text-secondary">
                  Educação
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Trilha Web3 do Zero
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Programa completo de formação para iniciantes na Web3.
                </p>
                <button className="mt-4 text-sm font-semibold text-secondary rounded-lg">
                  Ver detalhes →
                </button>
              </div>
              <div className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-100">
                <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-primary">
                  Evento
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Hackathon Mulheres na Web3
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Evento anual reunindo desenvolvedoras de todo o Brasil.
                </p>
                <button className="mt-4 text-sm font-semibold text-secondary rounded-lg">
                  Ver detalhes →
                </button>
              </div>
              <div className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-100">
                <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-secondary">
                  Governança
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  DAO Mulheres na Web3
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Governança descentralizada do movimento.
                </p>
                <button className="mt-4 text-sm font-semibold text-secondary rounded-lg">
                  Ver detalhes →
                </button>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section
          id="vozes"
          className="bg-secondary py-20 md:py-24"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 text-white md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Vozes da Comunidade
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                “Encontrei na comunidade Mulheres na Web3 não apenas conhecimento
                técnico, mas uma rede de apoio que transformou minha carreira.
                Hoje sou desenvolvedora blockchain e mentora de outras mulheres.”
              </p>
              <p className="text-sm font-semibold">
                — Mariana Silva, Desenvolvedora Blockchain
              </p>
              <Link href="/vozes" className="text-sm font-semibold text-white rounded-lg">
                  Saiba mais →
                </Link>
            </div>
            <div className="flex-1">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl bg-black">
                <Image
                  src="/images/vozes-blocks.jpg"
                  alt="Ilustração de blocos conectados"
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-gradient-to-b from-[#fbeae2] via-[#f3e7fb] to-[#eadcf7] py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Anúncios da Comunidade
            </h2>
            <p className="text-center md:text-lg text-gray-700">
              Fique por dentro das novidades e oportunidades
            </p>
            <div className="mt-8 space-y-4">
              {activeEvents.filter(e => e.isFeatured || e.type === 'anuncio').map((n) => (
                <Link href={n.link || '#'} key={n.title} target="_blank" className={`block rounded-2xl bg-white px-6 py-6 shadow-sm ring-2 ${n.color} transition hover:shadow-md`}>
                  <div className="flex items-start gap-4">
                    {n.image && (
                      <div className="shrink-0">
                        <Image
                          src={n.image}
                          alt={n.title}
                          width={80}
                          height={80}
                          className="rounded-xl object-cover h-20 w-20"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-semibold text-foreground">{n.title}</div>
                          <div className="text-[11px] text-gray-600 mt-1">{n.date}</div>
                        </div>
                        {n.type && (
                          <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-white">
                            {n.type}
                          </span>
                        )}
                      </div>
                      {n.description && (
                        <p className="mt-2 text-xs text-gray-600 line-clamp-2">{n.description}</p>
                      )}
                      {n.coupon && (
                        <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-[#FFF2EC] px-2 py-1 text-[10px] font-bold text-secondary ring-1 ring-secondary/20">
                          <Tag className="h-3 w-3" />
                          Cupom: {n.coupon}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center flex flex-col items-center">
              <p className="text-sm font-medium text-gray-700 mb-4">Quer receber anúncios em primeira mão?</p>
              <NewsletterForm />
            </div>
          </div>
        </section>
        
        <section
          id="calendario"
          className="bg-white py-20"
        >
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Junte-se a nós
            </h2>
            <p className="mt-4 text-gray-600">
              Faça parte do movimento que está construindo um futuro mais
              diverso e inclusivo na Web3.
            </p>
            <a
              href={COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-secondary px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md transition hover:bg-secondary/90 rounded-lg"
            >
              Começar agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
