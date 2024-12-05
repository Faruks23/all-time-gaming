'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Trophy, Users, DollarSign, FileText, Gamepad } from 'lucide-react'
import { DatePicker } from "@/components/ui/date-picker"

export default function CreateTournament() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e17] to-[#1a2030] text-white">
      {/* Hero Section */}
      <div className="relative h-64 mb-8">
        <Image
          src="/placeholder.svg?height=400&width=1920&text=Create+Tournament"
          alt="Create Tournament Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Create Your Tournament
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="bg-[#1a2030] border-none overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"></div>
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
          <form onSubmit={handleSubmit} className="relative">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Tournament Details</CardTitle>
              <CardDescription className="text-center text-gray-400">Fill in the information for your new tournament</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="tournamentName" className="text-sm font-medium text-gray-300 flex items-center">
                  <Trophy className="w-4 h-4 mr-2" />
                  Tournament Name
                </label>
                <Input id="tournamentName" placeholder="Enter tournament name" required className="bg-[#2a3040] border-gray-700 text-white placeholder-gray-500" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-gray-300 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Description
                </label>
                <Textarea id="description" placeholder="Describe your tournament" required className="bg-[#2a3040] border-gray-700 text-white placeholder-gray-500" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="startDate" className="text-sm font-medium text-gray-300 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Start Date
                  </label>
                  <DatePicker date={startDate} setDate={setStartDate} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="endDate" className="text-sm font-medium text-gray-300 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    End Date
                  </label>
                  <DatePicker date={endDate} setDate={setEndDate} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="format" className="text-sm font-medium text-gray-300 flex items-center">
                  <Gamepad className="w-4 h-4 mr-2" />
                  Tournament Format
                </label>
                <Select>
                  <SelectTrigger className="bg-[#2a3040] border-gray-700 text-white">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="singleElimination">Single Elimination</SelectItem>
                    <SelectItem value="doubleElimination">Double Elimination</SelectItem>
                    <SelectItem value="roundRobin">Round Robin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="prizePool" className="text-sm font-medium text-gray-300 flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Prize Pool
                </label>
                <Input id="prizePool" type="number" placeholder="Enter prize pool amount" required className="bg-[#2a3040] border-gray-700 text-white placeholder-gray-500" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="maxTeams" className="text-sm font-medium text-gray-300 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Maximum Teams
                </label>
                <Input id="maxTeams" type="number" placeholder="Enter maximum number of teams" required className="bg-[#2a3040] border-gray-700 text-white placeholder-gray-500" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
                Create Tournament
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

