'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { User, Mail, Lock, Trophy, Gamepad, DollarSign, Settings, Edit2, Camera } from 'lucide-react'

export default function UserProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [username, setUsername] = useState('ProGamer123')
  const [email, setEmail] = useState('progamer123@example.com')

  const achievements = [
    { id: 1, name: "Tournament Victor", description: "Won first place in Nexus Champions League", icon: Trophy },
    { id: 2, name: "Sharpshooter", description: "Achieved 100 headshots in Tactical Ops Masters", icon: Gamepad },
    { id: 3, name: "Team Captain", description: "Led a team to victory in Battle Royale Showdown", icon: User },
  ]

  const recentActivity = [
    { id: 1, action: "Participated in Rocket League Cup", date: "2024-06-15" },
    { id: 2, action: "Purchased Pro Gaming Headset", date: "2024-06-10" },
    { id: 3, action: "Completed 10 player challenges", date: "2024-06-05" },
  ]

  return (
    <div className="bg-[#0a0e17] text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920&text=User+Profile+Background" alt="User Profile Background" layout="fill" objectFit="cover" className="opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e17] z-10"></div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image src="/placeholder.svg?height=200&width=200&text=User+Avatar" alt="User Avatar" width={200} height={200} className="rounded-full border-4 border-blue-500" />
              <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Camera size={24} />
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {username}
            </h1>
            <p className="text-xl text-blue-200 mb-4">Level 42 | Diamond Rank</p>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 inline-flex items-center"
            >
              <Edit2 size={20} className="mr-2" />
              {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-16 bg-[#1a2030]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Account Information */}
            <div className="bg-[#2a3040] rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Account Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User size={24} className="mr-2 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Username</p>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-[#3a4050] text-white px-2 py-1 rounded"
                      />
                    ) : (
                      <p>{username}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail size={24} className="mr-2 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    {isEditing ? (
                      <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#3a4050] text-white px-2 py-1 rounded"
                      />
                    ) : (
                      <p>{email}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <Lock size={24} className="mr-2 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Password</p>
                    <Link href="/change-password" className="text-blue-400 hover:underline">Change Password</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-[#2a3040] rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start">
                    <achievement.icon size={24} className="mr-2 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{achievement.name}</p>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/achievements" className="mt-4 text-blue-400 hover:underline block">View All Achievements</Link>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#2a3040] rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <Gamepad size={24} className="mr-2 text-green-400 flex-shrink-0" />
                    <div>
                      <p>{activity.action}</p>
                      <p className="text-sm text-gray-400">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/activity-log" className="mt-4 text-blue-400 hover:underline block">View Full Activity Log</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-16 bg-[#0a0e17]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Game Statistics */}
            <div className="bg-[#2a3040] rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Game Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#3a4050] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Total Matches</p>
                  <p className="text-2xl font-bold">1,337</p>
                </div>
                <div className="bg-[#3a4050] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Win Rate</p>
                  <p className="text-2xl font-bold">68%</p>
                </div>
                <div className="bg-[#3a4050] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Total Kills</p>
                  <p className="text-2xl font-bold">4,200</p>
                </div>
                <div className="bg-[#3a4050] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">K/D Ratio</p>
                  <p className="text-2xl font-bold">2.1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}