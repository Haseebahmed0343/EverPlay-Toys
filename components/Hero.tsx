"use client";

// import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const slides = [
  //   {
  //     title: "Where Fun Never Ends",
  //     subtitle: "Discover endless joy with our amazing collection of toys",
  //     cta: "Shop Now",
  //     bgColor: "from-blue-400 to-blue-600",
  //     image: "/hero-pic1.png",
  //   },
  //   {
  //     title: "Educational & Fun",
  //     subtitle: "Toys that inspire learning and creativity",
  //     cta: "Explore",
  //     bgColor: "from-purple-400 to-purple-600",
  //     image: "/hero2-removebg-preview.png",
  //   },
  //   {
  //     title: "New Arrivals",
  //     subtitle: "Check out the latest additions to our collection",
  //     cta: "See What's New",
  //     bgColor: "from-pink-400 to-pink-600",
  //     image: "/hero-pic1.png",
  //   },
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length)
  //   }, 5000000)
  //   return () => clearInterval(timer)
  // }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-linear-to-r from-blue-400 to-blue-600
 transition-all duration-1000`}
      />
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full animate-pulse delay-200" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-white rounded-full animate-pulse delay-300" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Where Fun Never Ends
            </h1>
            <p className="text-xl md:text-2xl text-blue-50">
              Discover endless joy with our amazing collection of toys
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
                Shop Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Slide Indicators */}
            {/* <div className="flex space-x-3 pt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-12 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div> */}
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-96 animate-float">
              {/* Placeholder for toy images - you can replace with actual images */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
                <Image
                  src="/hero-pic1.png"
                  alt="Toy"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 md:h-24 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
