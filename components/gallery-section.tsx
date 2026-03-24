"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "قص شعر احترافي"
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "تهذيب اللحية"
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "أدوات الحلاقة"
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "علاج المنشفة الساخنة"
  },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="section-shell" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider">معرض الصور</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            لمحات من أعمالنا
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            استعرض بعض أعمالنا المميزة واكتشف مستوى الاحترافية
            الذي يميز صالون الأسطورة
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground font-medium text-sm">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="إغلاق الصورة المكبرة"
            className="absolute top-6 left-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full aspect-square">
            <Image
              src={selectedImage}
              alt="صورة مكبرة"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
