import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Footer from '@/components/ui/Shared/Footer/Footer'
import Header from '@/components/ui/Shared/Header/Header'

import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'], // Optional: Specify weights
});
export const metadata: Metadata = {
  title: 'All-Time-gaming-E-Sports Gaming Hub',
  description: 'Your ultimate destination for e-sports tournaments, challenges, and gaming glory.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${orbitron.className} bg-[#0a0e17] text-gray-100 min-h-screen flex flex-col`}>
        <div className="flex-grow">
          <Header />
          <main>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  )
}

function NavLink({ href, icon, text, isButton = false }: { href: string; icon: React.ReactNode; text: string; isButton?: boolean }) {
  const baseClasses = "flex items-center transition-all duration-300"
  const regularClasses = "hover:text-blue-400"
  const buttonClasses = "bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full"
  
  return (
    <Link href={href} className={`${baseClasses} ${isButton ? buttonClasses : regularClasses}`}>
      {icon}
      <span className="ml-1">{text}</span>
    </Link>
  )
}

