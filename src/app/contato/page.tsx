'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { pixelFont } from '@/app/fonts'
import { Send, Mail, User, MessageSquare, Tag } from 'lucide-react'

// CONFIGURAÇÃO DO EMAILJS
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTATO || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'mulheresnaweb3.0@gmail.com';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    // Objeto que o EmailJS espera (conforme os parâmetros do seu Template)
    const templateParams = {
      user_nome: formData.nome,
      user_email: formData.email,
      user_assunto: formData.assunto,
      user_mensagem: formData.mensagem,
      user_data_envio: new Date().toLocaleString('pt-BR'),
      to_email: CONTACT_EMAIL
    }

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setSubmitted(true)
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' })
      } else {
        throw new Error('Erro ao enviar')
      }
    } catch (err: any) {
      // Usando log para evitar possíveis restrições de console.error no ambiente
      console.log('Erro EmailJS:', err)
      
      if (err?.status === 412) {
        setError('Erro de configuração no EmailJS: A conexão com o Gmail expirou. Por favor, reconecte sua conta no painel do EmailJS.')
      } else {
        setError('Não foi possível enviar sua mensagem. Verifique sua conexão ou tente novamente mais tarde.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

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
              CONTATO
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm text-gray-700">
              Tem alguma dúvida, proposta ou quer apenas dizer oi? <br />
              Estamos prontas para ouvir você.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl ring-1 ring-gray-200">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                    <Send className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Mensagem Enviada!</h2>
                  <p className="text-gray-600 mb-8">
                    Recebemos sua mensagem com sucesso. <br />
                    Nossa equipe entrará em contato em breve através do e-mail fornecido.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary/90 transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nome */}
                    <div className="space-y-2">
                      <label htmlFor="nome" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <User className="h-4 w-4 text-secondary" />
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Como podemos te chamar?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>

                    {/* E-mail */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <Mail className="h-4 w-4 text-secondary" />
                        Seu Melhor E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Assunto */}
                  <div className="space-y-2">
                    <label htmlFor="assunto" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Tag className="h-4 w-4 text-secondary" />
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      required
                      value={formData.assunto}
                      onChange={handleChange}
                      placeholder="Sobre o que você quer falar?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                    />
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <MessageSquare className="h-4 w-4 text-secondary" />
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Escreva aqui sua mensagem detalhada..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-secondary/20 hover:bg-secondary/90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:translate-y-0"
                    >
                      {isSubmitting ? 'Enviando...' : (
                        <>
                          Enviar Mensagem
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      Sua mensagem será enviada diretamente para nossa equipe.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
