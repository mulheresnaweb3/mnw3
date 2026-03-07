import { Wrench } from 'lucide-react'

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-full">
            <Wrench className="w-16 h-16 text-primary animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Estamos em Manutenção
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          No momento estamos realizando melhorias em nossa plataforma para oferecer uma experiência ainda melhor para você.
        </p>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
        
        <p className="text-sm text-gray-500">
          Voltaremos em breve! <br />
          Equipe MulheresNaWeb3
        </p>
      </div>
    </div>
  )
}
