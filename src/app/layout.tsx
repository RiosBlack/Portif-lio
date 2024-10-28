import type { Metadata } from "next";
import "./globals.css";
import { Oxanium } from 'next/font/google'

const oxaniumFont = Oxanium({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Douglas Rios Dev",
  description: "Portifólio do desenvolvedor fullStack Douglas Rios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${oxaniumFont.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
