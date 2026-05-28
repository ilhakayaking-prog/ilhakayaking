import { Clock, MapPin, Check, Star, Waves } from "lucide-react"

function PricingSection() {
  const packages = [
    {
      name: "Sunrise Tour",
      price: "₹700",
      duration: "2 Hours",
      time: "5:30 AM – 7:30 AM",
      features: [
        "Safety life jackets & gear",
        "Expert guided backwater route",
        "Calm morning bird watching",
        "Complimentary hot local tea",
        "Perfect soft morning lighting"
      ],
      popular: false,
      btnStyle: "bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10"
    },
    {
      name: "Sunset Adventure",
      price: "₹800",
      duration: "2.5 Hours",
      time: "4:00 PM – 6:30 PM",
      features: [
        "Premium life jackets & equipment",
        "Senior local tour specialist guide",
        "Mangrove navigation pathways",
        "Complimentary snack & fresh juice",
        "Spectacular golden hour photos"
      ],
      popular: true,
      btnStyle: "bg-gradient-to-r from-orange-500 to-amber-400 text-zinc-950 hover:shadow-orange-500/30"
    },
    {
      name: "Mangrove Explorer",
      price: "₹1,200",
      duration: "3.5 Hours",
      time: "Flexible Morning Slots",
      features: [
        "Professional grade touring kayak",
        "Extended safety briefing",
        "Deep-dive mangrove exploration",
        "Complimentary traditional lunch",
        "High quality digital photo pack"
      ],
      popular: false,
      btnStyle: "bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10"
    }
  ]

  return (
    <section id="pricing" className="relative py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-gradient-orange opacity-15 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Title */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Fair Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Choose Your Adventure
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            Affordable, transparent packages designed to give you the most unforgettable backwater kayaking experience in Kochi.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
                pkg.popular 
                  ? "border-orange-500/50 shadow-xl shadow-orange-500/5 lg:-translate-y-4" 
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              
              {/* Popular Glow Ring */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-400 text-zinc-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Best Seller
                </div>
              )}

              {/* Package Header */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold text-white">
                    {pkg.name}
                  </h3>
                  {pkg.popular && (
                    <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <Waves size={16} />
                    </span>
                  )}
                </div>

                {/* Price tag */}
                <div className="flex items-baseline gap-1 text-white mb-6">
                  <span className="text-4xl font-display font-extrabold">{pkg.price}</span>
                  <span className="text-zinc-400 text-sm"> / person</span>
                </div>

                {/* Tour Info Badges */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                    <Clock size={16} className="text-orange-500" />
                    <span>{pkg.duration} ({pkg.time})</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
                    <MapPin size={16} className="text-orange-500" />
                    <span>Pizhala Backwaters, Kochi</span>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-800 my-6"></div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5 text-zinc-300 text-sm leading-tight">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`https://wa.me/918891666118?text=Hi%20Ilha%20Kayaking,%20I'd%20like%20to%20book%20the%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold py-3.5 px-6 rounded-2xl transition-all duration-300 ${pkg.btnStyle}`}
                >
                  Book via WhatsApp
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default PricingSection