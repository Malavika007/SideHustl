"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const defaultGigs = [
  {
    id: 1,
    title: "I will design a modern logo",
    seller: "Ananya",
    price: 300,
    rating: 4.9,
    description: "Professional logo design for your brand.",
    image: "/images/logo.jpg"
  },
  {
    id: 2,
    title: "I will tutor you in calculus",
    seller: "Rahul",
    price: 400,
    rating: 4.8,
    description: "One-on-one calculus tutoring sessions.",
    image: "/images/tutor.jpg"
  },
  {
    id: 3,
    title: "I will help with coding assignments",
    seller: "Arjun",
    price: 500,
    rating: 5.0,
    description: "Help with programming assignments and debugging.",
    image: "/images/code.jpg"
  },
  {
    id: 4,
    title: "I will create professional PPT slides",
    seller: "Megha",
    price: 250,
    rating: 4.7,
    description: "Clean and modern presentation slides.",
    image: "/images/ppt.jpg"
  }
]

export default function GigPage() {
  const params = useParams()
  const [gig, setGig] = useState<any>(null)

  useEffect(() => {
    const storedGigs =
      JSON.parse(localStorage.getItem("userGigs") || "[]")

    const formattedUserGigs = storedGigs.map((gig: any, index: number) => ({
      id: index + 100,
      title: gig.title,
      seller: "You",
      price: gig.price,
      rating: 5.0,
      description: gig.description || "Student service listing.",
      image: "/images/code.jpg"
    }))

    const allGigs = [...defaultGigs, ...formattedUserGigs]

    const foundGig = allGigs.find(
      (g) => g.id.toString() === params.id
    )

    setGig(foundGig)
  }, [params.id])

  if (!gig) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        Loading gig...
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <div className="max-w-4xl mx-auto">

        <img
          src={gig.image}
          className="w-full h-80 object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold mb-2">
          {gig.title}
        </h1>

        <p className="text-zinc-400 mb-4">
          Seller: {gig.seller}
        </p>

        <p className="text-yellow-400 mb-6">
          ⭐ {gig.rating}
        </p>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 mb-6">
          <p className="text-zinc-300">
            {gig.description}
          </p>
        </div>

        <div className="flex justify-between items-center bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <div>
            <p className="text-zinc-400">Price</p>
            <h2 className="text-2xl font-bold">
              ₹{gig.price}
            </h2>
          </div>

          <button
            onClick={() => alert("Order placed successfully!")}
            className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500"
          >
            Order Now
          </button>
        </div>

      </div>

    </main>
  )
}