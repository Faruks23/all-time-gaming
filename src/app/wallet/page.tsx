'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, 
    DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const transactions = [
  { id: 1, date: '2024-06-01', description: 'Tournament winnings', amount: 500 },
  { id: 2, date: '2024-05-28', description: 'Purchase: Gaming Coins', amount: -100 },
  { id: 3, date: '2024-05-25', description: 'Deposit', amount: 200 },
  { id: 4, date: '2024-05-20', description: 'Withdrawal', amount: -300 },
]

export default function VirtualWallet() {
  const [balance, setBalance] = useState(1000) // Example balance
  const [amount, setAmount] = useState('')

  const handleDeposit = () => {
    if (amount && !isNaN(Number(amount))) {
      setBalance(balance + Number(amount))
      setAmount('')
      // Here you would typically make an API call to update the balance
    }
  }

  const handleWithdraw = () => {
    if (amount && !isNaN(Number(amount)) && Number(amount) <= balance) {
      setBalance(balance - Number(amount))
      setAmount('')
      // Here you would typically make an API call to update the balance
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Virtual Wallet</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Balance</CardTitle>
            <CardDescription>Your current balance in BDT</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">৳{balance.toFixed(2)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input 
                type="number" 
                placeholder="Enter amount" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button onClick={handleDeposit}>Deposit</Button>
            </div>
            <div className="flex space-x-2">
              <Input 
                type="number" 
                placeholder="Enter amount" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button onClick={handleWithdraw} variant="outline">Withdraw</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className="text-right">৳{transaction.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Purchase Gaming Coins</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Purchase Gaming Coins</DialogTitle>
              <DialogDescription>
                Convert your wallet balance to gaming coins for use in tournaments and challenges.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="coins" className="text-right">
                  Coins
                </label>
                <Input id="coins" type="number" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Purchase</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

