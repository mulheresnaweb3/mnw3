import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { pixelFont } from '@/app/fonts'
import { FileText, ShieldCheck, Mail } from 'lucide-react'

export default function TermosDeUsoPage() {
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
              TERMOS DE USO
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
                  Bem-vinda ao site <strong>Mulheres na Web3</strong>. Este Termo de Uso estabelece as regras para utilização do site, de seus conteúdos, produtos e serviços. Ele foi elaborado para garantir transparência, respeito às usuárias e segurança jurídica para o projeto.
                </p>
                <p className="mt-4 text-base md:text-lg">
                  Ao acessar, navegar, realizar downloads ou adquirir qualquer produto ou serviço, você concorda integralmente com estes Termos. Caso não concorde, pedimos que não utilize o site.
                </p>
              </div>

              <div className="space-y-12">
                {/* 1. Identificação */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">1</span>
                    Identificação do Projeto
                  </h2>
                  <p>
                    O <strong>Mulheres na Web3</strong> é um projeto institucional, de caráter educativo e comunitário, com atuação principal no Brasil.
                  </p>
                  <p className="mt-2">
                    O projeto atua em Web3, tecnologia e inovação, podendo também abranger outras áreas educacionais, institucionais e de desenvolvimento profissional.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-secondary font-medium">
                    <Mail size={18} />
                    <span>Contato oficial: mulheresnaweb3.0@gmail.com</span>
                  </div>
                </section>

                {/* 2. Finalidade */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">2</span>
                    Finalidade do Site
                  </h2>
                  <p>O site Mulheres na Web3 tem como finalidade:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Compartilhar conteúdos educativos, institucionais e informativos;</li>
                    <li>Disponibilizar materiais para download;</li>
                    <li>Divulgar e comercializar produtos, serviços, eventos e experiências educativas;</li>
                    <li>Promover a conexão, representatividade e desenvolvimento de mulheres em diferentes áreas.</li>
                  </ul>
                  <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
                    <ShieldCheck className="text-amber-600 shrink-0" />
                    <p className="text-sm text-amber-800 italic">
                      Os conteúdos disponibilizados não constituem aconselhamento financeiro, jurídico, profissional ou de investimento, devendo ser utilizados apenas para fins informativos e educacionais.
                    </p>
                  </div>
                </section>

                {/* 3. Aceitação */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">3</span>
                    Aceitação dos Termos
                  </h2>
                  <p>
                    O uso do site implica aceitação plena deste Termo de Uso e da Política de Privacidade. Estes documentos podem ser atualizados a qualquer momento, sendo responsabilidade da usuária consultá-los periodicamente.
                  </p>
                </section>

                {/* 4. Propriedade Intelectual */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">4</span>
                    Uso do Conteúdo e Propriedade Intelectual
                  </h2>
                  <p>
                    Todo o conteúdo disponibilizado no site — incluindo textos, artigos, materiais educativos, manifestos, downloads, marcas, logotipos, imagens e demais materiais — é protegido por direitos autorais e pertence ao Mulheres na Web3 ou a suas colaboradoras e parceiras.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                      <h4 className="font-bold text-emerald-800 mb-2">É permitido:</h4>
                      <ul className="list-disc pl-4 text-sm text-emerald-700 space-y-1">
                        <li>Acessar e utilizar os conteúdos para fins pessoais, educativos e não comerciais;</li>
                        <li>Realizar downloads quando expressamente autorizados.</li>
                      </ul>
                    </div>
                    <div className="p-5 rounded-2xl bg-red-50 border border-red-100">
                      <h4 className="font-bold text-red-800 mb-2">É vedado:</h4>
                      <ul className="list-disc pl-4 text-sm text-red-700 space-y-1">
                        <li>Copiar, reproduzir, distribuir, modificar, vender ou explorar comercialmente qualquer conteúdo sem autorização prévia;</li>
                        <li>Utilizar os materiais de forma que viole a legislação vigente ou os valores do projeto.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 5. Produtos e Serviços */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">5</span>
                    Produtos, Serviços e Conteúdos Pagos
                  </h2>
                  <p>
                    O Mulheres na Web3 pode oferecer produtos, serviços, eventos, mentorias, experiências educativas e outros conteúdos pagos.
                  </p>
                  <p className="mt-2">
                    As informações sobre valores, formas de pagamento, acesso, entrega, prazos, cancelamento e reembolso serão informadas de forma clara no momento da contratação.
                  </p>
                  <p className="mt-2 font-medium text-secondary">
                    Nos termos do Código de Defesa do Consumidor, quando aplicável, a usuária poderá exercer o direito de arrependimento no prazo de 7 (sete) dias, contados da confirmação da compra, conforme condições informadas na oferta.
                  </p>
                </section>

                {/* 6. Downloads */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">6</span>
                    Downloads e Materiais Educativos
                  </h2>
                  <p>
                    Os materiais disponibilizados para download têm caráter exclusivamente informativo e educacional.
                  </p>
                  <p className="mt-2">
                    O Mulheres na Web3 não se responsabiliza por decisões, perdas, danos ou resultados obtidos a partir do uso desses materiais. Toda e qualquer aplicação prática das informações é de responsabilidade exclusiva da usuária.
                  </p>
                </section>

                {/* 7. Dados Pessoais */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">7</span>
                    Coleta e Tratamento de Dados Pessoais
                  </h2>
                  <p>
                    Coletamos dados pessoais básicos, como <strong>nome e e-mail</strong>, para fins de comunicação institucional, envio de conteúdos, materiais educativos, informações sobre produtos, serviços, eventos e atualizações do projeto.
                  </p>
                  <p className="mt-2">
                    O tratamento dos dados segue a legislação brasileira vigente, especialmente a <strong>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
                  </p>
                  <p className="mt-2 text-sm text-gray-500 italic">Mais informações estão disponíveis na Política de Privacidade.</p>
                </section>

                {/* 8. Conduta */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">8</span>
                    Conduta da Usuária
                  </h2>
                  <p>Ao utilizar o site, a usuária compromete-se a:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Fornecer informações verdadeiras quando solicitadas;</li>
                    <li>Utilizar o site de forma ética, respeitosa e legal;</li>
                    <li>Não praticar atos que possam comprometer a segurança, integridade ou reputação do projeto.</li>
                  </ul>
                  <p className="mt-4 text-red-600 font-medium">
                    O descumprimento destes termos poderá resultar na suspensão ou bloqueio de acesso, sem prejuízo das medidas legais cabíveis.
                  </p>
                </section>

                {/* 9. Limitação de Responsabilidade */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">9</span>
                    Limitação de Responsabilidade
                  </h2>
                  <p>O Mulheres na Web3 não garante que o site estará livre de erros, interrupções ou falhas técnicas. Não nos responsabilizamos por:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site;</li>
                    <li>Decisões tomadas com base nos conteúdos disponibilizados;</li>
                    <li>Perdas financeiras, operacionais ou de qualquer natureza;</li>
                    <li>Conteúdos, serviços ou práticas de sites e plataformas de terceiros.</li>
                  </ul>
                </section>

                {/* 10. Links para Terceiros */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">10</span>
                    Links para Terceiros
                  </h2>
                  <p>
                    O site pode conter links para ambientes externos. O Mulheres na Web3 não possui controle sobre esses sites e não se responsabiliza por seus conteúdos, políticas ou práticas.
                  </p>
                </section>

                {/* 11. Suspensão */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">11</span>
                    Suspensão, Alteração ou Encerramento do Site
                  </h2>
                  <p>
                    O Mulheres na Web3 poderá, a qualquer momento, suspender, modificar ou encerrar total ou parcialmente o site, seus conteúdos, produtos ou serviços, sem que isso gere direito a indenização, ressalvadas obrigações legais já assumidas.
                  </p>
                </section>

                {/* 12. Alterações */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">12</span>
                    Alterações deste Termo
                  </h2>
                  <p>
                    Este Termo de Uso poderá ser atualizado a qualquer momento. A versão vigente será sempre a mais recente, indicada pela data no início do documento.
                  </p>
                </section>

                {/* 13. Foro */}
                <section>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary text-sm">13</span>
                    Legislação Aplicável e Foro
                  </h2>
                  <p>Este Termo é regido pelas leis da República Federativa do Brasil.</p>
                  <p className="mt-2 font-semibold">
                    Fica eleito o foro da comarca de Recife/Pernambuco, com renúncia a qualquer outro, por mais privilegiado que seja, para dirimir eventuais controvérsias.
                  </p>
                </section>

                {/* 14. Contato Final */}
                <section className="bg-background rounded-3xl p-8 border border-gray-100 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contato</h2>
                  <p className="mb-6 text-gray-600">
                    Em caso de dúvidas, solicitações ou comunicações relacionadas a este Termo de Uso, entre em contato pelo e-mail:
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
                      Compromisso, clareza e responsabilidade para que juntas possamos construir o amanhã.
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
