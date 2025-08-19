"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomePage() {
  const [activeUsers, setActiveUsers] = useState(125000);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [voiceWaves, setVoiceWaves] = useState([1, 0.8, 1.2, 0.6, 1.1, 0.9, 1.3]);

  // Live active users counter
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 8 + 2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Voice wave animation
  useEffect(() => {
    const interval = setInterval(() => {
      setVoiceWaves(waves => waves.map(() => Math.random() * 1.5 + 0.5));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Healthcare Professional",
      avatar: "SC",
                    text: "This AI voice assistant has revolutionized how I manage patient records. It understands medical terminology perfectly and saves me hours daily.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Business Executive",
      avatar: "MJ",
                    text: "The natural language processing is incredible. I can dictate complex emails and it captures every nuance. It&apos;s like having a personal secretary.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Content Creator",
      avatar: "ER",
                    text: "As someone who creates content in multiple languages, this AI assistant&apos;s multilingual capabilities are game-changing. Absolutely phenomenal!",
      rating: 5
    }
  ];

  const howItWorksSteps = [
    {
      step: "1",
      title: "Speak Naturally",
      description: "Just talk to your AI assistant like you would to a human. No commands to remember, no specific phrases needed.",
      icon: "🎤"
    },
    {
      step: "2",
      title: "AI Understands",
      description: "Advanced NLP processes your speech instantly, understanding context, intent, and even emotions in your voice.",
      icon: "🧠"
    },
    {
      step: "3",
      title: "Smart Processing",
      description: "Our AI analyzes your request and accesses relevant information or performs the requested action seamlessly.",
      icon: "⚡"
    },
    {
      step: "4",
      title: "Instant Response",
      description: "Get intelligent, contextual responses delivered in natural, human-like speech within milliseconds.",
      icon: "💬"
    }
  ];

  const features = [
    {
      title: "Natural Language Processing",
      description: "Understands context, slang, and complex sentences",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Voice Recognition",
      description: "99.9% accuracy with adaptive learning",
      icon: "🎯",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multilingual Support",
      description: "Fluent in 50+ languages and dialects",
      icon: "🌍",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Real-time Processing",
      description: "Lightning-fast responses under 100ms",
      icon: "⚡",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section with Voice-focused Carousel */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-10"></div>
        <Swiper
          spaceBetween={0}
          centeredSlides
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            bulletActiveClass: "!bg-blue-500 !opacity-100",
            bulletClass: "swiper-pagination-bullet !bg-white/50"
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {[
            {
              bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              title: "Your AI Voice Assistant",
              subtitle: "Experience the future of human-computer interaction with natural voice commands",
              cta: "Try Voice Demo"
            },
            {
              bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              title: "Speak, Don't Type",
              subtitle: "Control your digital world with the power of your voice. No keyboards required.",
              cta: "Start Speaking"
            },
            {
              bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              title: "AI That Understands You",
              subtitle: "Advanced natural language processing that gets smarter with every conversation.",
              cta: "Experience AI"
            }
          ].map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="w-full h-full flex items-center justify-center relative"
                style={{ background: slide.bg }}
              >
                <div className="text-center z-20 max-w-5xl px-6">
                  <div className="mb-8">
                    {/* Voice Wave Visualization */}
                    {/* <div className="flex items-center justify-center space-x-1 mb-6">
                      {voiceWaves.map((height, i) => (
                        <div
                          key={i}
                          className="bg-white/80 rounded-full transition-all duration-200 ease-in-out"
                          style={{
                            width: '4px',
                            height: `${height * 40}px`,
                            animation: `pulse ${0.5 + i * 0.1}s infinite alternate`
                          }}
                        />
                      ))}
                    </div> */}
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                      onClick={() => setIsListening(!isListening)}
                    >
                      <span>🎤</span>
                      <span>{slide.cta}</span>
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>▶️</span>
                      <span>Watch Demo</span>
                    </button>
                  </div>
                  <div className="mt-8 text-white/80 text-sm">
                    <span className="animate-pulse">🔴</span> {activeUsers.toLocaleString()} users talking to AI right now
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="swiper-button-prev !text-white !text-2xl !font-bold opacity-70 hover:opacity-100 transition-opacity"></div>
        <div className="swiper-button-next !text-white !text-2xl !font-bold opacity-70 hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Voice Assistant Statistics */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Voice-First Users
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join millions who have revolutionized their digital experience through voice interaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Voice Commands Daily", value: "2.5M+", icon: "🎤", color: "from-blue-500 to-purple-600" },
              { label: "Languages Supported", value: "50+", icon: "🌍", color: "from-green-500 to-teal-600" },
              { label: "Response Time", value: "<100ms", icon: "⚡", color: "from-orange-500 to-red-600" },
              { label: "Accuracy Rate", value: "99.9%", icon: "🎯", color: "from-yellow-500 to-orange-600" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {item.value}
                  </h3>
                  <p className="text-white/90 font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Voice Assistant Works */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Our AI Voice Assistant Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence that understands, processes, and responds to natural human speech
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center hover:from-blue-800 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
                
                {idx < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology that makes voice interaction feel natural and effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl text-2xl mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Users Say About Our AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real experiences from professionals who transformed their workflow with voice AI
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-2xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-white italic mb-8 leading-relaxed">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </blockquote>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-blue-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentTestimonial 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join the voice revolution and discover how AI can transform your daily interactions. 
                No typing, no clicking – just natural conversation with intelligent technology.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Free trial with no credit card required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Works with all your favorite apps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">24/7 AI support and learning</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                  <span>🎤</span>
                  <span>Start Voice Trial</span>
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <span>Download App</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Try Voice Commands</h3>
                  <p className="text-gray-300 mb-6">Experience the power of voice AI with these examples</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-600">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎤</span>
                      <span>&quot;Schedule a meeting for tomorrow at 3 PM&quot;</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-xl p-4 border border-gray-600">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎤</span>
                      <span>&quot;Translate this to Spanish and send email&quot;</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🤖</span>
                      <span>&quot;I&apos;ve scheduled your meeting and sent the email!&quot;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </main>
  );
}