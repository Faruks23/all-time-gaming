import Image from 'next/image'
import Link from 'next/link'
import { Trophy, Zap, ShoppingBag, Star, Users, DollarSign } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-[#0a0e17] text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/home-hero.jpg" alt="Epic Gaming Background" layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17] z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Welcome to NexusArena
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">Dominate the competition, claim your glory!</p>
            <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105">
              <Zap size={24} className="mr-2" />
              Join the Battle
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="py-16 bg-[#1a2030]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Epic Tournaments Await
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#2a3040] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <Image src={`/placeholder.svg?height=200&width=400&text=Tournament+${i}`} alt={`Tournament ${i}`} width={400} height={200} className="w-full" />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg">
                    <Star className="inline-block mr-1" size={16} />
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-blue-300">Cyber Showdown {i}</h3>
                  <p className="text-gray-300 mb-4">Battle for supremacy and a $50,000 prize pool!</p>
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                    <span className="flex items-center"><Users size={16} className="mr-1" /> 128 Teams</span>
                    <span className="flex items-center"><DollarSign size={16} className="mr-1" /> $50,000 Prize</span>
                  </div>
                  <Link href={`/tournaments/${i}`} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 inline-flex items-center w-full justify-center">
                    <Trophy size={20} className="mr-2" />
                    Join Tournament
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Challenges */}
      <section className="py-16 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920&text=Abstract+Gaming+Pattern" alt="Abstract Gaming Pattern" layout="fill" objectFit="cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Rise to the Challenge
          </h2>
          <div className="bg-gradient-to-r from-[#2a3040] to-[#3a4050] rounded-lg shadow-lg p-8 border border-blue-500 transform hover:scale-105 transition-all duration-300">
            <p className="text-xl mb-6 text-center text-gray-300">Prove your skills in intense 1v1 and team battles!</p>
            <div className="text-center">
              <Link href="/challenges" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center">
                <Zap size={24} className="mr-2" />
                Find Challenges
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Store Preview */}
      <section className="py-16 bg-[#1a2030]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Gear Up for Victory
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#2a3040] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <Image src={`/placeholder.svg?height=200&width=200&text=Gaming+Gear+${i}`} alt={`Gaming Gear ${i}`} width={200} height={200} className="w-full" />
                  <div className="absolute top-0 left-0 bg-yellow-500 text-gray-900 px-3 py-1 rounded-br-lg font-bold">
                    New
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-blue-300">Pro Gaming Headset</h3>
                  <p className="text-gray-300 mb-2">$129.99</p>
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold py-2 px-4 rounded-full w-full transition-all duration-300 flex items-center justify-center">
                    <ShoppingBag size={20} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/store" className="text-blue-400 hover:text-blue-300 font-bold text-lg transition-colors duration-300 inline-flex items-center">
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=400&width=1920&text=Gaming+Pattern" alt="Gaming Pattern" layout="fill" objectFit="cover" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Become a Legend?</h2>
          <p className="text-xl mb-8">Join NexusArena and start your journey to e-sports stardom!</p>
          <Link href="/signup" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 inline-flex items-center transform hover:scale-105">
            <Zap size={24} className="mr-2" />
            Create Your Legacy
          </Link>
        </div>
      </section>
    </div>
  )
}

