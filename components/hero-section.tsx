"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-barber.jpg"
          alt="صالون الأسطورة للحلاقة"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block mt-9 text-primary text-sm md:text-base font-semibold tracking-wider mb-4 border border-primary/30 px-4 py-2 rounded-sm">
            مرحباً بكم في صالون
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance"
        >
          الأسطورة
          <span className="block text-primary">للحلاقة الرجالية</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
        >
          نقدم لك تجربة حلاقة فاخرة لا مثيل لها، حيث نجمع بين الحرفية التقليدية
          والأساليب العصرية لنمنحك إطلالة مثالية تليق بك
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            احجز موعدك الآن
          </a>
          <a
            href="#services"
            className="border border-foreground/20 text-foreground px-8 py-4 rounded-sm font-semibold text-lg hover:border-primary hover:text-primary transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            اكتشف خدماتنا
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { number: "+15", label: "سنة خبرة" },
            { number: "+5000", label: "عميل سعيد" },
            { number: "+10", label: "حلاق محترف" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</span>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
    
        </motion.a>
              <div className="flex mt-9">
            <span className="text-sm">اكتشف المزيد</span>
          <ChevronDown className="w-5 h-5" />
          </div>
      </motion.div> */}
    </section>
  )
}
