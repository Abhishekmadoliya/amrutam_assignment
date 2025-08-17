import React from 'react';

const Footer = () => {
  return (
    <div>

    
    <section className="bg-[#f7f5f0] min-h-screen flex items-center justify-center p-20 max-w-screen overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          {/* Main Heading */}
          <div>
            <h1 className="text-4xl font-bold text-[#4a5d3a] leading-tight mb-6">
              Download Amrutam Ayurveda<br />
              App Now
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-center space-x-4 bg-white rounded-2xl p-4 border border-gray-200 ">
              <div className="bg-gray-100 rounded-full p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Access To</h3>
                <p className="text-gray-600 text-sm">Prescriptions</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-4 bg-white rounded-2xl p-4 border border-gray-200">
              <div className="bg-gray-100 rounded-full p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Track Health</h3>
                <p className="text-gray-600 text-sm">Efficiently</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-4 bg-white rounded-2xl p-4 border border-gray-200">
              <div className="bg-gray-100 rounded-full p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">Direct Chat With</h3>
                <p className="text-gray-600 text-sm">Doctors</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center space-x-4 bg-white rounded-2xl p-4 border border-gray-200">
              <div className="bg-gray-100 rounded-full p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 4.828A4 4 0 015.5 4H9v1H5.5a3 3 0 00-2.121.879l-.707.707A3 3 0 002 8.5V12H1V8.5a4 4 0 011.172-2.828z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">In-App Reminders</h3>
                <p className="text-gray-600 text-sm">For Consultations</p>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Google Play Button */}
            <div className="bg-black rounded-xl px-6 py-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-800 transition-colors">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-white">
                <div className="text-xs font-medium">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </div>
            
            {/* App Store Button */}
            <div className="bg-black rounded-xl px-6 py-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-800 transition-colors">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div className="text-white">
                <div className="text-xs font-medium">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Background Circle */}
            <div className="absolute inset-0 bg-[#e8e5d8] rounded-full w-80 h-80 opacity-60 blur-2xl transform translate-x-8 translate-y-8"></div>
            
            {/* Main Phone */}
            <div className="relative z-10 transform rotate-12 hover:rotate-6 transition-transform duration-500">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl w-64">
                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden h-[500px] relative">
                  {/* Status Bar */}
                  <div className="bg-white h-8 flex items-center justify-between px-6 text-xs font-medium">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-black rounded-sm"></div>
                      <div className="w-1 h-2 bg-black rounded-sm"></div>
                      <div className="w-6 h-2 bg-black rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="bg-[#4a7c59] text-white p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-[#4a7c59] font-bold text-sm">A</span>
                        </div>
                        <span className="font-semibold text-sm">Namaste Mayank</span>
                      </div>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    
                    {/* Green Card */}
                    <div className="bg-[#5a8a6b] rounded-xl p-3">
                      <div className="text-xs opacity-90 mb-1">You have taken</div>
                      <div className="text-lg font-bold">5000 steps today</div>
                      <div className="text-xs opacity-90 flex items-center mt-2">
                        <span>🎯 Goal: 10,000 steps</span>
                        <div className="ml-auto bg-white/20 rounded-full p-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-3">
                    <div className="text-sm font-semibold text-gray-800">Upcoming Appointments</div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-400 rounded-full"></div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">Dr. Shiva Gokani</div>
                          <div className="text-xs text-gray-500">Ayurveda Practitioner</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">Dr. Priya Sharma</div>
                          <div className="text-xs text-gray-500">Skin Care</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement Time Card */}
            <div className="absolute -top-4 -left-12 bg-[#4a7c59] text-white rounded-2xl p-4 shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="text-xs opacity-90 mb-1">Engagement Time</div>
              <div className="text-xl font-bold">6m 33s</div>
              <div className="w-16 h-1 bg-white/30 rounded-full mt-2">
                <div className="w-3/4 h-full bg-white rounded-full"></div>
              </div>
            </div>

            {/* Downloads Card */}
            <div className="absolute -bottom-4 -right-12 bg-[#d4d2c7] rounded-2xl p-4 shadow-lg z-20">
              <div className="flex -space-x-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-xl font-bold text-gray-800">10K+</div>
              <div className="text-xs text-gray-600">Downloads</div>
            </div>

            {/* Curved Arrow */}
            <div className="absolute top-32 right-16 z-10">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-gray-400">
                <path d="M5 35C15 25 25 15 45 20" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                <path d="M40 15L45 20L40 25" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            {/* Curved Arrow Bottom */}
            <div className="absolute bottom-20 right-4 z-10">
              <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-gray-400">
                <path d="M10 10C30 30 50 50 70 40" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
                <path d="M65 35L70 40L65 45" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>




    <section>
        <footer className="bg-[#d1e3e7]  py-16 px-8 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Get in touch Section */}
          <div className="space-y-6 ">
            <h3 className="text-lg font-semibold text-[#A7C957]">Get in touch</h3>

            <div className="space-y-4">
              <p className="text-black-300">support@amrutam.global</p>
              
              <div className="text-black-300">
                <p>Amrutam Pharmaceuticals Pvt Ltd.,</p>
                <p>chitragupt ganj, Nai Sadak, Lashkar,</p>
                <p>Gwalior - 474001</p>
              </div>
              
              <p className="text-black-300">+91 9713171999</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-4">
              {/* Facebook */}
              <div className="w-10 h-10 bg-[#A7C957] rounded-full flex items-center justify-center hover:bg-[#8FB339] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              
              {/* Instagram */}
              <div className="w-10 h-10 bg-[#A7C957] rounded-full flex items-center justify-center hover:bg-[#8FB339] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.182 17.635l1.935-1.944c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323L3.182 7.101l1.944 1.944c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297l1.944-1.944l-1.944 1.944c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323l1.944 1.944l-1.944-1.944c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </div>
              
              {/* YouTube */}
              <div className="w-10 h-10 bg-[#A7C957] rounded-full flex items-center justify-center hover:bg-[#8FB339] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              
              {/* Twitter */}
              <div className="w-10 h-10 bg-[#A7C957] rounded-full flex items-center justify-center hover:bg-[#8FB339] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              
              {/* LinkedIn */}
              <div className="w-10 h-10 bg-[#A7C957] rounded-full flex items-center justify-center hover:bg-[#8FB339] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              
              {/* Pinterest */}
              <div className="w-10 h-10 bg-[#A7C957] rounded-full flex items-center justify-center hover:bg-[#8FB339] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017.001z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Information Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#73a00a]">Information</h3>
            
            <div className="space-y-3">
              <a href="#" className="block text-black-300 hover:text-white transition-colors">About Us</a>
              <a href="#" className="block text-black-300 hover:text-white transition-colors">Terms and Conditions</a>
              <a href="#" className="block text-black-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block text-black-300 hover:text-white transition-colors">Privacy Policy for Mobile Apps</a>
              <a href="#" className="block text-black-300 hover:text-white transition-colors">Shipping, return and cancellation Policy</a>
              <a href="#" className="block text-black-300 hover:text-white transition-colors">International Delivery</a>
              <a href="#" className="block text-black-300 hover:text-white transition-colors">For Businesses, Hotels, and Resorts</a>
            </div>
          </div>
          
          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#A7C957]">Subscribe to our Newsletter and join Amrutam Family today!</h3>
            
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email Address"
                className="flex-1 px-4 py-3 rounded-l-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A7C957]"
              />
              <button className="px-8 py-3 bg-black text-white rounded-r-full hover:bg-gray-800 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
    </section>
    </div>
  );
};

export default Footer;