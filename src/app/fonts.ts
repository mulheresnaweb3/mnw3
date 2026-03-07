import { Titillium_Web, Press_Start_2P } from 'next/font/google'

export const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export const titillium = Titillium_Web({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
