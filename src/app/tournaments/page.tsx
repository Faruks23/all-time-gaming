'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trophy, Users, Calendar, DollarSign, Gamepad, Zap, Search, Filter, ChevronDown, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const tournaments = [
  {
    id: 1,
    name: "Nexus Champions League",
    game: "League of Legends",
    date: "August 15-20, 2024",
    prize: "$100,000",
    teams: 16,
    registeredTeams: 12,
    image: "/placeholder.svg?height=300&width=600&text=Nexus+Champions+League"
  },
  {
    id: 2,
    name: "Battle Royale Showdown",
    game: "Fortnite",
    date: "September 5-7, 2024",
    prize: "$75,000",
    teams: 100,
    registeredTeams: 76,
    image: "/placeholder.svg?height=300&width=600&text=Battle+Royale+Showdown"
  },
  {
    id: 3,
    name: "Tactical Ops Masters",
    game: "CS:GO",
    date: "October 10-13, 2024",
    prize: "$150,000",
    teams: 32,
    registeredTeams: 28,
    image: "/placeholder.svg?height=300&width=600&text=Tactical+Ops+Masters"
  },
  {
    id: 4,
    name: "Rocket League Cup",
    game: "Rocket League",
    date: "November 1-3, 2024",
    prize: "$50,000",
    teams: 24,
    registeredTeams: 18,
    image: "/placeholder.svg?height=300&width=600&text=Rocket+League+Cup"
  }
]

const ongoingTournaments = [
  {
    id: 5,
    name: "Cyber Warriors League",
    game: "Overwatch",
    progress: 65,
    remainingTime: "2 days",
    prize: "$80,000",
    viewersCount: "250K",
    image: "/placeholder.svg?height=300&width=600&text=Cyber+Warriors+League"
  },
  {
    id: 6,
    name: "Galactic MOBA Showdown",
    game: "Dota 2",
    progress: 40,
    remainingTime: "4 days",
    prize: "$120,000",
    viewersCount: "400K",
    image: "/placeholder.svg?height=300&width=600&text=Galactic+MOBA+Showdown"
  }
]

export default function TournamentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTournaments, setFilteredTournaments] = useState(tournaments)
  const [selectedGame, setSelectedGame] = useState('all')

  useEffect(() => {
    const filtered = tournaments.filter(tournament => 
      tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGame === 'all' || tournament.game === selectedGame)
    )
    setFilteredTournaments(filtered)
  }, [searchTerm, selectedGame])

  return (
    <div className="bg-[#0a0e17] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920&text=Epic+Tournament+Arena" alt="Tournaments Background" layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17] z-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-20"
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              E-Sports Tournaments
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">Compete in epic battles and claim your glory!</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              <Trophy className="mr-2 h-5 w-5" /> Join a Tournament
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-[#1a2030] sticky top-0 z-30 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 w-full md:w-auto">
              <Input 
                placeholder="Search tournaments..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#2a3040] border-none text-gray-100 placeholder-gray-500"
                // startIcon={<Search className="text-gray-500" />}
              />
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <Select value={selectedGame} onValueChange={setSelectedGame}>
                <SelectTrigger className="bg-[#2a3040] border-none text-gray-100">
                  <SelectValue placeholder="Filter by game" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Games</SelectItem>
                  <SelectItem value="League of Legends">League of Legends</SelectItem>
                  <SelectItem value="Fortnite">Fortnite</SelectItem>
                  <SelectItem value="CS:GO">CS:GO</SelectItem>
                  <SelectItem value="Rocket League">Rocket League</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="whitespace-nowrap">
                <Filter className="mr-2 h-4 w-4" /> More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Listing */}
      <section className="py-16 bg-[#0a0e17]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Upcoming Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#1a2030] border-none overflow-hidden transform hover:scale-105 transition-all duration-300 group">
                  <div className="relative">
                    <Image src={tournament.image} alt={tournament.name} width={600} height={300} className="w-full" />
                    <Badge className="absolute top-2 right-2 bg-blue-600 text-white">
                      <Trophy className="mr-1" size={12} />
                      Featured
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2030] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">Quick Join</Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-300">{tournament.name}</CardTitle>
                    <CardDescription className="flex items-center text-gray-400">
                      <Gamepad size={16} className="mr-2" />
                      {tournament.game}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-1" /> {tournament.date}
                      </span>
                      <span className="flex items-center">
                        <Users size={16} className="mr-1" /> {tournament.registeredTeams}/{tournament.teams} Teams
                      </span>
                      <span className="flex items-center">
                        <DollarSign size={16} className="mr-1" /> Prize: {tournament.prize}
                      </span>
                      <span className="flex items-center">
                        <Star size={16} className="mr-1" /> {Math.floor(Math.random() * 5) + 1}/5 Rating
                      </span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Registration Progress</span>
                        <span>{Math.round((tournament.registeredTeams / tournament.teams) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${(tournament.registeredTeams / tournament.teams) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Trophy size={20} className="mr-2" />
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Tournaments */}
      <section className="py-16 bg-[#0a0e17]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Ongoing Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingTournaments.map((tournament) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#2a3040] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <Image src={tournament.image} alt={tournament.name} width={600} height={300} className="w-full" />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg">
                    <span className="animate-pulse">● </span>Live
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
                      <Trophy size={16} className="mr-1" /> Prize: {tournament.prize}
                    </span>
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" /> {tournament.viewersCount} viewers
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tournament Progress</span>
                      <span>{tournament.progress}%</span>
                    </div>
                    <Progress value={tournament.progress} className="h-2" />
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Remaining time: {tournament.remainingTime}</p>
                  <Link href={`/tournaments/${tournament.id}`} className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 inline-flex items-center w-full justify-center">
                    <Zap size={20} className="mr-2" />
                    Watch Live
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Tournament CTA */}
      <section className="py-16 bg-[#1a2030] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920&text=Create+Tournament+Background" alt="Create Tournament Background" layout="fill" objectFit="cover" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10"
        >
          <Card className="bg-gradient-to-r from-[#2a3040] to-[#3a4050] border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Host Your Own Tournament
              </CardTitle>
              <CardDescription className="text-center text-xl text-gray-300">
                Create and manage your own e-sports tournaments with our powerful tools!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                <Zap size={24} className="mr-2" />
                Create Tournament
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Tournament Calendar */}
      <section className="py-16 bg-[#0a0e17]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Tournament Calendar
          </h2>
          <Tabs defaultValue="august" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="august">August</TabsTrigger>
              <TabsTrigger value="september">September</TabsTrigger>
              <TabsTrigger value="october">October</TabsTrigger>
            </TabsList>
            <TabsContent value="august">
              <Card className="bg-[#1a2030] border-none">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <span className="text-blue-300">15-20: Nexus Champions League</span>
                      <Badge>League of Legends</Badge>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-blue-300">25-27: Mobile Legends Showdown</span>
                      <Badge>Mobile Legends</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="september">
              <Card className="bg-[#1a2030] border-none">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <span className="text-blue-300">5-7: Battle Royale Showdown</span>
                      <Badge>Fortnite</Badge>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-blue-300">18-20: Dota 2 Invitational</span>
                      <Badge>Dota 2</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="october">
              <Card className="bg-[#1a2030] border-none">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <span className="text-blue-300">10-13:10-13: Tactical Ops Masters</span>
                      <Badge>CS:GO</Badge>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-blue-300">22-24: Fighting Game Championship</span>
                      <Badge>Street Fighter V</Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

