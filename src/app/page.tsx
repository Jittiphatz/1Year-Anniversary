'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/components/footer';

// Login Component
const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password === '13062024') {
      const result = await Swal.fire({
        title: 'รหัสถูกต้อง เก่งมากคับอ้วนน',
        text: 'กด OK เพื่อไปหน้าต่อไป',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#10b981',
        background: '#1f2937',
        color: '#ffffff'
      })

      if (result.isConfirmed) {
        onLogin()
      }
    } else {
      await Swal.fire({
        title: 'Wrong Password',
        text: 'Please try again na eiei',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ef4444',
        background: '#1f2937',
        color: '#ffffff'
      })
      setPassword('')
    }
  }
  useEffect(() => {
    AOS.init({
      duration: 500,
    });

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.onload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  return (

    <div data-aos="fade-up" className="overflow-hidden min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">

      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mb-8">
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.682l-1.318-1.364a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">Happy Anniversary 1 Year</h2>
          <p className="text-gray-300">Enter the Password</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>

            <input

              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
              required
            />
          </div>

          <div className="flex justify-center"> {/* Add this wrapper div */}
            <button
              type="submit"
              className="py-3 px-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-full hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="text-center mt-2">
          <button
            type="button"
            onClick={() =>
              Swal.fire({
                title: 'Password Hint',
                text: 'Date of relationship | 00002024',
                icon: 'info',
                confirmButtonText: 'OK',
                confirmButtonColor: '#3b82f6',
                background: '#1f2937',
                color: '#ffffff'
              })
            }
            className="text-sm text-white bg-red-500 w-30 h-10 rounded-4xl hover:bg-red-400 hover:text-black transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Password Hint
          </button>
        </div>
        <Footer />
      </div>
      
    </div>
  )
}

// Flip Card Component
const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="flex justify-center">
      <div className="perspective-1000 w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem]">
        <div
          className={`relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''
            }`}
          onClick={handleFlip}
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Front Side */}
          <div
            className="animate-slow-bounce absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 shadow-2xl flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="text-center text-white px-4">
              <div className="mb-4 sm:mb-6">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2">Happy Anniversary 1 Year</h2>
              <p className="text-sm sm:text-base md:text-lg opacity-90">Click To Open Card</p>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600 shadow-2xl flex items-center justify-center rotate-y-180"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="text-center text-white p-4 sm:p-6 md:p-8">

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Happy Anniversary 1 Year Kubb</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                เค้าดีใจมากๆเลยที่เธอเข้ามาในชีวิตเค้า เธอเป็นคนที่ทำให้เค้ามีความสุขมากๆในทุกๆวันเลยนะ
                เค้าอยากจะบอกว่าเค้ารักเธอมากๆนะ อยู่กับเค้าไปนานๆนะ
                เค้าจะดูแลเธอให้ดีที่สุดเลย
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Anniversary Component
const AnniversaryPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.onload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div data-aos="fade-up" className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center px-4 py-8">
      <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-6xl">
        <div className="mb-8 sm:mb-12 justify-center items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 animate-pulse">
            🎉 Happy Anniversary 1 Year 🎉
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 bg-black/30 px-4 py-2 rounded-lg inline-block">13/06/2025</p>
        </div>

        <FlipCard />


      </div>

      {/* Next Button */}
      <div className="mt-12 pb-6">
        <Link
          href="/ice"
          className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium rounded-full hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
        >
          Next Page
          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Main App Component
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <>
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .8;
          }
        }

        @keyframes slow-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-slow-bounce {
          animation: slow-bounce 3s ease-in-out infinite;
        }
      `}</style>

      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <AnniversaryPage />
      )}
    </>
  )
}