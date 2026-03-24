"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, MapPin, Phone } from "lucide-react"

const schedule = [
  { day: "السبت - الخميس", hours: "10:00 صباحاً - 11:00 مساءً" },
  { day: "الجمعة", hours: "2:00 مساءً - 11:00 مساءً" },
]

const contactInfo = [
  {
    icon: Phone,
    label: "اتصل بنا",
    value: "+20 123 456 7890",
    href: "tel:+201234567890"
  },
  {
    icon: MapPin,
    label: "موقعنا",
    value: "شارع الثورة، مصر الجديدة، القاهرة",
    href: "#location"
  },
]

export function HoursSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="hours" className="section-shell" ref={ref}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider">مواعيد العمل</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              متى يمكنك زيارتنا؟
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              نستقبلكم طوال أيام الأسبوع في أجواء مريحة ومميزة
            </p>
          </motion.div>

          {/* Schedule & Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-sm p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-sm">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">ساعات العمل</h3>
              </div>
              
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-4 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">{item.day}</span>
                    <span className="text-primary font-semibold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border rounded-sm p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-8">معلومات التواصل</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
