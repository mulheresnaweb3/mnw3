'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { COMMUNITY_LINK } from '@/constants/links'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Pertencer', href: '/pertencer' },
    // { name: 'Crescer', href: '/crescer' },
    { name: 'Construir', href: '/construir' },
    // { name: 'Vozes', href: '/vozes' },
    { name: 'Calendário', href: '/calendario' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <header className="fixed w-full bg-primary z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-baseline gap-1">
              {/* <span className="text-lg font-semibold text-white">mulheres</span>
              <span className="text-xs font-medium text-white">na</span>
              <span className="font-heading text-2xl tracking-[0.2em] text-secondary uppercase">
                WEB3
              </span> */}
              <Image src="/images/logo.png" alt="Mulheres na Web3" width={200} height={200} />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold text-white/80 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-secondary/40 transition-colors hover:bg-secondary/90 rounded-lg"
            >
              Entrar na Comunidade
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-primary text-primary-foreground px-4 py-3 font-medium hover:bg-primary/90 transition-colors rounded-lg"
            >
              Junte-se a nós
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
