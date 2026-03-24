"use client"

import { motion } from "framer-motion"
import { Scissors } from "lucide-react"

const footerLinks = [
  { name: "الرئيسية", href: "#hero" },
  { name: "من نحن", href: "#about" },
  { name: "خدماتنا", href: "#services" },
  { name: "فريقنا", href: "#team" },
  { name: "معرض الصور", href: "#gallery" },
  { name: "تواصل معنا", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-14 md:py-16">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8 group"
          >
            <Scissors className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-45" />
            <span className="text-2xl font-bold text-foreground">الأسطورة</span>
          </motion.a>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-primary/30 mb-8" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm"
          >
            © {currentYear} صالون الأسطورة للحلاقة. جميع الحقوق محفوظة.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
