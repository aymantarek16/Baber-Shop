"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Scissors } from "lucide-react"

const navLinks = [
  { name: "الرئيسية", href: "#hero" },
  { name: "من نحن", href: "#about" },
  { name: "خدماتنا", href: "#services" },
  { name: "فريقنا", href: "#team" },
  { name: "معرض الصور", href: "#gallery" },
  { name: "أدواتنا", href: "#tools" },
  { name: "الحجز", href: "#booking" },
  { name: "تواصل معنا", href: "#contact" },
] as const

/** Section ids in scroll order — must match `href` targets on the page */
const SECTION_IDS = navLinks.map((link) => link.href.slice(1))

/** Matches fixed header + scroll-margin (`globals.css` ~6.5rem) */
const HEADER_OFFSET_PX = 104

/**
 * Pick active section for scroll-spy.
 * A fixed offset (e.g. 104px) stays "one section behind" on tall blocks: the next section’s
 * content is visible before its top crosses that line — e.g. "معرض الصور" stays active on "أدواتنا".
 * We use a **reading line** in the viewport (~34% height, never below the header), then:
 * 1) Prefer the section that **contains** that line.
 * 2) If we’re in a gap (margins) or past the last section, use the last section whose top passed the line.
 */
function getActiveSectionFromScroll(): string {
  const probeY = Math.max(
    HEADER_OFFSET_PX + 16,
    window.innerHeight * 0.34
  )

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (probeY >= rect.top && probeY <= rect.bottom) {
      return id
    }
  }

  let active = SECTION_IDS[0]
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= probeY) {
      active = id
    }
  }
  return active
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0])

  /** While true, keep the clicked section active until smooth scroll settles */
  const scrollLockRef = useRef(false)
  const scrollLockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrollSpyRafRef = useRef<number | null>(null)

  const updateActiveFromScroll = useCallback(() => {
    if (scrollLockRef.current) return
    const next = getActiveSectionFromScroll()
    setActiveSection((prev) => (prev === next ? prev : next))
  }, [])

  useEffect(() => {
    const scheduleScrollSpy = () => {
      if (scrollSpyRafRef.current != null) return
      scrollSpyRafRef.current = requestAnimationFrame(() => {
        scrollSpyRafRef.current = null
        updateActiveFromScroll()
      })
    }

    const handleScroll = () => {
      const next = window.scrollY > 50
      setScrolled((prev) => (prev === next ? prev : next))
      scheduleScrollSpy()
    }

    updateActiveFromScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateActiveFromScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateActiveFromScroll)
      if (scrollSpyRafRef.current != null) cancelAnimationFrame(scrollSpyRafRef.current)
      if (scrollLockTimerRef.current) clearTimeout(scrollLockTimerRef.current)
    }
  }, [updateActiveFromScroll])

  const scrollToSection = useCallback((href: string) => {
    const id = href.slice(1)
    const target = document.querySelector(href)
    if (!target) return

    // 1) Active immediately for tracked sections (includes #booking)
    if (SECTION_IDS.includes(id)) {
      setActiveSection(id)
      scrollLockRef.current = true
      if (scrollLockTimerRef.current) clearTimeout(scrollLockTimerRef.current)
      scrollLockTimerRef.current = setTimeout(() => {
        scrollLockRef.current = false
        scrollLockTimerRef.current = null
        updateActiveFromScroll()
      }, 900)
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsOpen(false)
  }, [updateActiveFromScroll])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8" aria-label="التنقل الرئيسي">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <div className="relative">
              <Scissors className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              الأسطورة
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollToSection(link.href)}
                aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
                className={`text-sm cursor-pointer font-medium relative group transition-colors duration-300 rounded-sm px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 right-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Book Now Button - Desktop */}
          <button
            type="button"
            onClick={() => scrollToSection("#booking")}
            className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            احجز الآن
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  type="button"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  aria-current={activeSection === link.href.slice(1) ? "page" : undefined}
                  className={`py-2 text-lg font-medium text-right transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <button
                type="button"
                onClick={() => scrollToSection("#booking")}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold text-center mt-4 hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                احجز الآن
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
