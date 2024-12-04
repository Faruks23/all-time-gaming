'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sword, Users, Clock, DollarSign, Trophy, Zap, Star, Filter, Search, ChevronDown, Gamepad, ArrowRight, Flame, Target, ShieldCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Textarea } from '@/components/ui/textarea'

const challenges = [
  {
    id: 1,
    title: "1v1 Duel Masters",
    description: "Test your skills in intense 1v1 battles across multiple game titles.",
    players: "2",
    duration: "1 hour",
    prize: "$100",
    image: "/placeholder.svg?height=200&width=400&text=1v1+Duel",
    difficulty: "Medium",
    category: "PvP",
    gameTitle: "Multiple",
    registeredPlayers: 64,
    maxPlayers: 128
  },
  {
    id: 2,
    title: "Team Tactical Showdown",
    description: "Coordinate with your team to outmaneuver and outplay your opponents.",
    players: "5v5",
    duration: "2 hours",
    prize: "$500",
    image: "/placeholder.svg?height=200&width=400&text=Team+Tactical",
    difficulty: "Hard",
    category: "Team",
    gameTitle: "CS:GO",
    registeredPlayers: 45,
    maxPlayers: 64
  },
  {
    id: 3,
    title: "Battle Royale Blitz",
    description: "Be the last player standing in this fast-paced battle royale challenge.",
    players: "100",
    duration: "30 mins",
    prize: "$250",
    image: "/placeholder.svg?height=200&width=400&text=Battle+Royale",
    difficulty: "Hard",
    category: "Battle Royale",
    gameTitle: "Fortnite",
    registeredPlayers: 87,
    maxPlayers: 100
  },
  {
    id: 4,
    title: "Speed Run Challenge",
    description: "Race against time to complete game objectives faster than your competitors.",
    players: "Unlimited",
    duration: "Varies",
    prize: "$150",
    image: "/placeholder.svg?height=200&width=400&text=Speed+Run",
    difficulty: "Easy",
    category: "Solo",
    gameTitle: "Minecraft",
    registeredPlayers: 203,
    maxPlayers: 500
  },
  {
    id: 5,
    title: "MOBA Mayhem",
    description: "Showcase your strategic prowess in this intense MOBA showdown.",
    players: "5v5",
    duration: "45 mins",
    prize: "$300",
    image: "/placeholder.svg?height=200&width=400&text=MOBA+Mayhem",
    difficulty: "Hard",
    category: "Team",
    gameTitle: "League of Legends",
    registeredPlayers: 56,
    maxPlayers: 80
  },
  {
    id: 6,
    title: "Fighting Game Frenzy",
    description: "Prove your fighting game skills in this tournament-style challenge.",
    players: "32",
    duration: "3 hours",
    prize: "$200",
    image: "/placeholder.svg?height=200&width=400&text=Fighting+Game+Frenzy",
    difficulty: "Medium",
    category: "Tournament",
    gameTitle: "Street Fighter V",
    registeredPlayers: 28,
    maxPlayers: 32
  }
]

const leaderboard = [
  { rank: 1, name: "XxDarkLord99xX", points: 1500, avatar: "/placeholder.svg?height=50&width=50&text=Avatar", level: 50 },
  { rank: 2, name: "ProGamer2024", points: 1450, avatar: "/placeholder.svg?height=50&width=50&text=Avatar", level: 48 },
  { rank: 3, name: "NinjaWarrior", points: 1400, avatar: "/placeholder.svg?height=50&width=50&text=Avatar", level: 47 },
  { rank: 4, name: "PixelQueen", points: 1350, avatar: "/placeholder.svg?height=50&width=50&text=Avatar", level: 45 },
  { rank: 5, name: "EpicSniper", points: 1300, avatar: "/placeholder.svg?height=50&width=50&text=Avatar", level: 44 },
]

export default function ChallengePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [filteredChallenges, setFilteredChallenges] = useState(challenges)

  useEffect(() => {
    const filtered = challenges.filter(challenge => 
      challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || challenge.category === selectedCategory) &&
      (selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty)
    )
    setFilteredChallenges(filtered)
  }, [searchTerm, selectedCategory, selectedDifficulty])

  return (
    <div className="bg-[#0a0e17] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920&text=Epic+Gaming+Background" alt="Challenge Background" layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17] z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
              Epic Player Challenges
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">Prove your skills, climb the ranks, and claim legendary status!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                <Trophy className="mr-2 h-5 w-5" /> View Leaderboard
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Star className="mr-2 h-5 w-5" /> My Challenges
              </Button>
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Zap className="mr-2 h-5 w-5" /> Create Challenge
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Filter and Search */}
      <section className="py-8 bg-[#1a2030] sticky top-0 z-30 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 w-full md:w-auto">
              <Input 
                placeholder="Search challenges..." 
                className="bg-[#2a3040] border-none text-gray-100 placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <Select 
                value={selectedCategory}
                onValueChange={(value) => setSelectedCategory(value)}
              >
                <option value="all">All Categories</option>
                <option value="PvP">PvP</option>
                <option value="Team">Team</option>
                <option value="Solo">Solo</option>
                <option value="Battle Royale">Battle Royale</option>
                <option value="Tournament">Tournament</option>
              </Select>
              <Select 
                value={selectedDifficulty}
                onValueChange={(value) => setSelectedDifficulty(value)}
              >
                <option value="all">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </Select>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="whitespace-nowrap">
                      <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Apply additional filters</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges List */}
      <section className="py-16 bg-[#0a0e17]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Available Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChallenges.map((challenge) => (
              <Card key={challenge.id} className="bg-[#1a2030] border-none overflow-hidden transform hover:scale-105 transition-all duration-300 group">
                <div className="relative">
                  <Image src={challenge.image} alt={challenge.title} width={400} height={200} className="w-full" />
                  <Badge className="absolute top-2 right-2 bg-blue-600 text-white">
                    <Trophy className="mr-1" size={12} />
                    Featured
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2030] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">Quick Join</Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-300 flex items-center justify-between">
                    {challenge.title}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge variant="outline" className="ml-2">
                            <Gamepad className="mr-1" size={12} />
                            {challenge.gameTitle}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Game Title</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardTitle>
                  <CardDescription className="text-gray-400">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                    <span className="flex items-center"><Users size={16} className="mr-1" /> {challenge.players}</span>
                    <span className="flex items-center"><Clock size={16} className="mr-1" /> {challenge.duration}</span>
                    <span className="flex items-center"><DollarSign size={16} className="mr-1" /> {challenge.prize}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary" className="bg-[#2a3040]">{challenge.category}</Badge>
                    <Badge variant="secondary" className="bg-[#2a3040]">{challenge.difficulty}</Badge>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Registration Progress</span>
                      <span>{challenge.registeredPlayers}/{challenge.maxPlayers}</span>
                    </div>
                    <Progress value={(challenge.registeredPlayers / challenge.maxPlayers) * 100} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Sword size={20} className="mr-2" />
                    Join Challenge
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard and Create Challenge */}
      <section className="py-16 bg-[#1a2030]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Leaderboard */}
            <Card className="bg-[#2a3040] border-none overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Challenge Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((player) => (
                    <div key={player.rank} className="flex items-center justify-between bg-[#1a2030] p-3 rounded-lg hover:bg-[#252a3d] transition-colors duration-300">
                      <div className="flex items-center space-x-3">
                        <span className="font-bold text-xl w-8">{player.rank}</span>
                        <Image src={player.avatar} alt={player.name} width={40} height={40} className="rounded-full" />
                        <div>
                          <span className="font-semibold">{player.name}</span>
                          <div className="text-xs text-gray-400">Level {player.level}</div>
                        </div>
                      </div>
                      <span className="text-blue-400 font-bold">{player.points} pts</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Full Leaderboard</Button>
              </CardFooter>
            </Card>

            {/* Create Challenge */}
            <Card className="bg-[#2a3040] border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Create Your Own Challenge
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Have a unique idea? Set up your own challenge and invite others to compete!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input placeholder="Challenge Title" className="bg-[#1a2030] border-none" />
                  <Select  defaultValue='Select a Game'>
                    <option value="fortnite">Fortnite</option>
                    <option value="csgo">CS:GO</option>
                    <option value="lol">League of Legends</option>
                    <option value="valorant">Valorant</option>
                  </Select>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Prize Pool" className="bg-[#1a2030] border-none" />
                    <Input placeholder="Max Participants" className="bg-[#1a2030] border-none" />
                  </div>
                  <Textarea placeholder="Challenge Description" className="bg-[#1a2030] border-none" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  <Zap size={20} className="mr-2" />
                  Create Challenge
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0a0e17]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="rules">Rules</TabsTrigger>
                <TabsTrigger value="prizes">Prizes</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <Card className="bg-[#1a2030] border-none">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-blue-300">How do I join a challenge?</h3>
                        <p className="text-gray-400">Click on the "Join Challenge" button for the challenge you want to participate in. You'll be guided through the registration process.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-300">Can I participate in multiple challenges?</h3>
                        <p className="text-gray-400">Yes, you can join as many challenges as you like, as long as the schedules don't conflict.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="rules">
                <Card className="bg-[#1a2030] border-none">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-blue-300">What are the general rules for challenges?</h3>
                        <p className="text-gray-400">Each challenge has its own specific rules, but generally, fair play and sportsmanship are expected from all participants.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-300">How are disputes handled?</h3>
                        <p className="text-gray-400">We have a dedicated team to handle disputes. If you encounter any issues, please report them immediately through the challenge interface.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="prizes">
                <Card className="bg-[#1a2030] border-none">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-blue-300">How are prizes awarded?</h3>
                        <p className="text-gray-400">Prizes are typically awarded to the top performers in each challenge. The exact distribution depends on the specific challenge rules.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-300">Are there any taxes on prizes?</h3>
                        <p className="text-gray-400">Winners are responsible for any applicable taxes on their prizes. We recommend consulting with a tax professional for specific advice.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Prove Your Skills?</h2>
          <p className="text-xl mb-8 text-blue-100">Join a challenge now and start your journey to become a gaming legend!</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 transform hover:scale-105 transition-all duration-300">
            <Flame className="mr-2 h-5 w-5" /> Start Your First Challenge
          </Button>
        </div>
      </section>
    </div>
  )
}

