import type { Metadata } from "next";
import { pixelFont, titillium } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mulheres na Web3",
  description: "Comunidade de mulheres na Web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${titillium.variable} ${pixelFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
