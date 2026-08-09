import { Instagram, Facebook, MapPin, Send } from "lucide-react"
import logo from "../assets/images/Logo_ilha.png"

function Footer() {
  const handleSubmitNewsletter = (e) => {
    e.preventDefault()
    alert("Welcome to the adventure! Thank you for subscribing.")
    e.target.reset()
  }

  return (
    <footer className="relative bg-zinc-950 text-zinc-100 pt-20 pb-10 border-t border-zinc-900 overflow-hidden">
      
      {/* Decorative Glows */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] glow-gradient-orange opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] glow-gradient-emerald opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 overflow-hidden bg-zinc-900 rounded-xl flex items-center justify-center border border-white/10 transition-all duration-300 shadow-md">
                <img src={logo} alt="Ilha Kayaking Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Ilha Kayaking
              </span>
            </a>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Discover the peaceful majesty of Kochi's backwaters. Experience sunset paddles, mangrove pathways, and guided kayaking excursions curated for all skill levels.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/ilha_kayaking", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/share/1WA38B7FR5/", label: "Facebook" },
                { icon: MapPin, href: "https://maps.app.goo.gl/kAsQSWeBcKjPQLVo7", label: "Google Maps" }
              ].map((item, idx) => {
                const IconComp = item.icon
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-orange-500 border border-zinc-800 text-zinc-400 hover:text-zinc-950 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10"
                  >
                    <IconComp size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:ml-auto">
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-zinc-300 mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { label: "Tours", href: "#tours" },
                { label: "Gallery", href: "#gallery" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="text-zinc-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Info Column */}
          <div className="lg:pl-8">
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-zinc-300 mb-6">
              Contact & Hours
            </h4>

            <ul className="space-y-3 text-zinc-400 text-sm">
              <li>
                <span className="block text-zinc-500 font-medium">Phone Support</span>
                <a href="tel:+918891666118" className="hover:text-white transition-colors">+91 8891666118</a>
              </li>
              <li>
                <span className="block text-zinc-500 font-medium">Operations Hours</span>
                <span className="text-zinc-300">Daily: 5:30 AM – 6:30 PM</span>
              </li>
              <li>
                <span className="block text-zinc-500 font-medium">Departure Point</span>
                <span className="text-zinc-300">Ferry near Paliyamthuruth water metro station, Kochi, Kerala</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-zinc-300 mb-6">
              Newsletter
            </h4>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Get notified of special sunrise paddles, seasonal routes, and event discounts.
            </p>

            <form onSubmit={handleSubmitNewsletter} className="relative flex items-center">
              <input
                type="email"
                required
                placeholder="Email address..."
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500/50 rounded-xl px-4 py-2.5 text-zinc-200 placeholder-zinc-500 text-sm outline-none focus:ring-1 focus:ring-orange-500/30 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 p-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-zinc-950 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-xs tracking-wider">
          <p>© {new Date().getFullYear()} Ilha Kayaking. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer