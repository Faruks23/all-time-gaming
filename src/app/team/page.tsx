import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'
import { Users, Shield, Crosshair, Brain, Plus, Edit2, Trophy, Calendar, Star, Zap } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  { id: 1, name: "John Doe", role: "Team Captain", avatar: "/placeholder.svg", icon: Shield },
  { id: 2, name: "Jane Smith", role: "Support", avatar: "/placeholder.svg", icon: Users },
  { id: 3, name: "Mike Johnson", role: "Sniper", avatar: "/placeholder.svg", icon: Crosshair },
  { id: 4, name: "Emily Brown", role: "Strategist", avatar: "/placeholder.svg", icon: Brain },
]

const teamAchievements = [
  { id: 1, name: "Tournament Victor", description: "Won the Nexus Champions League", icon: Trophy },
  { id: 2, name: "Undefeated Streak", description: "10 consecutive wins in ranked matches", icon: Zap },
  { id: 3, name: "Community Favorite", description: "Voted 'Most Popular Team' by fans", icon: Star },
]

const upcomingTournaments = [
  { id: 1, name: "Cyber Showdown 2024", date: "Aug 15-20, 2024", registrationProgress: 75 },
  { id: 2, name: "Global Gaming League", date: "Sep 5-7, 2024", registrationProgress: 40 },
]

export default function TeamManagement() {
  return (
    <div className="bg-[#0a0e17] min-h-screen text-gray-100 mb-10">
      <div className="container mx-auto px-4 py-8">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur-sm"></div>
          <Card className="relative bg-[#1a2030] border-none overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Team Management
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Manage your elite squad and dominate the competition
                  </CardDescription>
                </div>
                <Image src="/placeholder.svg" alt="Team Logo" width={80} height={80} className="rounded-full bg-[#2a3040] p-2" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-300">Team Awesome</h3>
                  <p className="text-sm text-gray-400">Forged in battle since Jan 1, 2024</p>
                </div>
                <Button className="mt-4 md:mt-0 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transition-all duration-300">
                  <Edit2 size={18} className="mr-2" />
                  Edit Team Profile
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                  <Card key={member.id} className="bg-[#2a3040] border-none transform hover:scale-105 transition-all duration-300">
                    <CardContent className="flex flex-col items-center p-6">
                      <Avatar className="w-24 h-24 mb-4 ring-2 ring-blue-500 ring-offset-2 ring-offset-[#2a3040]">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-bold text-lg mb-1 text-blue-300">{member.name}</h4>
                      <p className="text-sm text-gray-400 mb-3 flex items-center">
                        <member.icon size={16} className="mr-1" />
                        {member.role}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Team Achievements Section */}
        <Card className="bg-[#1a2030] border-none mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Team Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {teamAchievements.map((achievement) => (
                <div key={achievement.id} className="bg-[#2a3040] p-4 rounded-lg flex items-center space-x-4">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300">{achievement.name}</h4>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tournaments Section */}
        <Card className="bg-[#1a2030] border-none mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Upcoming Tournaments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTournaments.map((tournament) => (
                <div key={tournament.id} className="bg-[#2a3040] p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-blue-300">{tournament.name}</h4>
                    <Badge variant="secondary" className="bg-blue-500 text-white">
                      <Calendar size={14} className="mr-1" />
                      {tournament.date}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={tournament.registrationProgress} className="flex-grow" />
                    <span className="text-sm text-gray-400">{tournament.registrationProgress}% Registered</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Recruit New Talent Section */}
        <Card className="bg-[#1a2030] border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Recruit New Talent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col md:flex-row gap-4">
              <Input 
                placeholder="Enter gamer tag or email" 
                type="text" 
                className="flex-grow bg-[#2a3040] border-none text-gray-100 placeholder-gray-500"
              />
              <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300">
                <Plus size={18} className="mr-2" />
                Send Invitation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

