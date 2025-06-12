"use client";

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '@/components/footer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
    {
        src: "/img/1.jpg",
        alt: "1. 29/06/2024 รูปนี้เป็นรูปที่ถ่ายโดยเพื่อนเค้าและเป็นรูปคู่แรกเลย"
    },
    {
        src: "/img/2.jpg",
        alt: "2. 08/01/2025 รูปนี้เป็นรูปคู่รูปแรกที่ไปถ่ายด้วยกัน เค้าชอบรูปนี้มากๆ แก้มเธอกลมดิ๊กน่ารักมากๆ😍"
    },
    {
        src: "/img/3.jpg",
        alt: "3. 08/01/2025 รูปนี้เค้าก็ชอบบบบ😍"
    },
    {
        src: "/img/4.jpg",
        alt: "4. 08/01/2025 รูปนี้เค้าก็ชอบบบบ💖"
    },
    {
        src: "/img/5.jpg",
        alt: "5. 28/01/2025 รูปนี้เป็นรูปคู่รูปที่ 2 ไปถ่ายที่ร้านกาแฟตอนใกล้ตรุษจีน"
    },
    {
        src: "/img/6.jpg",
        alt: "6. 28/02/2025 รูปนี้เค้าถ่ายตอนเธอหลับอิอิ น่ารักดีีี🤏"
    },
    {
        src: "/img/8.jpg",
        alt: "7. 22/07/2024 หนังเรื่องแรกที่เราไปดูกัน เรื่องแดนสาบ รอบ 15:45 ที่เทอร์มินอล 21"
    },
    {
        src: "/img/7.jpg",
        alt: "8. 15/10/2024 หนังเรื่องที่ 2 ที่เราไปดูกัน เรื่องธี่หยด รอบ 11:20 ที่เทอร์มินอล 21"
    },
    {
        src: "/img/9.jpg",
        alt: "9. 27/08/2024 รูปนี้เป็นรูปที่เค้าแอบถ่ายเธอตอนเธอหลับรอเค้าขณะที่เค้ากำลังทำคอม"
    },
    {
        src: "/img/10.jpg",
        alt: "10. 23/09/2024 รูปนี้เป็นรูปที่เค้าตอนที่เธอซื้อหมูปิ้งเสร็จแล้วเจอแมว น่ารักมากๆ💖🤏"
    },
    {
        src: "/img/11.jpg",
        alt: "11. 06/09/2024 รูปนี้เป็นรูปที่เค้าถ่ายเธอตอนเธอเล่นไอแพดในห้องคอม น่ารักดีอิอิ💖🤏"
    },
    {
        src: "/img/12.jpg",
        alt: "12. 13/11/2024 รูปนี้เป็นรูปที่เค้าตั้งใจจะถ่ายเธอแต่เธอดันหลบกล้องก็เลยได้มุมเหมือนซบไหล่555"
    },
    {
        src: "/img/13.jpg",
        alt: "13. 27/06/2024 รูปนี้เป็นรูปที่เราเดินจับมือกันครั้งแรก💖💖"
    }
];

export default function IcePage() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.onload = function () {
            window.scrollTo(0, 0);
        };
    }, []);
    return (
        <div data-aos="fade-up" className="min-h-screen bg-gradient-to-br from-pink-600 to-pink-900 flex flex-col items-center justify-center px-4 py-8">
            <h1 className="text-center text-3xl py-3 bg-white text-pink-400 px-4 inline-block rounded-full">💖For You</h1>
            <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl mt-13">

                {/* Swiper Component */}
                <div className="w-full max-w-2xl mx-auto mb-8">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={true}
                        loop={true}
                        spaceBetween={2}
                        slidesPerView={1}
                        className="h-[400px] sm:h-[400px] md:h-[500px] rounded-lg shadow-2xl"
                        style={{
                            '--swiper-navigation-color': '#ffffff',
                            '--swiper-navigation-size': '24px',
                            '--swiper-pagination-color': '#ffffff',
                        } as React.CSSProperties}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full rounded-lg overflow-hidden group">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                                        loading={index === 0 ? "eager" : "lazy"}
                                    />
                                    {/* Bottom Overlay on hover */}
                                    <div className="absolute bottom-0 left-0 w-full">
                                        <div className="bg-black/30 w-full py-3 flex items-center justify-center transition-opacity duration-300 rounded-b-lg">
                                            <span className="text-white text-lg  drop-shadow-lg">{image.alt}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Content Section */}
            <div data-aos="fade-down" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto border border-white/20 mt-15">
                <div className="text-center text-white">
                    <h1 className="mb-4 text-2xl font-light text-pink-400">💕Anniversary 1 Year💕</h1>
                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
                        <p className="text-xl font-light mb-4">หน้านี้เป็นรูปที่เค้าถ่ายกับเธอที่เราคบกัน</p>
                        <p className="text-xl font-light mb-4">เค้าอยากจะบอกเธอว่า</p>
                        <p className="text-xl font-bold mb-4">เค้ารักเธอนะ อยู่กับเค้าไปนานๆเลยนะ</p>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 pb-6">
                <Link
                    href="/"
                    className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-full hover:from-emerald-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg sm:text-base"
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    กลับ
                </Link>
            </div>
            <Footer />
            {/* Custom CSS for Swiper */}
            <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                    background: rgba(255, 255, 255, 0.2) !important;
                    border-radius: 50% !important;
                    width: 44px !important;
                    height: 44px !important;
                    margin-top: -22px !important;
                    backdrop-filter: blur(4px);
                    transition: all 0.3s ease !important;
                }
                
                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    background: rgba(255, 255, 255, 0.3) !important;
                    transform: scale(1.1);
                }
                
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 16px !important;
                    font-weight: bold !important;
                }
                
                .swiper-pagination-fraction {
                    background: rgba(0, 0, 0, 0.3) !important;
                    border-radius: 20px !important;
                    padding: 4px 12px !important;
                    backdrop-filter: blur(4px) !important;
                    font-weight: 500 !important;
                    bottom: 16px !important;
                    width: auto !important;
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                }
            `}</style>
        </div>
    );
}