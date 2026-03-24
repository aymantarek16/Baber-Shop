"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

const team = [
  {
    name: "أحمد محمود",
    role: "مدير الصالون",
    experience: "15 سنة خبرة",
    image: "/images/barber-1.jpg",
    instagram: "https://www.instagram.com"
  },
  {
    name: "محمد حسن",
    role: "حلاق رئيسي",
    experience: "12 سنة خبرة",
    image: "/images/barber-2.jpg",
    instagram: "https://www.instagram.com"
  },
  {
    name: "كريم أحمد",
    role: "خبير اللحى",
    experience: "10 سنوات خبرة",
    image: "/images/barber-3.jpg",
    instagram: "https://www.instagram.com"
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" className="section-shell bg-secondary/30" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider">فريقنا</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            خبراء في فن الحلاقة
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            فريق من أمهر الحلاقين في مصر، يجمعون بين الخبرة الطويلة
            والشغف بتقديم أفضل خدمة لعملائنا
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm mb-6">
                <div className="aspect-3/4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Social Link */}
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`حساب ${member.name} على انستجرام`}
                  className="absolute bottom-4 left-4 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
