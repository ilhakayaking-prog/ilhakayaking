import Footer from "./components/Footer"
import Header from "./components/Header"
import ContactSection from "./sections/ContactSection"
import FeaturesSection from "./sections/FeaturesSection"
import GallerySection from "./sections/GallerySection"
import HeroSection from "./sections/HeroSection"
import PricingSection from "./sections/PricingSection"
import FAQSection from "./sections/FAQSection"

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App