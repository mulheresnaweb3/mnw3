'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Twitter, Youtube, ArrowRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import NewsletterForm from './NewsletterForm'
import { COMMUNITY_LINK } from '@/constants/links'

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#CCCCCC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Left Column - Branding & About */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-1">
            <Image src="/images/logo-footer1.png" alt="Mulheres na Web3" width={200} height={200} />
            </div>
            <p className="text-sm text-[#CCCCCC] max-w-sm">
              Movimento coletivo de mulheres construindo o futuro descentralizado.
            </p>
            <Link 
              href="https://drive.google.com/file/d/1sl8pvCtSvfxuDadgLZKPHV51xq5gr-up/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#FF8C00' }}
            >
              Leia nosso Manifesto
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Middle Column - Navigation */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pertencer" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">
                  Pertencer
                </Link>
              </li>
              {/* <li>
                <Link href="/crescer" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">
                  Crescer
                </Link>
              </li> */}
              <li>
                <Link href="/construir" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">
                  Construir
                </Link>
              </li>
              {/* <li>
                <Link href="/vozes" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">
                  Vozes da Comunidade
                </Link>
              </li> */}
              <li>
                <Link href="/calendario" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">
                  Calendário
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-semibold mb-4 text-white">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contato" className="text-sm text-[#CCCCCC] hover:text-white transition-colors">
                    Fale Conosco
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://forms.gle/szYQAWdB3nZ1pDMQ9" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#CCCCCC] hover:text-white transition-colors"
                  >
                    Colaborações
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="pt-2">
              <h4 className="text-sm font-semibold mb-3 text-white/90">Assine nossa Newsletter</h4>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-[#CCCCCC]/30 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
          {/* Social Media Icons */}
          <div className="flex items-center gap-6">
            <a 
              href={COMMUNITY_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#CCCCCC] hover:text-white transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a 
              href="https://twitter.com/mulheresnaweb3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#CCCCCC] hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://instagram.com/mulheresnaweb3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#CCCCCC] hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/mulheresnaweb3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#CCCCCC] hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://youtube.com/@mulheresnaweb3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#CCCCCC] hover:text-white transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidade" className="text-xs text-[#CCCCCC] hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="text-xs text-[#CCCCCC] hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-4">
          <p className="text-xs text-[#CCCCCC]">
            Construído por Mulheres na Web3 © 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
