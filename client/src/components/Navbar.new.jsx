import React, { useState } from 'react';
import { Phone, Search, User, ShoppingCart, Bell, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Shop');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="min-h-[8rem] md:min-h-[10rem] bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Top Banner */}
      <div className="bg-gray-800 text-white px-2 md:px-4 py-2 text-center text-xs sm:text-sm">
        <span className="block sm:inline mb-2 sm:mb-0 sm:mr-4">Your first 5 minutes instant call is free.</span>
        <button className="bg-green-600 hover:bg-green-700 px-3 md:px-4 py-1 rounded text-xs font-medium transition-colors">
          📞 Try Instant Free Call Now
        </button>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Background Circles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-8 w-12 sm:w-16 h-12 sm:h-16 bg-green-200 rounded-full"></div>
            <div className="absolute top-12 right-12 w-8 sm:w-12 h-8 sm:h-12 bg-green-300 rounded-full"></div>
            <div className="absolute bottom-4 left-1/4 w-16 sm:w-20 h-16 sm:h-20 bg-green-100 rounded-full"></div>
            <div className="absolute top-8 right-1/3 w-6 sm:w-8 h-6 sm:h-8 bg-green-400 rounded-full"></div>
          </div>

          {/* Left Leaf */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 opacity-20">
            <svg viewBox="0 0 100 200" className="w-full h-full">
              <path d="M20,50 Q30,40 40,50 Q30,60 20,50" fill="#22c55e" />
              <path d="M10,80 Q20,70 30,80 Q20,90 10,80" fill="#16a34a" />
              <path d="M25,120 Q35,110 45,120 Q35,130 25,120" fill="#15803d" />
              <path d="M5,150 Q15,140 25,150 Q15,160 5,150" fill="#22c55e" />
            </svg>
          </div>

          {/* Right Leaf */}
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 opacity-20">
            <svg viewBox="0 0 100 200" className="w-full h-full">
              <path d="M60,30 Q70,20 80,30 Q70,40 60,30" fill="#22c55e" />
              <path d="M70,70 Q80,60 90,70 Q80,80 70,70" fill="#16a34a" />
              <path d="M55,110 Q65,100 75,110 Q65,120 55,110" fill="#15803d" />
              <path d="M75,140 Q85,130 95,140 Q85,150 75,140" fill="#22c55e" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4 relative">
          {/* Header Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-3 md:space-y-0">
            {/* Phone Number */}
            <div className="flex items-center text-gray-600 text-xs sm:text-sm order-2 md:order-1">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">+91 9826352321</span>
              <span className="sm:hidden">Call Us</span>
            </div>

            {/* Logo */}
            <div className="text-center order-1 md:order-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-green-800 tracking-widest">
                AMRUTAM
              </h1>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-2 sm:space-x-3 order-3">
              <button className="relative p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center bg-orange-100 px-2 sm:px-3 py-1 rounded-full hover:bg-orange-200 transition-colors">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full flex items-center justify-center mr-1 sm:mr-2">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Kapil AMI</span>
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex justify-start md:justify-center space-x-4 md:space-x-8 mb-4 min-w-max">
              {['Home', 'Find Doctors', 'Lab Tests', 'Shop', 'Forum', 'About Us'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`px-2 md:px-4 py-2 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap ${
                    activeTab === item
                      ? 'text-green-700 border-b-2 border-green-700'
                      : 'text-gray-600 hover:text-green-700'
                  }`}
                >
                  {item}
                  {activeTab === item && (
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-green-700 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Search Bar and Cart */}
          <div className="flex items-center space-x-3 px-0 sm:px-2 pb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for products, doctors, lab tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors relative group">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-medium">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
