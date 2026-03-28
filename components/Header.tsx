"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Banner */}
      {/* <div className="bg-linear-to-r from-blue-500 to-blue-600 text-white py-2 text-center text-sm">
        <p>🎉 Free Shipping on Orders Over $50! Limited Time Offer</p>
      </div> */}

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="EverPlayToys"
              width={256}
              height={60}
              className="h-30.5 w-[256px] hover:scale-110 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <div className="relative group w-fit cursor-pointer">
              <Link
                href="/"
                className="inline-block text-gray-700 font-medium transition-all duration-300 
                  group-hover:text-blue-600 group-hover:scale-105 group-hover:font-bold"
              >
                Home
              </Link>
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-blue-600 
                  w-0 group-hover:w-1/2 transition-all duration-500"
              ></div>
            </div>

            <div className="relative group w-fit cursor-pointer">
              {/* Trigger */}
              <div
                className="text-gray-700 font-medium transition-all duration-300 
                  group-hover:text-blue-600 group-hover:scale-105 group-hover:font-bold"
              >
                Categories
              </div>

              {/* Slider animation */}
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-blue-600 
                  w-0 group-hover:w-1/2 transition-all duration-500"
              ></div>

              {/* Dropdown menu */}
              <div
                className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md 
                  opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 
                  origin-top transition-all duration-300"
              >
                <ul className="py-2 text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/categories/option1">Option 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/categories/option2">Option 2</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/categories/option3">Option 3</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <Link
              href="/categories"
              className="text-gray-700 hover:text-blue-600 hover:scale-105 hover:font-bold font-medium transition-all duration-300"
            >
              Categories
            </Link> */}
            {/* <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 hover:scale-105 hover:font-bold font-medium transition-all duration-300"
            >
              About
            </Link> */}

            <div className="relative group w-fit cursor-pointer">
              <Link
                href="/about"
                className="inline-block text-gray-700 font-medium transition-all duration-300 
                  group-hover:text-blue-600 group-hover:scale-105 group-hover:font-bold"
              >
                About
              </Link>
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-blue-600 
                  w-0 group-hover:w-1/2 transition-all duration-500"
              ></div>
            </div>

            <div className="relative group w-fit cursor-pointer">
              <Link
                href="/Contact"
                className="inline-block text-gray-700 font-medium transition-all duration-300 
                  group-hover:text-blue-600 group-hover:scale-105 group-hover:font-bold"
              >
                Contact
              </Link>
              <div
                className="absolute left-0 bottom-0 h-0.5 bg-blue-600 
                  w-0 group-hover:w-1/2 transition-all duration-500"
              ></div>
            </div>
            {/* <Link
              href="/Contact"
              className="text-gray-700 hover:text-blue-600 hover:scale-105 hover:font-bold font-medium transition-all duration-300"
            >
              Contact
            </Link> */}
          </nav>

          {/* Right Icon */}
          <div className="flex items-center space-x-4">
            <Link
              href="/portal"
              className="flex items-center text-gray-700 text-lg font-bold py-2 px-6 border-2 rounded-2xl hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <User className="h-5 w-5 mr-2" />
              Admin
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-3 flex flex-col">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 hover:scale-105 hover:font-bold font-medium transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-blue-600 hover:scale-105 hover:font-bold font-medium transition-all duration-300"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 hover:scale-105 hover:font-bold font-medium transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-gray-700 hover:text-blue-600 hover:scale-105 hover:font-bold font-medium transition-all duration-300"
            >
              Contact
            </Link>
            <div className="pt-3 border-t space-y-3">
              <Link
                href="/portal"
                className="flex items-center text-gray-700 hover:text-blue-600 py-2 w-full"
              >
                <User className="h-5 w-5 mr-2" />
                Admin
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
