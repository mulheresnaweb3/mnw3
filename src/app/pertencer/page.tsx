import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Target, Zap, Check, ArrowRight, Linkedin } from 'lucide-react'
import { pixelFont } from '@/app/fonts'
import { COMMUNITY_LINK } from '@/constants/links'

const teamMembers = [
  {
    name: "Sonia Batista",
    bio: "Mais de 25 anos de experiência em desenvolvimento de software. Especialista em Smart Contract e MVP de projetos Web3. Palestrante em eventos de Web3 e Blockchain.",
    image: "/images/team/sonia.png",
    linkedin: "https://www.linkedin.com/in/soniamarabatista/"
  },
  {
    name: "Valéria Oliveira",
    bio: "Graduada em Marketing Digital e pós-graduanda em UX e Design de Produtos Digitais. Vice-presidente da Web3EduBrasil, atua simplificando linguagens técnicas para ampliar oportunidades e fortalecer o protagonismo feminino na Web3.",
    image: "/images/team/valeria.png",
    linkedin: "https://www.linkedin.com/in/oliveiravaléria/"
  },
  {
    name: "Mariana Weber",
    bio: "UX & Product Designer com 8+ anos de experiência em produtos digitais. Atua com UX, Product Design, Service Design e Design Systems, criando experiências centradas no usuário para SaaS, B2C e AI products.",
    image: "/images/team/mari.png",
    linkedin: "https://www.linkedin.com/in/marianapweber/"
  },
  {
    name: "Gabriela Fortunato",
    bio: "Farmacêutica, pós-graduada em Farmácia Estética, com experiência em terapias injetáveis, no SUS e background em tecnologia. Atua no ecossistema de tecnologia, com participação em eventos de blockchain, Web3 e startups. Estuda Inteligência Artificial e comunidades. Acredita na força do 'nós' para gerar impacto real através das comunidades.",
    image: "/images/team/gabi.png",
    linkedin: "https://www.linkedin.com/in/gabriela-boaventura-fortunato-0b3063144/"
  }
];

export default function PertencerPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Topo / Hero */}
        <section className="relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7c9b6] via-[#f1dfd2] to-[#cdb4e6]" />
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)]" />
          <div className="relative mx-auto max-w-5xl text-center ">
            <h1 className={`${pixelFont.className} pt-16 uppercase text-2xl sm:text-3xl md:text-3xl tracking-[0.2em] text-foreground`}>
              PERTENCER
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-gray-700">
              Encontre sua comunidade. Compartilhe valores. Construa o futuro junto com <br />
              mulheres que acreditam na Web3.
            </p>
          </div>
        </section>

        {/* Nosso Manifesto Section */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-center mb-6">
              Nosso Manifesto
            </h2>
            <blockquote className="text-sm md:text-base italic text-gray-600 text-center mb-8">
              &ldquo;Acreditamos em um futuro descentralizado construído com equidade, diversidade e inclusão.&rdquo;
            </blockquote>
            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
              Somos mulheres que acreditamos no potencial transformador da tecnologia blockchain. Reconhecemos que a Web3 representa mais do que uma evolução tecnológica: é uma oportunidade de redesenhar sistemas, criar novas economias e democratizar o acesso ao poder.
              </p>
              <p>
              Mas também sabemos que, sem diversidade, o futuro descentralizado reproduzirá as mesmas exclusões do passado. Por isso, nos unimos. Criamos espaços seguros de aprendizado, compartilhamos oportunidades e amplificamos vozes que historicamente foram silenciadas.
              </p>
              <p className="text-secondary text-xl md:text-2xl font-semibold text-center py-4">
                Você pertence ao futuro. E o futuro é construído por nós.
              </p>
              <p>
              Convidamos todas as mulheres - desenvolvedoras, designers, empreendedoras, educadoras, curiosas - a se juntarem a nós. Juntas, estamos construindo um ecossistema Web3 mais justo, acessível e representativo.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa Essência Section */}
        <section className="bg-background py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Nossa Essência
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                Os valores e princípios que nos guiam
              </p>
            </div>

            <div className="mx-auto max-w-5xl rounded-2xl bg-white/70 px-6 py-10 shadow-sm ring-1 ring-black/5 sm:px-10">
              <div className="text-center">
                <h3 className="text-sm font-semibold text-foreground">Valores</h3>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-secondary/10 p-3">
                    <Heart className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">Inclusão</h4>
                  <p className="mt-2 text-xs text-gray-600">
                    Acreditamos que todas as mulheres têm espaço, independente de background técnico.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">Colaboração</h4>
                  <p className="mt-2 text-xs text-gray-600">
                    Crescemos juntas, compartilhando conhecimento e oportunidades.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-secondary/10 p-3">
                    <Target className="h-5 w-5 text-secondary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">Transparência</h4>
                  <p className="mt-2 text-xs text-gray-600">
                    Operamos de forma aberta, com governança participativa e decisões coletivas.
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md ring-1 ring-black/5">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">Inovação</h4>
                  <p className="mt-2 text-xs text-gray-600">
                    Exploramos novas possibilidades e construímos o futuro descentralizado.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <h3 className="text-sm font-semibold text-foreground">Princípios</h3>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-x-12">
                {[
                  'Respeito mútuo e escuta ativa',
                  'Compromisso com a diversidade e equidade',
                  'Educação contínua e compartilhamento de conhecimento',
                  'Apoio mútuo e mentoria',
                  'Autonomia e protagonismo',
                  'Ética e responsabilidade',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <p className="text-xs md:text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quem Somos Section */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-foreground mb-16">
              Quem Somos
            </h2>

            {/* <div className="grid gap-10 md:grid-cols-2 mb-20">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Nossa História</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Nascemos em 2023 da união de mulheres apaixonadas por Web3 que perceberam a necessidade de criar um movimento estruturado de inclusão e capacitação. O que começou como um grupo de estudos se transformou em uma comunidade ativa com centenas de membros, projetos em andamento e impacto mensurável no ecossistema blockchain brasileiro.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">Visão de Futuro</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Sonhamos com um ecossistema Web3 onde a representatividade feminina seja a norma, não a exceção. Onde mulheres ocupem posições de liderança, desenvolvam tecnologias inovadoras e sejam protagonistas na construção do futuro descentralizado.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                Nosso objetivo é que, até 2030, possamos dobrar a participação feminina em Web3 no Brasil e servir de modelo para iniciativas similares ao redor do mundo.
                </p>
              </div>
            </div> */}

            {/* Team Grid */}
            <div className="mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="relative mb-6 self-center">
                      {/* Purple glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#db2777] blur-md opacity-60 scale-110" />
                      <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-white/20 shadow-xl">
                        <Image
                          src={member.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground w-full text-center">{member.name}</h3>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-3 text-secondary hover:text-secondary/80 transition-colors w-full flex justify-center"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                    <p className="text-xs leading-relaxed text-gray-600 px-2 sm:px-0 text-left text-justify">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Como Fazer Parte Section */}
        <section className="bg-[#f8f1ee] py-20 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Como Fazer Parte
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Existem várias formas de participar e contribuir com o movimento
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-md ring-1 ring-black/5">
                <h3 className="text-sm font-semibold text-foreground">Entrar na Comunidade</h3>
                <p className="mt-3 text-xs leading-relaxed text-gray-600">
                  Junte-se à nossa comunidade e conecte-se com outras mulheres.
                </p>
                <a
                  href={COMMUNITY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90"
                >
                  Acessar Comunidade
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-md ring-1 ring-black/5">
                <h3 className="text-sm font-semibold text-foreground">Participar de Projetos</h3>
                <p className="mt-3 text-xs leading-relaxed text-gray-600">
                  Contribua com seus conhecimentos em projetos ativos da comunidade.
                </p>
                <a
                  href="https://forms.gle/6GSCBSZHPGLEeg6r7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-secondary/90"
                >
                  Enviar Projeto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>


        </section>
      </main>

      <Footer />
    </div>
  )
}
