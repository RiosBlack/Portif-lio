import type { Metadata } from "next";
import "./globals.css";
import { Oxanium } from 'next/font/google'
import BackgroundVideo from "@/components/Section1/backgroundVideo";


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
        className={`${oxaniumFont.className} antialiased relative`}
      >
        <div className="absolute Z-10">
          <BackgroundVideo />
        </div>
        <div className="absolute z-20">
          {children}
        </div>
      </body>
    </html>
  );
}
