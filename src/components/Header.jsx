import { useState, useEffect } from "react"
import { Menu, X, Waves } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll status for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-zinc-950/80 backdrop-blur-xl border-white/10 py-3 shadow-lg shadow-black/20" 
          : "bg-transparent border-transparent py-5"
      }`}
    >
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300 group-hover:scale-105">
              <Waves className="text-zinc-950 font-bold" size={20} />
            </div>

            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-400 transition-all duration-300">
              Ilha Kayaking
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Tours", href: "#tours" },
              { label: "Gallery", href: "#gallery" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact" }
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-zinc-400 hover:text-white text-sm font-medium tracking-wide transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Book Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/918891666118"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-white rounded-xl group bg-gradient-to-br from-orange-500 to-amber-400 group-hover:from-orange-500 group-hover:to-amber-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-800 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative px-6 py-2 transition-all ease-in duration-75 bg-zinc-950 rounded-[10px] group-hover:bg-opacity-0">
                Book Now
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800 shadow-2xl animate-fade-in-down">
          <nav className="flex flex-col p-6 gap-5">

            <a 
              href="#tours" 
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 hover:text-orange-400 font-medium tracking-wide py-2 border-b border-zinc-900"
            >
              Tours
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 hover:text-orange-400 font-medium tracking-wide py-2 border-b border-zinc-900"
            >
              Gallery
            </a>
            <a 
              href="#pricing" 
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 hover:text-orange-400 font-medium tracking-wide py-2 border-b border-zinc-900"
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 hover:text-orange-400 font-medium tracking-wide py-2 border-b border-zinc-900"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 hover:text-orange-400 font-medium tracking-wide py-2"
            >
              Contact
            </a>

            <a
              href="https://wa.me/918891666118"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-amber-400 text-zinc-950 font-bold text-center py-3 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all mt-2"
            >
              Book Now
            </a>

          </nav>
        </div>
      )}
    </header>
  )
}

export default Header