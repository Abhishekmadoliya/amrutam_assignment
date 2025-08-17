import React, { useState } from 'react';
import { Phone, Search, User, ShoppingCart, Bell, ShoppingBag } from 'lucide-react';
import bgnavimg from '../assets/navbarbg.png'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Shop');

  return (
    <div className="min-h-[10rem] bg-gradient-to-br from-green-50 via-white to-green-50 ">
      {/* Top Banner */}
      <div className="bg-gray-800 text-white px-4 py-2 text-center text-sm">
        <span className="mr-4">Your first 5 minutes instant call is free.</span>
        <button className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded text-xs font-medium transition-colors">
          📞 Try Instant Free Call Now
        </button>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 w-16 h-16 bg-green-200 rounded-full"></div>
          <div className="absolute top-12 right-12 w-12 h-12 bg-green-300 rounded-full"></div>
          <div className="absolute bottom-4 left-1/4 w-20 h-20 bg-green-100 rounded-full"></div>
          <div className="absolute top-8 right-1/3 w-8 h-8 bg-green-400 rounded-full"></div>
        </div>
        
        {/* Leaf Decorations */}
        <div className="absolute left-0 top-0 bottom-0 w-32 opacity-20">
          <svg viewBox="0 0 100 200" className="w-full h-full">
            <path d="M20,50 Q30,40 40,50 Q30,60 20,50" fill="#22c55e" />
            <path d="M10,80 Q20,70 30,80 Q20,90 10,80" fill="#16a34a" />
            <path d="M25,120 Q35,110 45,120 Q35,130 25,120" fill="#15803d" />
            <path d="M5,150 Q15,140 25,150 Q15,160 5,150" fill="#22c55e" />
          </svg>
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-32 opacity-20">
          <svg viewBox="0 0 100 200" className="w-full h-full">
            <path d="M60,30 Q70,20 80,30 Q70,40 60,30" fill="#22c55e" />
            <path d="M70,70 Q80,60 90,70 Q80,80 70,70" fill="#16a34a" />
            <path d="M55,110 Q65,100 75,110 Q65,120 55,110" fill="#15803d" />
            <path d="M75,140 Q85,130 95,140 Q85,150 75,140" fill="#22c55e" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-4 relative">
          {/* Header Top Row */}
          <div className="flex items-center justify-between mb-4">
            {/* Phone Number */}
            <div className="flex items-center text-gray-600 text-sm">
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 9826352321</span>
            </div>

            {/* Logo */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-green-800 tracking-widest">
                AMRUTAM
              </h1>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="flex items-center bg-orange-100 px-3 py-1 rounded-full">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Kapil AMI</span>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex justify-center space-x-8 mb-6">
            {['Home', 'Find Doctors', 'Lab Tests', 'Shop', 'Forum', 'About Us'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
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
          </nav>
        </div>
      </div>

      {/* Store Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-12 relative " style={{ backgroundImage: `url(${bgnavimg})`, backgroundSize: ' cover' }}>
        {/* More Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-8 left-20 w-6 h-6 bg-green-300 rounded-full"></div>
          <div className="absolute top-16 right-32 w-4 h-4 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-8 left-1/3 w-8 h-8 bg-green-200 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Store</h2>
          
          {/* Search Bar */}
          <div className="flex justify-center items-center gap-4 ">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for Kuntal Care"
                className="w-[30rem] h-12 pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm bg-white"
              />
            </div>
            <button className=" bg-white hover:bg-green-700 text-black p-2 rounded-md transition-colors hover:cursor-pointer">
              <ShoppingBag className="w-7 h-6" />

            </button>
          </div>
          
          {/* Search Button */}
      
        </div>
      </div>

      
    </div>
  );
}

