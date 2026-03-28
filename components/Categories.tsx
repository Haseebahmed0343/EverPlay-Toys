'use client'

export default function Categories() {
  const categories = [
    {
      name: 'Action Figures',
      icon: '🦸',
      color: 'from-red-400 to-red-600',
      count: '150+ Toys'
    },
    {
      name: 'Educational',
      icon: '📚',
      color: 'from-green-400 to-green-600',
      count: '200+ Toys'
    },
    {
      name: 'Dolls',
      icon: '👧',
      color: 'from-pink-400 to-pink-600',
      count: '180+ Toys'
    },
    {
      name: 'Building Blocks',
      icon: '🧱',
      color: 'from-yellow-400 to-yellow-600',
      count: '120+ Toys'
    },
    {
      name: 'Outdoor Play',
      icon: '⚽',
      color: 'from-blue-400 to-blue-600',
      count: '90+ Toys'
    },
    {
      name: 'Puzzles',
      icon: '🧩',
      color: 'from-purple-400 to-purple-600',
      count: '160+ Toys'
    },
    {
      name: 'Musical',
      icon: '🎵',
      color: 'from-indigo-400 to-indigo-600',
      count: '75+ Toys'
    },
    {
      name: 'Art & Craft',
      icon: '🎨',
      color: 'from-orange-400 to-orange-600',
      count: '140+ Toys'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Explore our wide range of toys organized by category to find the perfect match for every child
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="card hover:scale-105 transform transition-all duration-300">
                <div className={`bg-linear-to-br ${category.color} p-8 text-center`}>
                  <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {category.count}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  )
}
