"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, Clock, User, Phone, Scissors, Send, Loader2 } from "lucide-react"

const services = [
  { id: "haircut", name: "قص الشعر", price: "150 ج.م" },
  { id: "beard", name: "تهذيب اللحية", price: "100 ج.م" },
  { id: "full", name: "حلاقة كاملة", price: "220 ج.م" },
  { id: "royal", name: "الباكدج الملكي", price: "350 ج.م" },
]

const timeSlots = [
  "10:00 صباحاً",
  "11:00 صباحاً",
  "12:00 ظهراً",
  "1:00 مساءً",
  "2:00 مساءً",
  "3:00 مساءً",
  "4:00 مساءً",
  "5:00 مساءً",
  "6:00 مساءً",
  "7:00 مساءً",
  "8:00 مساءً",
  "9:00 مساءً",
  "10:00 مساءً",
]

export function BookingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate brief loading
    await new Promise(resolve => setTimeout(resolve, 500))

    const selectedService = services.find(s => s.id === formData.service)
    
    // Create WhatsApp message
    const message = `مرحباً، أود حجز موعد في صالون الأسطورة

الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
الخدمة: ${selectedService?.name}
التاريخ: ${formData.date}
الوقت: ${formData.time}

شكراً لكم!`

    // Egyptian WhatsApp number (placeholder)
    const whatsappNumber = "201234567890"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, "_blank")
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="booking" className="section-shell" ref={ref}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider">احجز موعدك</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              احجز الآن عبر واتساب
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              املأ النموذج التالي وسيتم إرسال بيانات الحجز مباشرة
              إلى واتساب للتأكيد
            </p>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-sm p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                    className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="01XXXXXXXXX"
                    pattern="^01[0-2,5]{1}[0-9]{8}$"
                    title="أدخل رقم هاتف مصري صحيح"
                    className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label htmlFor="service" className="text-foreground font-medium flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-primary" />
                  الخدمة المطلوبة
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
                >
                  <option value="">اختر الخدمة</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="text-foreground font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    التاريخ المفضل
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={today}
                    className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label htmlFor="time" className="text-foreground font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    الوقت المفضل
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-input border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
                  >
                    <option value="">اختر الوقت</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-sm font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    إرسال عبر واتساب
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
