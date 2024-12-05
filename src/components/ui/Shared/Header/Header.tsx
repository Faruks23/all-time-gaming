import Link from 'next/link'
import { GamepadIcon, LogIn, ShoppingCart, Trophy } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div>
  <header className="bg-gradient-to-r from-[#1a2030] to-[#2a3040] border-b border-[#3a4050]">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-300 hover:to-purple-500 transition-all duration-300">
                <span className="flex items-center">
                  {/* <GamepadIcon size={32} className="mr-2 text-white" /> */}
                  ATG
                </span>
              </Link>
              <div className="space-x-6 hidden md:flex">
                <Link href="/tournaments" className="flex items-center">
                  <Trophy size={20} className="mr-2" />
                  Tournaments
                </Link>
                <Link href="/team" className="flex items-center">
                  <Trophy size={20} className="mr-2" />
                  Team
                </Link>
                <Link href="/challenges" className="flex items-center">
                  <GamepadIcon size={20} className="mr-2" />
                  Challenges
                </Link>
                <Link href="/store" className="flex items-center">
                  <ShoppingCart size={20} className="mr-2" />
                  Store
                </Link>
                <Link href="/login" className="flex items-center">
                  <LogIn size={20} className="mr-2" />
                  Login
                </Link>
              </div>
              <button className="md:hidden text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </nav>
          </header>

    </div>
  )
}

export default Header