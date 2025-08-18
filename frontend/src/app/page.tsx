"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomePage() {
  const [visitors, setVisitors] = useState(10000);

  // Fake live counter
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prev) => prev + Math.floor(Math.random() * 5));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900">
      {/* Hero Section with Carousel */}
      <div className="relative w-full h-[80vh]">
        <Swiper
          spaceBetween={30}
          centeredSlides
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {["/assets/hero1.jpg", "/assets/hero2.jpg", "/assets/hero3.jpg"].map(
            (src, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="w-full h-full bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${src})` }}
                >
                  <div className="p-8 rounded-xl text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-amber-100">
                      Welcome to My Website
                    </h1>
                    <p className="mt-4 text-lg text-gray-200">
                      Your journey to greatness starts here 🚀
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>

      {/* Impact Section */}
      <section className="max-w-6xl w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-gray-800 text-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Our Mission</h2>
          <p className="text-white mb-6">
            We aim to create meaningful digital experiences that empower users
            worldwide 🌍
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Registered Students", value: "6M+" },
            { label: "Projects Completed", value: "1.5k+" },
            { label: "Test Attempts", value: "6.2k" },
            { label: "Client Satisfaction", value: "98%" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 text-white p-6 rounded-2xl shadow-md text-center hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-yellow-300">
                {item.value}
              </h3>
              <p className="mt-2 text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
