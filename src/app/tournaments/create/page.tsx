'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreateTournament() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create Tournament</h1>
      
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Tournament Details</CardTitle>
            <CardDescription>Fill in the information for your new tournament</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="tournamentName" className="text-sm font-medium">Tournament Name</label>
              <Input id="tournamentName" placeholder="Enter tournament name" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">Description</label>
              <Textarea id="description" placeholder="Describe your tournament" required />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="startDate" className="text-sm font-medium">Start Date</label>
                {/* <DatePicker date={startDate} setDate={setStartDate} /> */}
              </div>
              <div className="space-y-2">
                <label htmlFor="endDate" className="text-sm font-medium">End Date</label>
                {/* <DatePicker date={endDate} setDate={setEndDate} /> */}
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="format" className="text-sm font-medium">Tournament Format</label>
              <Select>
                <SelectTrigger>
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
              <label htmlFor="prizePool" className="text-sm font-medium">Prize Pool</label>
              <Input id="prizePool" type="number" placeholder="Enter prize pool amount" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="maxTeams" className="text-sm font-medium">Maximum Teams</label>
              <Input id="maxTeams" type="number" placeholder="Enter maximum number of teams" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Create Tournament</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

