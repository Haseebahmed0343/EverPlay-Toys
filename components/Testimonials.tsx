'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mother of 2',
      rating: 5,
      text: 'EverPlayToys has been a lifesaver! The quality of toys is exceptional and my kids absolutely love them. The educational toys have really helped with their development.',
      avatar: '👩'
    },
    {
      name: 'Michael Chen',
      role: 'Father of 3',
      rating: 5,
      text: 'Amazing selection and fast delivery! I appreciate the safety standards and the variety of age-appropriate toys. My children play with these toys every day.',
      avatar: '👨'
    },
    {
      name: 'Emily Davis',
      role: 'Grandmother',
      rating: 5,
      text: 'Perfect gifts for my grandchildren! The customer service is outstanding and the toys bring so much joy. I highly recommend EverPlayToys to everyone.',
      avatar: '👵'
    },
    {
      name: 'David Wilson',
      role: 'Father of 1',
      rating: 5,
      text: 'Best toy store online! Great prices, excellent quality, and the toys are exactly as described. My daughter\'s face lights up every time we get a new toy.',
      avatar: '👨‍🦰'
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">
            What Parents Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Trusted by thousands of happy families
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-blue-200 opacity-50">
              <Quote className="h-16 w-16" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              {/* Avatar */}
              <div className="text-6xl mb-4">
                {testimonials[activeIndex].avatar}
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl text-gray-700 mb-6 italic max-w-2xl mx-auto">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author */}
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-blue-600">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-8 bg-blue-600'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
            <div className="text-gray-600">Products Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
