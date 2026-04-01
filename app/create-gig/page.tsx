"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateGig() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

const handleSubmit = (e: any) => {
  e.preventDefault()

  const newGig = {
    title,
    price,
    category,
    description,
  }

  const existingGigs =
    JSON.parse(localStorage.getItem("userGigs") || "[]")

  existingGigs.push(newGig)

  localStorage.setItem("userGigs", JSON.stringify(existingGigs))

  alert("Gig Published Successfully!")

  router.push("/dashboard")
}

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex justify-center p-10">

      <div className="w-[700px] bg-zinc-900 p-10 rounded-xl border border-zinc-800">

        <h1 className="text-3xl font-bold mb-8">
          Create a New Gig
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* TITLE */}
          <div>
            <label className="text-sm text-zinc-400">
              Gig Title
            </label>
            <input
              type="text"
              placeholder="I will design a modern logo..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-2 p-3 bg-zinc-800 rounded-lg outline-none"
              required
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="text-sm text-zinc-400">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-2 p-3 bg-zinc-800 rounded-lg"
              required
            >
              <option value="">Select category</option>
              <option>Design</option>
              <option>Programming</option>
              <option>Tutoring</option>
              <option>Presentation</option>
            </select>
          </div>

          {/* PRICE */}
          <div>
            <label className="text-sm text-zinc-400">
              Price (₹)
            </label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mt-2 p-3 bg-zinc-800 rounded-lg outline-none"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm text-zinc-400">
              Description
            </label>
            <textarea
              placeholder="Describe your service..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 p-3 bg-zinc-800 rounded-lg outline-none h-32"
              required
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="text-sm text-zinc-400">
              Gig Image
            </label>
            <input
              type="file"
              className="w-full mt-2"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 transition py-3 rounded-lg font-semibold"
          >
            Publish Gig
          </button>

        </form>

      </div>

    </main>
  )
}