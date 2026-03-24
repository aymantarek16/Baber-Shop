"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Scissors, Flame, SprayCan, Brush } from "lucide-react"

const tools = [
  {
    icon: Scissors,
    name: "مقصات يابانية",
    description: "مقصات احترافية من أجود أنواع الفولاذ الياباني"
  },
  {
    icon: Flame,
    name: "موس حلاقة تقليدي",
    description: "موس حلاقة كلاسيكي للحصول على حلاقة ناعمة"
  },
  {
    icon: SprayCan,
    name: "منتجات عالمية",
    description: "نستخدم أفضل منتجات العناية بالشعر واللحية"
  },
  {
    icon: Brush,
    name: "فرش طبيعية",
    description: "فرش من شعر الخنزير البري الطبيعي للحلاقة"
  },
]

export function ToolsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tools" className="section-shell bg-secondary/30" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider">أدوات الحلاقة</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              أدوات احترافية لنتائج مثالية
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-pretty">
              نؤمن بأن الأدوات الجيدة هي نصف الطريق نحو النتيجة المثالية،
              لذلك نحرص على استخدام أفضل وأحدث أدوات الحلاقة من أشهر العلامات التجارية العالمية.
            </p>

            {/* Tools List */}
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors shrink-0">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{tool.name}</h3>
                    <p className="text-muted-foreground mt-1">{tool.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/images/tools.jpg"
                alt="أدوات الحلاقة"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-48 h-48 border-2 border-primary rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
