'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { CheckCircle2, AlertCircle } from 'lucide-react'

// CONFIGURAÇÃO DO EMAILJS
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NEWSLETTER || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'mulheresnaweb3.0@gmail.com'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('submitting')

    const templateParams = {
      user_email: email,
      user_data_envio: new Date().toLocaleString('pt-BR'),
      to_email: CONTACT_EMAIL,
      type: 'Assinatura Newsletter'
    }

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setStatus('success')
        setEmail('')
        // Retorna ao estado inicial após 5 segundos
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Erro ao assinar')
      }
    } catch (err) {
      console.log('Erro Newsletter:', err)
      setStatus('error')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {status === 'success' ? (
        <div className="flex items-center gap-3 bg-emerald-50 text-emerald-700 px-6 py-4 rounded-full border border-emerald-100 animate-in fade-in duration-300">
          <CheckCircle2 size={20} className="shrink-0" />
          <span className="text-sm font-medium">Inscrição confirmada! Obrigado por assinar.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-center bg-white rounded-full p-1.5 shadow-md ring-1 ring-gray-200 focus-within:ring-secondary/50 transition-all">
            <input
              type="email"
              required
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'submitting'}
              className="flex-grow px-6 py-2 bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-none text-sm md:text-base disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="h-10 md:h-12 px-6 md:px-10 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center whitespace-nowrap min-w-[100px]"
            >
              {status === 'submitting' ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Assinar'
              )}
            </button>
          </div>

          {status === 'error' && (
            <div className="absolute top-full left-4 mt-2 flex items-center gap-2 text-red-500 text-xs animate-in fade-in slide-in-from-top-1">
              <AlertCircle size={14} />
              <span>Ocorreu um erro. Tente novamente.</span>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
