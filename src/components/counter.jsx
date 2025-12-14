import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    const incBy5 = () => {
        setCount(count + 5)
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkZGRkZGQiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCAzLjk5OC00SDQwYzIuMjEgMCA0IDEuNzkgNCAzLjk5OFY0MGMwIDIuMjEtMS43OSA0LTMuOTk4IDRINDBDMTCMNCA0IDQyLjIxIDQwIDQwdi0uMDAyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-12 py-6">
        <div className="text-4xl font-bold text-gray-700">COUNTER</div>
        <div className="flex gap-8 items-center">
          <a href="https://mikeydebug.github.io/portfolio/" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Social Icons */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
          </svg>
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4">
        <h1 className="text-5xl md:text-6xl font-light text-gray-700 tracking-wider mb-16 text-center">
          Counter Application
        </h1>

        {/* Counter Display */}
        <div className="relative mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-20 border border-gray-200">
            <div className="text-8xl md:text-9xl font-bold text-teal-900 tracking-tight text-center min-w-[200px]">
              {String(count).padStart(2, '0')}
            </div>
            <div className="text-center text-gray-500 text-lg mt-4 tracking-widest uppercase">
              Count
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl">
          <button 
            onClick={increment}
            className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[140px]">
            Increment
          </button>
          <button 
            onClick={decrement}
            className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[140px]">
            Decrement
          </button>
          <button 
            onClick={incBy5}
            className="bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[140px]">
            +5
          </button>
          <button 
            onClick={reset}
            className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 min-w-[140px]">
            Reset
          </button>
        </div>

        {/* Learn More Link */}
        <button className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mt-8">
          <span><a href='https://mikeydebug.github.io/portfolio/' className="text-lg">Learn More</a></span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Made By */}
        <div className="mt-12 text-gray-600 text-center">
          <p className="text-sm">Made with ❤️ by <span className="font-semibold text-teal-800">Mayank Soni</span></p>
        </div>
      </div>
    </div>
  )
}

export default Counter
