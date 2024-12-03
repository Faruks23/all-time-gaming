import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Link from 'next/link'

const performanceData = [
  { name: 'Jan', wins: 4, losses: 2 },
  { name: 'Feb', wins: 3, losses: 3 },
  { name: 'Mar', wins: 5, losses: 1 },
  { name: 'Apr', wins: 2, losses: 4 },
  { name: 'May', wins: 6, losses: 0 },
  { name: 'Jun', wins: 4, losses: 2 },
]

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="wins" fill="#4CAF50" />
                <Bar dataKey="losses" fill="#F44336" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tournaments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/tournaments/1" className="text-blue-600 hover:underline">Summer Showdown 2024</Link>
                <p className="text-sm text-gray-600">Starts in 3 days</p>
              </li>
              <li>
                <Link href="/tournaments/2" className="text-blue-600 hover:underline">Global Gaming League</Link>
                <p className="text-sm text-gray-600">Starts in 2 weeks</p>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>🏆 1st Place - Spring Cup 2024</li>
              <li>🥈 2nd Place - Regional Qualifiers</li>
              <li>🎖️ MVP - Charity Gaming Event</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Recent alerts and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>New challenge request from Team Alpha</span>
              <Button variant="outline" size="sm">View</Button>
            </li>
            <li className="flex items-center justify-between">
              <span>Tournament registration closing soon</span>
              <Button variant="outline" size="sm">Register</Button>
            </li>
            <li className="flex items-center justify-between">
              <span>Your team has a new message</span>
              <Button variant="outline" size="sm">Read</Button>
            </li>
          </ul>
        </CardContent>
      </Card>
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quick Actions</h2>
        <Button asChild>
          <Link href="/challenges/create">Create Challenge</Link>
        </Button>
      </div>
    </div>
  )
}

