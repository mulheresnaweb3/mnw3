'use client'

import { useState, useActionState } from 'react'
import { sendEmail } from '@/actions/sendEmail'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

type FormState = {
  success: boolean
  message: string
}

const initialState: FormState = {
  success: false,
  message: ''
}

export default function JoinSection() {
  const [showForm, setShowForm] = useState(false)
  const [state, formAction, isPending] = useActionState(
    async (_prevState: FormState, formData: FormData): Promise<FormState> => {
      return await sendEmail(formData)
    },
    initialState
  )

  return (
    <section id="join-us" className="py-20 bg-accent/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Faça parte da nossa comunidade
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de mulheres que estão transformando a Web3.
          Conecte-se, aprenda e cresça conosco.
        </p>

        {!showForm && !state.success ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-secondary text-white text-xl px-8 py-4 font-bold shadow-lg hover:bg-secondary/90 transition-all transform hover:scale-105 rounded-lg"
          >
            QUERO ME JUNTAR AGORA
          </button>
        ) : state.success ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-md mx-auto">
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-green-500 w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">
              Sucesso!
            </h3>
            <p className="text-green-700">{state.message}</p>
            <button
              onClick={() => {
                setShowForm(false)
              }}
              className="mt-6 text-green-600 hover:text-green-800 font-medium underline"
            >
              Voltar
            </button>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Preencha seus dados
            </h3>

            {state.message && !state.success && (
              <div className="mb-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-left text-sm text-red-700">
                <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <p>{state.message}</p>
              </div>
            )}

            <form action={formAction} className="space-y-4 text-left">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Cidade / Estado
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
                  placeholder="Ex: São Paulo - SP"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center justify-center gap-2 bg-primary py-3 font-bold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 rounded-lg"
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Enviando...
                  </>
                ) : (
                  'ENVIAR CADASTRO'
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="mt-2 w-full text-sm text-gray-500 hover:text-gray-700"
              >
                Cancelar
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
