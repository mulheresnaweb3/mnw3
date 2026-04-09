'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar as CalendarIcon, Clock, MapPin, Users, Wrench, Trophy } from 'lucide-react'
import { pixelFont } from '@/app/fonts'
import NewsletterForm from '@/components/NewsletterForm'
import { communityEvents } from '@/lib/community-events'

export default function CalendarioPage() {
  const now = new Date().toISOString()
  
  const activeEvents = [...communityEvents]
    .filter(e => !e.expiryDate || e.expiryDate >= now)
    .sort((a, b) => {
      const dateA = a.expiryDate || '9999-12-31T23:59:59'
      const dateB = b.expiryDate || '9999-12-31T23:59:59'
      return dateA.localeCompare(dateB)
    })

  const expiredEvents = [...communityEvents]
    .filter(e => e.expiryDate && e.expiryDate < now)
    .sort((a, b) => {
      const dateA = a.expiryDate || '0000-00-00T00:00:00'
      const dateB = b.expiryDate || '0000-00-00T00:00:00'
      return dateB.localeCompare(dateA) // Descendente: mais novos primeiro
    })

  const allEvents = [...activeEvents, ...expiredEvents]

  return (
    <div className="min-h-screen font-sans flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <section className="relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7c9b6] via-[#f1dfd2] to-[#cdb4e6]" />
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)]" />
          <div className="relative mx-auto max-w-5xl text-center ">
            <h1 className={`${pixelFont.className} pt-16 uppercase text-2xl sm:text-3xl md:text-3xl tracking-[0.2em] text-foreground`}>
            Calendário
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-gray-700">
            Fique por dentro de todos os eventos, <br/> workshops e comunicados da comunidade
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Próximos Eventos
            </h2>
            <p className="text-center md:text-lg text-gray-700">
              Não perca as próximas oportunidades de aprendizado e networking
            </p>
            <div className="mt-10 flex justify-center">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
                {allEvents.filter(e => e.type !== 'anuncio').map((e) => {
                  const isExpired = e.expiryDate && e.expiryDate < now;
                  return (
                    <div key={e.title} className={`relative rounded-2xl bg-white px-6 py-6 shadow-lg ring-2 ${isExpired ? 'ring-gray-300' : 'ring-secondary'} h-full min-h-[300px] flex flex-col ${isExpired ? 'grayscale opacity-70 cursor-not-allowed' : ''}`}>
                      {isExpired && (
                        <div className="absolute inset-0 z-20 rounded-2xl bg-gray-200/40 flex items-center justify-center pointer-events-none">
                          <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest opacity-90">
                            Encerrado
                          </span>
                        </div>
                      )}
                      {e.image && <div className="relative h-64 w-full mb-4"><Image src={e.image} alt={e.title} fill className="rounded-xl object-cover" /></div>}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center rounded-full ${isExpired ? 'bg-gray-200 text-gray-600' : 'bg-secondary/10 text-secondary'} px-3 py-1 text-xs font-semibold`}>
                          {e.type === 'Workshop' && <Wrench className="mr-1.5 h-3 w-3" />}
                          {(e.type === 'evento' || e.type === 'Evento') && <CalendarIcon className="mr-1.5 h-3 w-3" />}
                          {e.type === 'Hackathon' && <Trophy className="mr-1.5 h-3 w-3" />}
                          {e.type.charAt(0).toUpperCase() + e.type.slice(1)}
                        </span>
                        {e.badge && <span className={`inline-flex rounded-full ${isExpired ? 'bg-gray-400' : 'bg-secondary'} px-3 py-1 text-[11px] font-semibold text-white`}>{e.badge}</span>}
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-foreground">{e.title}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className={`inline-flex items-center rounded-full ${isExpired ? 'bg-gray-100 text-gray-500' : 'bg-[#ffe6d6] text-[#f45920]'} px-3 py-1 text-[11px] font-semibold ring-1 ${isExpired ? 'ring-gray-200' : 'ring-[#f45920]/20'}`}>
                          <CalendarIcon className="mr-1.5 h-3 w-3" />
                          {e.date}
                        </span>
                        {e.time && <span className={`inline-flex items-center rounded-full ${isExpired ? 'bg-gray-100 text-gray-500' : 'bg-[#ffe6d6] text-[#f45920]'} px-3 py-1 text-[11px] font-semibold ring-1 ${isExpired ? 'ring-gray-200' : 'ring-[#f45920]/20'}`}>
                          <Clock className="mr-1.5 h-3 w-3" />
                          {e.time}
                        </span>}
                        <span className={`inline-flex items-center rounded-full ${isExpired ? 'bg-gray-100 text-gray-500' : 'bg-[#ffe6d6] text-[#f45920]'} px-3 py-1 text-[11px] font-semibold ring-1 ${isExpired ? 'ring-gray-200' : 'ring-[#f45920]/20'}`}>
                          <MapPin className="mr-1.5 h-3 w-3" />
                          {e.location}
                        </span>
                        {e.spots && <span className={`inline-flex items-center rounded-full ${isExpired ? 'bg-gray-100 text-gray-500' : 'bg-[#ffe6d6] text-[#f45920]'} px-3 py-1 text-[11px] font-semibold ring-1 ${isExpired ? 'ring-gray-200' : 'ring-[#f45920]/20'}`}>
                          <Users className="mr-1.5 h-3 w-3" />
                          {e.spots}
                        </span>}
                      </div>
                      {e.description && (
                        <p className="mt-4 text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                          {e.description}
                        </p>
                      )}
                      {e.coupon && <div className="mt-4 text-sm font-semibold">Cupom de 10% de desconto: <span className={isExpired ? 'text-gray-500' : 'text-secondary'}>{e.coupon}</span></div>}
                      <div className="flex-1" />
                      {isExpired ? (
                        <div className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-400 px-6 py-3 text-xs font-semibold text-white shadow-sm cursor-not-allowed">
                          Evento Encerrado
                        </div>
                      ) : (
                        <Link href={e.link || '#'} target="_blank" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-secondary px-6 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90">
                          {e.link ? 'Garanta sua vaga' : 'Ver detalhes'}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-background p-8 ring-1 ring-gray-200 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
                Próximos Meses
              </h2>
              <p className="mt-2 text-center md:text-lg text-gray-700">
                Prepare-se para os eventos que estão por vir
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-lg font-semibold text-secondary">Fevereiro 2026</h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      'Curso: Web3 do Zero – Turma 5',
                      'Workshop: NFTs na Prática',
                      'Meetup – Rio de Janeiro',
                    ].map((t) => (
                      <li key={t} className="flex items-center text-xs text-gray-700">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#6f42c1]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-lg font-semibold text-secondary">Março 2026</h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      'Conferência Mulheres na Web3 2026',
                      'Hackathon Global',
                      'Série de Workshops: DAOs',
                    ].map((t) => (
                      <li key={t} className="flex items-center text-xs text-gray-700">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#6f42c1]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xs text-gray-700">Quer adicionar nossos eventos ao seu calendário?</p>
                <Link href="#" className="mt-4 inline-flex items-center justify-center rounded-full bg-[#6f42c1] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#5b35a0]">
                  Sincronizar com Google Calendar
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
              Avisos e Recados
            </h2>
            <p className="mt-2 text-center md:text-lg text-gray-700">
              Comunicados importantes da comunidade
            </p>
            <div className="mt-8 space-y-4">
              {allEvents.filter(e => e.type === 'anuncio').map((n) => {
                const isExpired = n.expiryDate && n.expiryDate < now;
                return (
                  <div key={n.title} className={`relative rounded-2xl ${n.bg || 'bg-white'} px-6 py-6 shadow-sm ring-2 ${isExpired ? 'ring-gray-300 grayscale opacity-60' : (n.color || 'ring-primary')}`}>
                    {isExpired && (
                      <div className="absolute inset-0 z-10 rounded-2xl bg-gray-200/20 pointer-events-none" />
                    )}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {n.badge && (
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${isExpired ? 'bg-gray-400' : (n.badge === 'Convite' ? 'bg-primary text-white' : 'bg-secondary text-white')}`}
                          >
                            {n.badge}
                          </span>
                        )}
                        {isExpired && <span className="inline-flex rounded-full bg-gray-800 text-white px-2 py-0.5 text-[10px] font-bold uppercase">Expirado</span>}
                      </div>
                      <div className="text-[11px] text-gray-600">{n.date}</div>
                    </div>
                    <div className="mt-3 text-sm font-semibold text-foreground">{n.title}</div>
                    {n.description && (
                      <p className="mt-2 text-xs text-gray-700 whitespace-pre-line leading-relaxed">
                        {n.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 mb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 bg-gradient-to-r from-[#fdebe4] via-[#f3e7fb] to-[#eadcf7]">
              <h3 className="text-base md:text-lg font-semibold text-center text-foreground">
                Receba atualizações em tempo real
              </h3>
              <p className="mt-2 text-center text-xs md:text-sm text-gray-700">
                Se cadastre em nossa newsletter para não perder nenhum aviso ou oportunidade.
              </p>
              <div className="mt-8 flex justify-center">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>       

      </main>

      <Footer />
    </div>
  )
}