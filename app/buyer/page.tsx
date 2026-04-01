"use client"

const orders = [
  {
    service: "Modern Logo Design",
    seller: "Ananya",
    status: "In Progress",
    price: 300,
  },
  {
    service: "Coding Assignment Help",
    seller: "Arjun",
    status: "Delivered",
    price: 500,
  },
  {
    service: "PPT Design",
    seller: "Megha",
    status: "Completed",
    price: 250,
  },
]

export default function BuyerDashboard() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Welcome, User 🛒
        </h1>
        <p className="text-zinc-400">
          Manage your purchases and orders.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-zinc-400">Total Orders</p>
          <h2 className="text-2xl font-bold mt-2">7</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-zinc-400">Completed</p>
          <h2 className="text-2xl font-bold mt-2">5</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <p className="text-zinc-400">Total Spent</p>
          <h2 className="text-2xl font-bold mt-2">₹2,150</h2>
        </div>

      </div>

      {/* ORDERS LIST */}
      <h2 className="text-xl font-semibold mb-6">
        My Orders
      </h2>

      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{order.service}</h3>
              <p className="text-zinc-400 text-sm">
                Seller: {order.seller}
              </p>
            </div>

            <div className="text-right">
              <p className="text-purple-400 font-medium">
                {order.status}
              </p>
              <p className="text-zinc-300">
                ₹{order.price}
              </p>
            </div>
          </div>
        ))}
      </div>

    </main>
  )
}