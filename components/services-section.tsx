"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Scissors, SprayCan, Sparkles, Crown } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "قص الشعر",
    description: "قصات شعر عصرية وكلاسيكية تناسب جميع الأذواق مع التصفيف المثالي",
    price: "150",
    duration: "45 دقيقة"
  },
  {
    icon: SprayCan,
    title: "تهذيب اللحية",
    description: "تشكيل وتهذيب اللحية باحترافية عالية مع العناية الكاملة بالبشرة",
    price: "100",
    duration: "30 دقيقة"
  },
  {
    icon: Sparkles,
    title: "حلاقة كاملة",
    description: "قص الشعر مع تهذيب اللحية وتنظيف الوجه بالمنشفة الساخنة",
    price: "220",
    duration: "60 دقيقة"
  },
  {
    icon: Crown,
    title: "الباكدج الملكي",
    description: "تجربة فاخرة شاملة: قص، لحية، تنظيف بشرة، ماسك، وتدليك",
    price: "350",
    duration: "90 دقيقة"
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="section-shell" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider">خدماتنا</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            خدمات مصممة لك
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            نقدم مجموعة متكاملة من خدمات الحلاقة والعناية الرجالية
            بأعلى معايير الجودة والاحترافية
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-sm p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground text-sm mr-1">ج.م</span>
                  </div>
                  <span className="text-muted-foreground text-sm">{service.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            احجز خدمتك الآن
          </a>
        </motion.div>
      </div>
    </section>
  )
}
