import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const teamMembers = [
  { id: 1, name: "John Doe", role: "Team Captain", avatar: "/placeholder.svg" },
  { id: 2, name: "Jane Smith", role: "Support", avatar: "/placeholder.svg" },
  { id: 3, name: "Mike Johnson", role: "Sniper", avatar: "/placeholder.svg" },
  { id: 4, name: "Emily Brown", role: "Strategist", avatar: "/placeholder.svg" },
]

export default function TeamManagement() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Team Management</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Team Overview</CardTitle>
          <CardDescription>Manage your team and invite new members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold">Team Awesome</h3>
              <p className="text-sm text-gray-600">Created on Jan 1, 2024</p>
            </div>
            <Button className="mt-2 md:mt-0">Edit Team Profile</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardContent className="flex flex-col items-center p-4">
                  <Avatar className="w-20 h-20 mb-2">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Invite New Member</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Enter email address" type="email" className="flex-grow" />
            <Button type="submit">Send Invitation</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

