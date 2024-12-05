'use client'

import { useState } from 'react'
import Link from 'next/link'
import { UserPlus, Mail, Lock, User, Gamepad } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [favoriteGame, setFavoriteGame] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the sign-up logic
    console.log('Sign-up attempt with:', { username, email, password, favoriteGame })
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Card className="bg-[#1a2030] border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-100">Sign Up</CardTitle>
            <CardDescription className="text-center text-gray-400">
              Join the ultimate e-sports gaming community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  Username
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-[#2a3040] block w-full pl-10 border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Choose your username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#2a3040] block w-full pl-10 border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#2a3040] block w-full pl-10 border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Create a strong password"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="favoriteGame" className="block text-sm font-medium text-gray-300">
                  Favorite Game
                </label>
                <Select onValueChange={setFavoriteGame}>
                  <SelectTrigger className="bg-[#2a3040] border-gray-600 text-gray-400">
                    <SelectValue placeholder="Select your favorite game" />
                  </SelectTrigger>
                  <SelectContent className=' text-white bg-[#2a3040] border-gray-600 rounded-md'>
                    <SelectItem value="fortnite">Fortnite</SelectItem>
                    <SelectItem value="csgo">CS:GO</SelectItem>
                    <SelectItem value="lol">League of Legends</SelectItem>
                    <SelectItem value="valorant">Valorant</SelectItem>
                    <SelectItem value="dota2">Dota 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <UserPlus className="h-5 w-5 mr-2" />
                  Create Account
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-gray-400 mt-2">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Gaming-themed decorative elements
      <div className="absolute bottom-0 left-0 w-screen overflow-hidden z-0">
        <svg className="w-screen h-24" viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L60 45.8333C120 41.6667 240 33.3333 360 29.1667C480 25 600 25 720 33.3333C840 41.6667 960 58.3333 1080 62.5C1200 66.6667 1320 58.3333 1380 54.1667L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

      {/* Gaming icons */}
      <div className="absolute top-10 left-10 text-blue-500 opacity-20 transform rotate-12">
        <Gamepad size={48} />
      </div>
      <div className="absolute bottom-10 right-10 text-purple-500 opacity-20 transform -rotate-12">
        <Gamepad size={48} />
      </div>
    </div>
  )
}

