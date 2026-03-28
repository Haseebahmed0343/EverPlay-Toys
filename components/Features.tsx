'use client'

import { Truck, Shield, Headphones, Award } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All toys are safety tested',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'We\'re here to help anytime',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Award,
      title: 'Best Quality',
      description: 'Premium toys guaranteed',
      color: 'from-orange-400 to-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
