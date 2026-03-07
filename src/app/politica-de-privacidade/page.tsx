import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { pixelFont } from '@/app/fonts'
import { ShieldCheck, Lock, Eye, Mail, Cookie, ExternalLink } from 'lucide-react'

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7c9b6] via-[#f1dfd2] to-[#cdb4e6]" />
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0)_60%)]" />
          <div className="relative mx-auto max-w-5xl text-center ">
            <h1 className={`${pixelFont.className} pt-16 uppercase text-2xl sm:text-3xl md:text-3xl tracking-[0.2em] text-foreground`}>
              POLÍTICA DE PRIVACIDADE
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-gray-700">
              Última atualização: 02/03/2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed space-y-8">
              <div className="bg-background rounded-3xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100 mb-12">
                <p className="text-base md:text-lg">
                  A <strong>Mulheres na Web3</strong> respeita a sua privacidade e está comprometida com a proteção dos dados pessoais tratados em suas atividades. Esta Política de Privacidade explica, de forma clara e acessível, como coletamos, utilizamos, armazenamos e protegemos seus dados.
                </p>
                <p className="mt-4 text-base md:text-lg italic">
                  Ao acessar o site, baixar materiais, adquirir produtos ou fornecer seus dados, você concorda com os termos desta Política.
                </p>
              </div>

              <div className="space-y-12">
                {/* 1. Quem Somos */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">1</span>
                    Quem Somos
                  </h2>
                  <p>
                    A <strong>Mulheres na Web3</strong> é um projeto institucional, de caráter educativo e comunitário, com atuação principal no Brasil.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-secondary font-medium">
                    <Mail size={18} />
                    <span>Contato para assuntos de privacidade: mulheresnaweb3.0@gmail.com</span>
                  </div>
                </section>

                {/* 2. Dados Coletados */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">2</span>
                    Quais Dados Coletamos
                  </h2>
                  <p>Coletamos apenas os dados necessários para as finalidades do projeto, incluindo:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 font-medium text-foreground">
                    <li>Nome</li>
                    <li>E-mail</li>
                  </ul>
                  <p className="mt-4">Esses dados podem ser coletados quando você:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Se inscreve para receber conteúdos;</li>
                    <li>Realiza download de materiais;</li>
                    <li>Adquire produtos ou serviços;</li>
                    <li>Entra em contato conosco.</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    Não coletamos dados sensíveis ou excessivos de forma intencional.
                  </p>
                </section>

                {/* 3. Finalidades */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">3</span>
                    Para Que Utilizamos Seus Dados
                  </h2>
                  <p>Os dados coletados são utilizados para:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Comunicação institucional;</li>
                    <li>Envio de conteúdos educativos e informativos;</li>
                    <li>Divulgação de eventos, produtos e serviços;</li>
                    <li>Relacionamento com a comunidade;</li>
                    <li>Cumprirem obrigações legais.</li>
                  </ul>
                  <p className="mt-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 font-bold text-emerald-800 text-center">
                    Seus dados não são vendidos ou comercializados.
                  </p>
                </section>

                {/* 4. Compartilhamento */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">4</span>
                    Compartilhamento de Dados
                  </h2>
                  <p>A Mulheres na Web3 poderá compartilhar dados pessoais apenas quando necessário para:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Prestação dos serviços contratados;</li>
                    <li>Processamento de pagamentos (quando aplicável);</li>
                    <li>Cumprimento de obrigações legais ou regulatórias;</li>
                    <li>Proteção de direitos do projeto.</li>
                  </ul>
                  <p className="mt-4 italic">Sempre que houver compartilhamento, ele ocorrerá de forma limitada e segura.</p>
                </section>

                {/* 5. Segurança */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">5</span>
                    Armazenamento e Segurança
                  </h2>
                  <div className="flex gap-4 items-start">
                    <Lock className="text-secondary shrink-0 mt-1" />
                    <div>
                      <p>
                        Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, perda, uso indevido ou divulgação.
                      </p>
                      <p className="mt-2 font-medium">
                        Os dados são armazenados pelo tempo necessário para cumprir as finalidades descritas nesta Política, respeitando as exigências legais.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 6. Direitos LGPD */}
                <section className="bg-background rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">6</span>
                    Direitos da Titular dos Dados
                  </h2>
                  <p className="mb-4">Nos termos da Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), você tem direito a:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Confirmar a existência de tratamento de dados',
                      'Acessar seus dados',
                      'Corrigir dados incompletos, inexatos ou desatualizados',
                      'Solicitar a exclusão de dados, quando aplicável',
                      'Revogar consentimentos concedidos'
                    ].map((direito, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-50">
                        <ShieldCheck className="text-emerald-500 shrink-0" size={18} />
                        <span className="text-sm font-medium">{direito}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm">As solicitações podem ser feitas pelo e-mail de contato indicado nesta Política.</p>
                </section>

                {/* 7. Cookies */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">7</span>
                    Cookies e Tecnologias Semelhantes
                  </h2>
                  <div className="flex gap-4 items-start">
                    <Cookie className="text-secondary shrink-0 mt-1" />
                    <div>
                      <p>
                        O site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência de navegação e compreender como o site é utilizado.
                      </p>
                      <p className="mt-2 italic">
                        Você pode, a qualquer momento, ajustar as configurações do seu navegador para bloquear ou alertar sobre o uso de cookies.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 8. Links Terceiros */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">8</span>
                    Links para Sites de Terceiros
                  </h2>
                  <p>
                    O site pode conter links para plataformas externas. A <strong>Mulheres na Web3</strong> não se responsabiliza pelas políticas de privacidade ou práticas desses sites.
                  </p>
                  <p className="mt-2 text-sm flex items-center gap-1 font-medium text-secondary">
                    <ExternalLink size={14} />
                    Recomendamos que você leia as políticas de privacidade de terceiros ao acessá-los.
                  </p>
                </section>

                {/* 9. Alterações */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">9</span>
                    Alterações desta Política
                  </h2>
                  <p>
                    Esta Política de Privacidade poderá ser atualizada a qualquer momento para refletir melhorias, mudanças no projeto ou adequações legais.
                  </p>
                  <p className="mt-2 italic">A data da última atualização estará sempre indicada no início do documento.</p>
                </section>

                {/* 10. Legislação */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">10</span>
                    Legislação Aplicável
                  </h2>
                  <p className="font-semibold text-lg">Esta Política é regida pelas leis da República Federativa do Brasil.</p>
                </section>

                {/* 11. Contato Final */}
                <section className="bg-background rounded-3xl p-8 border border-gray-100 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contato</h2>
                  <p className="mb-6 text-gray-600 text-base">
                    Em caso de dúvidas, solicitações ou para exercer seus direitos como titular de dados, entre em contato pelo e-mail:
                  </p>
                  <a 
                    href="mailto:mulheresnaweb3.0@gmail.com"
                    className="inline-flex items-center gap-2 text-secondary font-bold text-lg hover:underline"
                  >
                    <Mail />
                    mulheresnaweb3.0@gmail.com
                  </a>
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <p className="text-primary font-bold text-xl mb-2">Mulheres na Web3 🤍</p>
                    <p className="text-sm text-gray-500 italic">
                      Cuidado, transparência e responsabilidade com seus dados.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
