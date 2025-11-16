import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-200 to-amber-200 flex flex-col items-center p-8">
      <header className="w-full max-w-5xl flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-rose-700">Sweetify 🍬</h1>
        <nav className="flex gap-4 text-lg font-medium">
          <Link to="/login" className="hover:text-rose-700 transition">Login</Link>
          <Link to="/register" className="hover:text-rose-700 transition">Register</Link>
          <Link to="/dashboard" className="hover:text-rose-700 transition">Dashboard</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center mt-10">
        <h2
          className={`text-5xl font-extrabold text-rose-800 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Welcome to the World of Sweets 🍭
        </h2>

        <p
          className={`mt-6 text-xl max-w-2xl text-center text-rose-900 transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Discover, purchase, and manage delicious sweets in a beautiful, smooth, and modern experience.
        </p>

        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          <FeatureCard
            title="🍬 Explore Sweets"
            text="Browse a rich variety of tasty sweets backed by your Node API."
          />
          <FeatureCard
            title="🛍️ Purchase Instantly"
            text="Buy sweets with one click — auto-disable when out of stock."
          />
          <FeatureCard
            title="🛠️ Admin Controls"
            text="Admins can add, update, restock and delete sweets easily."
          />
        </div>

        <Link
          to="/dashboard"
          className="mt-14 bg-rose-600 hover:bg-rose-700 transition text-white px-8 py-3 rounded-xl shadow-lg text-lg font-semibold"
        >
          Enter Dashboard →
        </Link>
      </main>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-rose-100 text-center hover:scale-105 transition-all cursor-pointer">
      <h3 className="text-2xl font-semibold text-rose-700 mb-2">{title}</h3>
      <p className="text-rose-800 text-lg">{text}</p>
    </div>
  );
}
