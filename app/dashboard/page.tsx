"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const earningsData = [
  { month: "Jan", earnings: 500 },
  { month: "Feb", earnings: 1200 },
  { month: "Mar", earnings: 900 },
  { month: "Apr", earnings: 2100 },
  { month: "May", earnings: 1600 },
  { month: "Jun", earnings: 2800 },
]

export default function Dashboard() {

  const [userGigs, setUserGigs] = useState<any[]>([])

  useEffect(() => {
    const gigs =
      JSON.parse(localStorage.getItem("userGigs") || "[]")
    setUserGigs(gigs)
  }, [])

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Welcome back, User 👋
        </h1>
        <p className="text-zinc-400">
          Here's what's happening with your SideHustl today.
        </p>
        <br/>

        <Link href="/buyer">
          <button className="bg-purple-600 px-5 py-2 rounded-lg">
            Switch to Buyer Mode
          </button>
        </Link>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-zinc-400">Total Earnings</p>
          <h2 className="text-2xl font-bold mt-2">₹8,450</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-zinc-400">Active Gigs</p>
          <h2 className="text-2xl font-bold mt-2">
            {userGigs.length + 3}
          </h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-zinc-400">Orders Completed</p>
          <h2 className="text-2xl font-bold mt-2">18</h2>
        </div>

      </div>

      {/* GRAPH */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 mb-10">
        <h2 className="text-xl font-semibold mb-6">
          Earnings Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={earningsData}>
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line type="monotone" dataKey="earnings" stroke="#a855f7" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* YOUR GIGS */}
      <h2 className="text-xl font-semibold mb-6">
        Your Active Gigs
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {/* Default gigs */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h3 className="font-semibold">Logo Design Service</h3>
          <p className="text-zinc-400 mt-2">₹300 per order</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h3 className="font-semibold">Coding Assignment Help</h3>
          <p className="text-zinc-400 mt-2">₹500 per order</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h3 className="font-semibold">PPT Design</h3>
          <p className="text-zinc-400 mt-2">₹250 per order</p>
        </div>

        {/* New gigs created by user */}
        {userGigs.map((gig, index) => (
         <div
    key={index}
    onClick={() => window.location.href = `/gig/${index}`}
    className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 cursor-pointer hover:border-purple-500 transition"
  >
            <h3 className="font-semibold">{gig.title}</h3>
            <p className="text-zinc-400 mt-2">₹{gig.price}</p>
          </div>
        ))}

      </div>

      <br/>

      <h2 className="text-xl font-semibold mb-6">
        Add a new gig
      </h2>

      <Link href="/create-gig">
        <button className="bg-purple-600 px-5 py-3 rounded-lg">
          Create Gig
        </button>
      </Link>

    </main>
  )
}