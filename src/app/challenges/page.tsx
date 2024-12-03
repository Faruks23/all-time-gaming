import Image from 'next/image'
import Link from 'next/link'
import { Sword, Users, Clock, DollarSign, Trophy, Zap } from 'lucide-react'

const challenges = [
  {
    id: 1,
    title: "1v1 Duel Masters",
    description: "Test your skills in intense 1v1 battles across multiple game titles.",
    players: "2",
    duration: "1 hour",
    prize: "$100",
    image: "/placeholder.svg?height=200&width=400&text=1v1+Duel"
  },
  {
    id: 2,
    title: "Team Tactical Showdown",
    description: "Coordinate with your team to outmaneuver and outplay your opponents.",
    players: "5v5",
    duration: "2 hours",
    prize: "$500",
    image: "/placeholder.svg?height=200&width=400&text=Team+Tactical"
  },
  {
    id: 3,
    title: "Battle Royale Blitz",
    description: "Be the last player standing in this fast-paced battle royale challenge.",
    players: "100",
    duration: "30 mins",
    prize: "$250",
    image: "/placeholder.svg?height=200&width=400&text=Battle+Royale"
  },
  {
    id: 4,
    title: "Speed Run Challenge",
    description: "Race against time to complete game objectives faster than your competitors.",
    players: "Unlimited",
    duration: "Varies",
    prize: "$150",
    image: "/placeholder.svg?height=200&width=400&text=Speed+Run"
  }
]

export default function ChallengePage() {
  return (
    <div className="bg-[#0a0e17] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/challenges.jpg" alt="Challenge Background" layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17] z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Player Challenges
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">Prove your skills, climb the ranks, and claim victory!</p>
          </div>
        </div>
      </section>

      {/* Challenges List */}
      <section className="py-16 bg-[#1a2030]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Available Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-[#2a3040] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <Image src={challenge.image} alt={challenge.title} width={400} height={200} className="w-full" />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg">
                    <Trophy className="inline-block mr-1" size={16} />
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-blue-300">{challenge.title}</h3>
                  <p className="text-gray-300 mb-4">{challenge.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                    <span className="flex items-center"><Users size={16} className="mr-1" /> {challenge.players} Players</span>
                    <span className="flex items-center"><Clock size={16} className="mr-1" /> {challenge.duration}</span>
                    <span className="flex items-center"><DollarSign size={16} className="mr-1" /> {challenge.prize} Prize</span>
                  </div>
                  <Link href={`/challenges/${challenge.id}`} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 inline-flex items-center w-full justify-center">
                    <Sword size={20} className="mr-2" />
                    Join Challenge
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Challenge CTA */}
      <section className="py-16 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920&text=Create+Challenge+Background" alt="Create Challenge Background" layout="fill" objectFit="cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-[#2a3040] to-[#3a4050] rounded-lg shadow-lg p-8 border border-blue-500 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Create Your Own Challenge
            </h2>
            <p className="text-xl mb-6 text-center text-gray-300">Have a unique idea? Set up your own challenge and invite others to compete!</p>
            <div className="text-center">
              <Link href="/challenges/create" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center">
                <Zap size={24} className="mr-2" />
                Create Challenge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

