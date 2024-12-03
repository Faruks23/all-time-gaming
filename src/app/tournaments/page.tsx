import Image from 'next/image'
import Link from 'next/link'
import { Trophy, Users, Calendar, DollarSign, Gamepad, Zap } from 'lucide-react'

const tournaments = [
  {
    id: 1,
    name: "Nexus Champions League",
    game: "League of Legends",
    date: "August 15-20, 2024",
    prize: "$100,000",
    teams: 16,
    image: "/placeholder.svg?height=300&width=600&text=Nexus+Champions+League"
  },
  {
    id: 2,
    name: "Battle Royale Showdown",
    game: "Fortnite",
    date: "September 5-7, 2024",
    prize: "$75,000",
    teams: 100,
    image: "/placeholder.svg?height=300&width=600&text=Battle+Royale+Showdown"
  },
  {
    id: 3,
    name: "Tactical Ops Masters",
    game: "CS:GO",
    date: "October 10-13, 2024",
    prize: "$150,000",
    teams: 32,
    image: "/placeholder.svg?height=300&width=600&text=Tactical+Ops+Masters"
  },
  {
    id: 4,
    name: "Rocket League Cup",
    game: "Rocket League",
    date: "November 1-3, 2024",
    prize: "$50,000",
    teams: 24,
    image: "/placeholder.svg?height=300&width=600&text=Rocket+League+Cup"
  }
]

export default function TournamentsPage() {
  return (
    <div className="bg-[#0a0e17] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/tournaments-hero.jpg" alt="Tournaments Background" layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17] z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              E-Sports Tournaments
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">Compete in epic battles and claim your glory!</p>
          </div>
        </div>
      </section>

      {/* Tournaments Listing */}
      <section className="py-16 bg-[#1a2030]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Upcoming Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tournaments.map((tournament) => (
              <div key={tournament.id} className="bg-[#2a3040] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <Image src={tournament.image} alt={tournament.name} width={600} height={300} className="w-full" />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg">
                    <Trophy className="inline-block mr-1" size={16} />
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2 text-blue-300">{tournament.name}</h3>
                  <p className="text-gray-300 mb-4 flex items-center">
                    <Gamepad size={20} className="mr-2" />
                    {tournament.game}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" /> {tournament.date}
                    </span>
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" /> {tournament.teams} Teams
                    </span>
                    <span className="flex items-center">
                      <DollarSign size={16} className="mr-1" /> Prize: {tournament.prize}
                    </span>
                  </div>
                  <Link href={`/tournaments/${tournament.id}`} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 inline-flex items-center w-full justify-center">
                    <Trophy size={20} className="mr-2" />
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Tournament CTA */}
      <section className="py-16 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920&text=Create+Tournament+Background" alt="Create Tournament Background" layout="fill" objectFit="cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-[#2a3040] to-[#3a4050] rounded-lg shadow-lg p-8 border border-blue-500 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Host Your Own Tournament
            </h2>
            <p className="text-xl mb-6 text-center text-gray-300">Create and manage your own e-sports tournaments with our powerful tools!</p>
            <div className="text-center">
              <Link href="/tournaments/create" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center">
                <Zap size={24} className="mr-2" />
                Create Tournament
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Calendar */}
      <section className="py-16 bg-[#1a2030]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Tournament Calendar
          </h2>
          <div className="bg-[#2a3040] rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#3a4050] p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-blue-300">August 2024</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">15-20: Nexus Champions League</li>
                  <li className="text-gray-300">25-27: Mobile Legends Showdown</li>
                </ul>
              </div>
              <div className="bg-[#3a4050] p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-blue-300">September 2024</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">5-7: Battle Royale Showdown</li>
                  <li className="text-gray-300">18-20: Dota 2 Invitational</li>
                </ul>
              </div>
              <div className="bg-[#3a4050] p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-blue-300">October 2024</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300">10-13: Tactical Ops Masters</li>
                  <li className="text-gray-300">22-24: Fighting Game Championship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

