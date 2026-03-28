import { Users, Target, Heart, Award } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'Every toy is carefully selected and tested to meet the highest safety and quality standards.'
    },
    {
      icon: Users,
      title: 'Family Focused',
      description: 'We understand families because we are a family business, dedicated to bringing joy to homes.'
    },
    {
      icon: Target,
      title: 'Educational Value',
      description: 'We believe in toys that entertain while helping children learn and develop new skills.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to excellence has made us a trusted name in toys for over a decade.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About EverPlayToys</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50">
            Creating magical moments and cherished memories for families worldwide
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">
                EverPlayToys was founded with a simple mission: to bring joy and wonder to children's lives through quality toys that inspire creativity and learning.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                What started as a small family business has grown into a trusted destination for parents seeking the best toys for their children. We carefully curate every product, ensuring it meets our strict standards for safety, quality, and educational value.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we're proud to serve thousands of happy families, but our mission remains the same: making childhood magical, one toy at a time.
              </p>
            </div>
            <div className="bg-linear-to-br from-blue-100 to-purple-100 rounded-3xl p-12 flex items-center justify-center">
              <div className="text-9xl">🎪</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Values</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-linear-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join the EverPlayToys Family</h2>
          <p className="text-xl mb-8 text-blue-50">
            Discover why thousands of parents trust us for their children's toys
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  )
}
