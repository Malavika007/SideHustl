"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = () => {
    // Fake login for prototype
    router.push("/dashboard")
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">

      <div className="bg-zinc-900 p-10 rounded-xl w-[400px] border border-zinc-800">

        <h1 className="text-2xl font-bold mb-6">
          Sign in to SideHustl
        </h1>

        <input
          type="text"
          placeholder="Student ID"
          className="w-full mb-4 p-3 bg-zinc-800 rounded-lg outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 bg-zinc-800 rounded-lg outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-500 transition py-3 rounded-lg font-semibold"
        >
          Sign In
        </button>

        <p className="text-zinc-400 mt-6 text-sm">
          New here?{" "}
          <Link href="/signup" className="text-purple-400">
            Join now
          </Link>
        </p>

      </div>

    </main>
  )
}