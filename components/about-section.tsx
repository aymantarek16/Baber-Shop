"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Clock, Star } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "جودة عالية",
    description: "نستخدم أفضل الأدوات والمنتجات العالمية"
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "حلاقون ذوو خبرة تفوق 10 سنوات"
  },
  {
    icon: Clock,
    title: "خدمة سريعة",
    description: "احترام وقتك أولويتنا القصوى"
  },
  {
    icon: Star,
    title: "تجربة فاخرة",
    description: "أجواء مريحة وراقية تليق بك"
  }
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-shell bg-secondary/30" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="صالون الأسطورة"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-primary rounded-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider">من نحن</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              أكثر من مجرد صالون حلاقة
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-pretty">
              تأسس صالون الأسطورة عام 2009 برؤية واضحة: تقديم تجربة حلاقة استثنائية
              تجمع بين الفن والحرفية. على مدار أكثر من 15 عاماً، بنينا سمعة قوية
              كأحد أفضل صالونات الحلاقة الرجالية في مصر.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 text-pretty">
              نؤمن بأن كل عميل يستحق الأفضل، لذلك نحرص على توفير بيئة مريحة وفاخرة،
              مع فريق من أمهر الحلاقين الذين يواكبون أحدث صيحات قصات الشعر العالمية.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="p-2 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
