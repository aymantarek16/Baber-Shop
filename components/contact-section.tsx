"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    label: "الهاتف",
    value: "+20 123 456 7890",
    href: "tel:+201234567890"
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "info@alostoura.com",
    href: "mailto:info@alostoura.com"
  },
  {
    icon: MapPin,
    label: "العنوان",
    value: "123 شارع الثورة، مصر الجديدة، القاهرة",
    href: "#location"
  },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="section-shell bg-secondary/30" ref={ref}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider">تواصل معنا</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              نسعد بتواصلكم
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              لأي استفسارات أو حجوزات، لا تترددوا في التواصل معنا
              عبر أي من الوسائل التالية
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-sm p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.label}</h3>
                <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">تابعونا على وسائل التواصل</p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
