import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { GallerySection } from "@/components/gallery-section"
import { ToolsSection } from "@/components/tools-section"
import { HoursSection } from "@/components/hours-section"
import { LocationSection } from "@/components/location-section"
import { BookingSection } from "@/components/booking-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <GallerySection />
      <ToolsSection />
      <HoursSection />
      <LocationSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
