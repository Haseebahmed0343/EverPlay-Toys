'use client'

import { useState } from 'react'
import { Send, Gift } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setEmail('')
        setSubscribed(false)
      }, 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-white text-6xl">🎈</div>
        <div className="absolute top-20 right-20 text-white text-5xl">🎁</div>
        <div className="absolute bottom-10 left-1/4 text-white text-7xl">⭐</div>
        <div className="absolute bottom-20 right-1/3 text-white text-6xl">🎨</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Gift className="h-10 w-10 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Toy Club!
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Subscribe to get 10% off your first order, exclusive deals, and early access to new toys
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {subscribed ? (
                  <>
                    <span>✓ Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-2">🎁</div>
              <h3 className="font-bold text-lg mb-1">10% Off</h3>
              <p className="text-blue-50 text-sm">First order discount</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-lg mb-1">Early Access</h3>
              <p className="text-blue-50 text-sm">New products first</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-2">🎉</div>
              <h3 className="font-bold text-lg mb-1">Exclusive Deals</h3>
              <p className="text-blue-50 text-sm">Members only offers</p>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-blue-100 text-sm mt-8">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
