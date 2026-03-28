'use client'

import { Star, ShoppingCart, Heart } from 'lucide-react'
import { useState } from 'react'

export default function FeaturedProducts() {
  const [likedProducts, setLikedProducts] = useState<number[]>([])

  const products = [
    {
      id: 1,
      name: 'Super Hero Action Figure Set',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 156,
      image: '🦸‍♂️',
      badge: 'Best Seller',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Educational STEM Building Kit',
      price: 49.99,
      originalPrice: 64.99,
      rating: 4.9,
      reviews: 203,
      image: '🔧',
      badge: 'Top Rated',
      badgeColor: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Princess Castle Playset',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 128,
      image: '🏰',
      badge: 'Sale',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 4,
      name: 'Dinosaur Discovery Set',
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.6,
      reviews: 92,
      image: '🦕',
      badge: 'New',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 5,
      name: 'Musical Instrument Set',
      price: 59.99,
      originalPrice: 74.99,
      rating: 4.8,
      reviews: 178,
      image: '🎸',
      badge: 'Popular',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 6,
      name: 'Art & Craft Mega Pack',
      price: 44.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 245,
      image: '🎨',
      badge: 'Best Seller',
      badgeColor: 'bg-red-500'
    },
    {
      id: 7,
      name: 'Remote Control Car',
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.7,
      reviews: 167,
      image: '🚗',
      badge: 'Sale',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 8,
      name: 'Interactive Robot Buddy',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 312,
      image: '🤖',
      badge: 'Top Rated',
      badgeColor: 'bg-green-500'
    }
  ]

  const toggleLike = (productId: number) => {
    setLikedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Handpicked favorites that kids love and parents trust
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card group hover:scale-105 transform transition-all duration-300"
            >
              {/* Product Badge */}
              <div className="relative">
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                  {product.badge}
                </div>
                {calculateDiscount(product.originalPrice, product.price) > 0 && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full z-10">
                    -{calculateDiscount(product.originalPrice, product.price)}%
                  </div>
                )}
                
                {/* Like Button */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 mt-8 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all z-10"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      likedProducts.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>

                {/* Product Image */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 flex items-center justify-center h-64">
                  <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
