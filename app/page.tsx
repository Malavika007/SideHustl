"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const services = [
  "Logo Design",
  "Tutoring",
  "Coding Help",
  "Presentation Design",
  "Video Editing",
  "Content Writing"
]

const popularServices = [
  {
    title: "Modern Logo Design",
    seller: "Ananya",
    price: 300,
    image: "/images/logo.png"
  },
  {
    title: "Math Tutoring",
    seller: "Rahul",
    price: 400,
    image: "/images/tutor.png"
  },
  {
    title: "Coding Assignment Help",
    seller: "Arjun",
    price: 500,
    image: "/images/code.png"
  },
  {
    title: "Professional PPT Design",
    seller: "Megha",
    price: 250,
    image: "/images/ppt.png"
  }
]

export default function Home() {
  const router = useRouter()
  const [search, setSearch] = useState("")

  const handleSearch = () => {
    if (!search.trim()) {
      router.push("/gigs")
      return
    }

    router.push(`/gigs?search=${search}`)
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HEADER */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-zinc-800">

        <h1 className="text-2xl font-bold text-purple-400">
          SideHustl
        </h1>

        <div className="flex items-center gap-6 text-sm">

          <Link href="/gigs">Explore</Link>
          <Link href="/buyer">Buying</Link>

          <select className="bg-zinc-900 border border-zinc-700 px-3 py-1 rounded">
            <option>EN / INR</option>
            <option>EN / USD</option>
          </select>

          <Link href="/login">Sign In</Link>

          <Link href="/signup">
            <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg">
              Join
            </button>
          </Link>

        </div>

      </header>

      {/* HERO SEARCH */}
      <section className="text-center py-24 px-6">

        <h2 className="text-5xl font-bold mb-6">
          Find the perfect service
        </h2>

        <p className="text-zinc-400 mb-8">
          Discover talented students offering services across campus
        </p>

        <div className="flex justify-center">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for services..."
            className="w-[500px] bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-l-lg outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-purple-500 px-6 rounded-r-lg hover:bg-purple-600"
          >
            Search
          </button>

        </div>

      </section>

      {/* SERVICES LIST */}
      <section className="px-10 mb-16">

        <h3 className="text-2xl font-semibold mb-6">
          Services We Offer
        </h3>

        <div className="flex gap-4 flex-wrap">

          {services.map(service => (
            <div
              key={service}
              onClick={() => router.push(`/gigs?search=${service}`)}
              className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-lg hover:bg-zinc-800 cursor-pointer"
            >
              {service}
            </div>
          ))}

        </div>

      </section>

      {/* POPULAR SERVICES */}
      <section className="px-10 mb-20">

        <h3 className="text-2xl font-semibold mb-6">
          Popular Services
        </h3>

        <div className="flex gap-6 overflow-x-auto pb-4">

          {popularServices.map((gig, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:bg-zinc-800"
            >
              <img src={gig.image} className="h-32 w-full object-cover rounded mb-3" />

              <p className="text-sm text-zinc-400">
                {gig.seller}
              </p>

              <h4 className="font-medium mt-1">
                {gig.title}
              </h4>

              <p className="mt-3 font-semibold">
                From ₹{gig.price}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-10 mb-20">

        <h3 className="text-2xl font-semibold mb-8">
          Why SideHustl?
        </h3>

        <div className="grid grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">
              Earn While Studying
            </h4>
            <p className="text-zinc-400 text-sm">
              Students can monetize their skills and gain experience.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">
              Affordable Services
            </h4>
            <p className="text-zinc-400 text-sm">
              Get quality services at student-friendly prices.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">
              Campus Community
            </h4>
            <p className="text-zinc-400 text-sm">
              Connect with talented people within your campus.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 px-10 py-8 text-sm text-zinc-400">

        <div className="flex justify-between">

          <p>© 2026 SideHustl</p>

          <div className="flex gap-6">
            <p>About</p>
            <p>Support</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>

        </div>

      </footer>

    </main>
  )
}