import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BookOpen, Award, FileText, Download } from 'lucide-react'
import { pixelFont } from '@/app/fonts'

export default function CrescerPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <section className="relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7c9b6] via-[#f1dfd2] to-[#cdb4e6]" />
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)]" />
          <div className="relative mx-auto max-w-5xl text-center ">
            <h1 className={`${pixelFont.className} pt-16 uppercase text-2xl sm:text-3xl md:text-3xl tracking-[0.2em] text-foreground`}>
              CRESCER
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-gray-700">
            Desenvolva suas habilidades, expanda seu conhecimento e <br/> torne-se uma expert em Web3
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Cursos e Trilhas de Aprendizado
            </h2>

            <p className="text-center md:text-lg text-gray-700">
              Programas estruturados para todos os níveis de conhecimento
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
              <div className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-200 h-full flex flex-col">
                <BookOpen className="h-7 w-7 text-secondary" />
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">Iniciante</span>
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">8 semanas</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Web3 do Zero</h3>
                <p className="mt-2 text-sm text-gray-600">Comece sua jornada na Web3 sem conhecimento prévio</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-foreground">Módulos:</p>
                  <ul className="mt-2 space-y-2">
                    {[
                      'Fundamentos de Blockchain',
                      'Criptomoedas e Wallets',
                      'NFTs e Tokens',
                      'DeFi Básico',
                    ].map((m) => (
                      <li key={m} className="flex items-center text-xs text-gray-700">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1" />
                <Link href="#" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-secondary px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90">
                  Começar Trilha
                </Link>
              </div>

              <div className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-200 h-full flex flex-col">
                <Award className="h-7 w-7 text-primary" />
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">Intermediário</span>
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">12 semanas</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Prática e Construção</h3>
                <p className="mt-2 text-sm text-gray-600">Desenvolva projetos reais e construa seu portfólio Web3.</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-foreground">Módulos:</p>
                  <ul className="mt-2 space-y-2">
                    {[
                      'Smart Contracts',
                      'Desenvolvimento Dapp',
                      'Solidity Avançado',
                      'Integração Web3',
                    ].map((m) => (
                      <li key={m} className="flex items-center text-xs text-gray-700">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1" />
                <Link href="#" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-secondary px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90">
                  Começar Trilha
                </Link>
              </div>

              <div className="rounded-2xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-200 h-full flex flex-col">
                <Award className="h-7 w-7 text-secondary" />
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">Avançado</span>
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">10 semanas</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">Liderança e Futuro</h3>
                <p className="mt-2 text-sm text-gray-600">Torne-se uma líder no ecossistema Web3.</p>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-foreground">Módulos:</p>
                  <ul className="mt-2 space-y-2">
                    {[
                      'Governança DAO',
                      'Tokenomics',
                      'Gestão de Comunidades',
                      'Web3 Business',
                    ].map((m) => (
                      <li key={m} className="flex items-center text-xs text-gray-700">
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1" />
                <Link href="#" className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-secondary px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90">
                  Começar Trilha
                </Link>
              </div>
            </div>

            <p className="mt-8 text-center text-xs text-gray-600">
              Todas as trilhas incluem certificado de conclusão e acesso vitalício ao conteúdo
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-background p-8 ring-1 ring-gray-200 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
                Conteúdos
              </h2>
              <p className="mt-2 text-center md:text-lg text-gray-700">
                Artigos, guias e recursos educativos criados pela comunidade
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 h-full flex flex-col">
                  <FileText className="h-6 w-6 text-secondary" />
                  <h3 className="mt-3 text-sm font-semibold text-foreground">Artigos</h3>
                <ul className="mt-3 space-y-2">
                    {[
                      'Como começar na Web3: Guia completo para iniciantes',
                      'Mulheres pioneiras em Blockchain',
                      'Oportunidades de carreira em Web3',
                      'Segurança e boas práticas em cripto',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="text-secondary">→</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                <div className="flex-1" />
                <Link href="#" className="mt-4 inline-flex items-center justify-center rounded-md border border-secondary px-6 py-2 text-xs font-semibold text-secondary transition hover:bg-secondary/10">
                    Ver Todos
                  </Link>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 h-full flex flex-col">
                  <FileText className="h-6 w-6 text-secondary" />
                  <h3 className="mt-3 text-sm font-semibold text-foreground">Guias Práticos</h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      'Como criar sua primeira wallet',
                      'Participando de uma DAO',
                      'Mintando seu primeiro NFT',
                      'Contribuindo para projetos open source',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="text-secondary">→</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                <div className="flex-1" />
                <Link href="#" className="mt-4 inline-flex items-center justify-center rounded-md border border-secondary px-6 py-2 text-xs font-semibold text-secondary transition hover:bg-secondary/10">
                    Ver Todos
                  </Link>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 h-full flex flex-col">
                  <FileText className="h-6 w-6 text-secondary" />
                  <h3 className="mt-3 text-sm font-semibold text-foreground">Vozes Educadoras</h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      'Podcast: Mulheres na Web3 Cast',
                      'Série de entrevistas com desenvolvedoras',
                      'Webinars mensais sobre temas atuais',
                      'AMA (Ask Me Anything) com especialistas',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="text-secondary">→</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                <div className="flex-1" />
                <Link href="#" className="mt-4 inline-flex items-center justify-center rounded-md border border-secondary px-6 py-2 text-xs font-semibold text-secondary transition hover:bg-secondary/10">
                    Ver Todos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Materiais Gratuitos
            </h2>
            <p className="text-center md:text-lg text-gray-700">
              Downloads gratuitos para acelerar seu aprendizado
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {[
                { tag: 'PDF', title: 'Glossário Web3', desc: 'Dicionário completo de termos em português' },
                { tag: 'Infográfico', title: 'Roadmap de Carreira', desc: 'Mapeamento de trilhas profissionais em Web3' },
                { tag: 'Documento', title: 'Lista de Recursos', desc: 'Curadoria de cursos, ferramentas e comunidades' },
                { tag: 'GitHub', title: 'Templates de Smart Contracts', desc: 'Códigos prontos para seus primeiros contratos' },
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <div className="flex items-center justify-between">
                    <Download className="h-6 w-6 text-primary" />
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{item.tag}</span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-xs text-gray-600">{item.desc}</p>
                  <Link href="#" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-primary/90">
                    Baixar Grátis
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-secondary/10 via-primary/10 to-primary/20 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-4 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-xs mt-1 text-gray-700">Alunas Formadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-xs mt-1 text-gray-700">Horas de Conteúdo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-xs mt-1 text-gray-700">Educadoras Ativas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-xs mt-1 text-gray-700">Taxa de Satisfação</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-primary via-[#7c3aed] to-secondary py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-white">
            <h3 className="text-base md:text-lg font-semibold">Comece sua jornada hoje</h3>
            <p className="mt-2 text-xs text-white/90">Escolha uma trilha e dê o primeiro passo rumo ao seu futuro na Web3</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-xs font-semibold text-primary shadow-sm transition hover:bg-white/90">
                Ver Trilhas
              </Link>
              <Link href="#" className="inline-flex items-center justify-center rounded-md border border-white px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-white/10">
                Baixar Materiais Grátis
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
