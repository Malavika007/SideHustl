"use client"
export const dynamic = "force-dynamic"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

const defaultGigs = [
  {
    id: 1,
    title: "I will design a modern logo",
    seller: "Ananya",
    price: 300,
    rating: 4.9,
    image: "/images/logo.jpg"
  },
  {
    id: 2,
    title: "I will tutor you in calculus",
    seller: "Rahul",
    price: 400,
    rating: 4.8,
    image: "/images/tutor.jpg"
  },
  {
    id: 3,
    title: "I will help with coding assignments",
    seller: "Arjun",
    price: 500,
    rating: 5.0,
    image: "/images/code.jpg"
  },
  {
    id: 4,
    title: "I will create professional PPT slides",
    seller: "Megha",
    price: 250,
    rating: 4.7,
    image: "/images/ppt.jpg"
  }
]

export default function Gigs() {
  const [allGigs, setAllGigs] = useState<any[]>([])
  const searchParams = useSearchParams()

  const search = searchParams.get("search")?.toLowerCase() || ""

  useEffect(() => {
    const storedGigs =
      JSON.parse(localStorage.getItem("userGigs") || "[]")

    const formattedUserGigs = storedGigs.map((gig: any, index: number) => ({
      id: index + 100,
      title: gig.title,
      seller: "You",
      price: gig.price,
      rating: 5.0,
      image: "/images/code.jpg"
    }))

    setAllGigs([...defaultGigs, ...formattedUserGigs])
  }, [])

  const filteredGigs = allGigs.filter((gig) =>
    gig.title.toLowerCase().includes(search) ||
    gig.seller.toLowerCase().includes(search)
  )

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-10 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold mb-2">
        Explore Services
      </h1>

      {search && (
        <p className="text-zinc-400 mb-6">
          Showing results for: <span className="text-purple-400">{search}</span>
        </p>
      )}

      {/* FILTER BAR */}
      <div className="flex gap-4 mb-10">

        <select className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded">
          <option>Category</option>
          <option>Design</option>
          <option>Tutoring</option>
          <option>Programming</option>
        </select>

        <select className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded">
          <option>Price</option>
          <option>₹0 - ₹300</option>
          <option>₹300 - ₹600</option>
        </select>

        <select className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded">
          <option>Rating</option>
          <option>4★ & above</option>
          <option>3★ & above</option>
        </select>

      </div>

      {/* GIG GRID */}
      <div className="grid grid-cols-4 gap-6">

        {filteredGigs.map((gig) => (
          <Link key={gig.id} href={`/gig/${gig.id}`}>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:bg-zinc-800 transition cursor-pointer">

              <img
                src={gig.image}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">

                <p className="text-sm text-zinc-400">
                  {gig.seller}
                </p>

                <h2 className="mt-1 font-medium">
                  {gig.title}
                </h2>

                <div className="flex justify-between items-center mt-4">

                  <p className="text-yellow-400">
                    ⭐ {gig.rating}
                  </p>

                  <p className="font-semibold">
                    ₹{gig.price}
                  </p>

                </div>

              </div>

            </div>

          </Link>
        ))}

      </div>

      {filteredGigs.length === 0 && (
        <p className="mt-10 text-zinc-400">
          No services found.
        </p>
      )}

    </main>
  )
}