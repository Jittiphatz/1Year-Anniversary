"use client";

import { useState, useEffect } from 'react';
import { ArrowLeft, Home, Search, Zap } from 'lucide-react';

// Fixed positions for particles to avoid hydration mismatch
const particlePositions = [
    { left: 23.4, top: 22.7, delay: 0.1, duration: 2.5 },
    { left: 67.2, top: 78.3, delay: 0.3, duration: 3.2 },
    { left: 12.8, top: 45.6, delay: 0.8, duration: 2.8 },
    { left: 89.3, top: 15.4, delay: 1.2, duration: 3.5 },
    { left: 45.7, top: 82.1, delay: 0.5, duration: 2.9 },
    { left: 73.9, top: 38.2, delay: 1.5, duration: 3.1 },
    { left: 31.5, top: 67.8, delay: 0.7, duration: 2.6 },
    { left: 58.2, top: 91.3, delay: 1.8, duration: 3.4 },
    { left: 18.6, top: 29.7, delay: 0.4, duration: 2.7 },
    { left: 94.1, top: 56.9, delay: 1.1, duration: 3.3 },
    { left: 37.8, top: 73.4, delay: 0.9, duration: 2.4 },
    { left: 71.4, top: 18.8, delay: 1.6, duration: 3.6 },
    { left: 26.3, top: 85.2, delay: 0.6, duration: 2.8 },
    { left: 82.7, top: 42.5, delay: 1.3, duration: 3.2 },
    { left: 49.1, top: 68.7, delay: 0.2, duration: 2.9 },
    { left: 65.8, top: 33.1, delay: 1.7, duration: 3.7 },
    { left: 13.9, top: 79.6, delay: 0.8, duration: 2.5 },
    { left: 76.2, top: 24.3, delay: 1.4, duration: 3.1 },
    { left: 41.6, top: 87.9, delay: 0.3, duration: 2.7 },
    { left: 86.5, top: 51.2, delay: 1.9, duration: 3.4 }
];

export default function NotFound() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };

    const handleGoHome = () => {
        if (typeof window !== 'undefined') {
            window.location.href = '/';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div
                    className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
                    style={{
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {particlePositions.map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className={`text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    {/* 404 Text with glitch effect */}
                    <div className="relative mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-purple-500/20 animate-ping">
                            404
                        </div>
                    </div>

                    {/* Error message */}
                    <div className="space-y-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            หน้าที่คุณกำลังมองหาไม่พบ
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่มีอยู่จริง ลองตรวจสอบ URL อีกครั้งหรือกลับไปที่หน้าแรกนะ
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={handleGoBack}
                            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            กลับหน้าเดิม
                        </button>

                        <button
                            onClick={handleGoHome}
                            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
                        >
                            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            กลับหน้าหลัก
                        </button>
                    </div>

                    {/* Quick links */}
                    
                </div>
            </div>
        </div>
    );
}