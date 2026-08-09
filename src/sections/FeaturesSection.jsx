import { Shield, Compass, Leaf, Award } from "lucide-react"

function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Safety Certified",
      description:
        "All excursions feature premium safety vests, floating gear, and comprehensive training before setting off.",
      gradient: "from-emerald-500 to-teal-400",
      glowColor: "group-hover:shadow-emerald-500/10"
    },
    {
      icon: Compass,
      title: "LOCAL SPECIALISTS",
      description:
        "Our skilled guides know hidden waterways, tidal variations, and seasonal water currents. They navigate the local village channels safely while identifying operational Chinese fishing nets and historic island landmarks.",
      gradient: "from-orange-500 to-amber-400",
      glowColor: "group-hover:shadow-orange-500/10"
    },
    {
      icon: Leaf,
      title: "ECOLOGY DRIVEN",
      description:
        "We practice strictly low-impact, eco-friendly paddling across all routes. Our operations prioritize zero-plastic initiatives, wildlife non-disturbance protocols, and local water conservation efforts.",
      gradient: "from-emerald-400 to-cyan-500",
      glowColor: "group-hover:shadow-cyan-500/10"
    },
    {
      icon: Award,
      title: "Premium Rigging",
      description:
        "Float in comfortable single or tandem sit-on-top kayaks designed for perfect tracking and beginner balance.",
      gradient: "from-orange-400 to-pink-500",
      glowColor: "group-hover:shadow-orange-500/10"
    },
  ]

  return (
    <section id="tours" className="relative py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      
      {/* Background Grid Pattern & Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 glow-gradient-emerald opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] glow-gradient-orange opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            The Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Why Explore With Us?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            Experience the calm serenity of Kochi’s backwaters with a professional outfitter dedicated to safety, sustainability, and authentic exploration.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div
                key={index}
                className={`group relative bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl hover:border-white/10 hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${feature.glowColor}`}
              >
                
                {/* Decorative border gradient glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${feature.gradient} flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="text-zinc-950 font-bold" size={24} />
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default FeaturesSection