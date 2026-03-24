"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Navigation } from "lucide-react"

export function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="location" className="section-shell bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider">موقعنا</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            تشرفنا بزيارتكم
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            نتواجد في قلب القاهرة، في موقع سهل الوصول إليه.
            تفضلوا بزيارتنا وعيشوا تجربة حلاقة فريدة
          </p>
        </motion.div>

        {/* Map & Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-sm overflow-hidden">
            {/* Map Embed */}
            <div className="aspect-4/3 sm:aspect-16/10 lg:aspect-21/9 bg-card">
              <iframe
                src="https://www.google.com/maps?q=Dar+El+Salam,+Cairo,+Egypt&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع صالون الأسطورة"
              />
            </div>

            {/* Address Card Overlay */}
            <div className="absolute bottom-4 right-4 left-4 sm:bottom-6 sm:right-6 sm:left-6 md:right-auto md:left-auto md:w-96 bg-card border border-border rounded-sm p-5 sm:p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-sm shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">العنوان</h3>
                  <p className="text-muted-foreground mb-4">
                    دار السلام
                    <br />
                    القاهرة، مصر
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Dar+El+Salam,+Cairo,+Egypt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Navigation className="w-4 h-4" />
                    احصل على الاتجاهات
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
