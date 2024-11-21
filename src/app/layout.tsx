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
        <div className='fixed z-10 overflow-hidden w-full h-full'>
          <div className='w-full h-full absolute bg-black bg-opacity-65'></div>
          <video preload="auto" loop muted autoPlay className="object-cover w-full h-full" >
            <source src="/Background.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute z-20 max-w-screen-2xl grid justify-items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
