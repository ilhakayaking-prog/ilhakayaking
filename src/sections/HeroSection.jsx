import { MapPin, Users, Calendar, ArrowRight, Compass, ShieldAlert } from "lucide-react"

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-16">

      {/* Background Image Container with Ken Burns zoom effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-ken-burns"
          style={{
            backgroundImage: "url('/images/hero-kayak.jpg')",
          }}
        />
        {/* Intricate Dark Gradients Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/20"></div>

        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] glow-gradient-emerald opacity-30 pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] glow-gradient-orange opacity-40 pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Location Badge */}
            <a
              href="https://maps.app.goo.gl/kAsQSWeBcKjPQLVo7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-zinc-900/80 hover:bg-zinc-900/100 hover:border-orange-500/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg shadow-black/10 transition-all duration-300 cursor-pointer"
            >
              <MapPin size={16} className="text-orange-500 group-hover:scale-110 transition-transform animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-300 group-hover:text-white transition-colors">
                Pizhala Backwaters • Kochi, Kerala
              </span>
            </a>

            {/* Premium Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-[1.1] text-white tracking-tight">
              Paddle Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400">
                Kerala's Hidden Paradise
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl font-light">
              Explore serene backwater canals, open river channels, and historical Chinese fishing net installations. Our routes feature unobstructed sunset viewing locations across Kochi’s premier island cluster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918891666118"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-400 text-zinc-950 font-bold px-8 py-4 rounded-xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                Book on WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center bg-zinc-900/60 hover:bg-zinc-900 backdrop-blur-md text-white font-semibold border border-white/10 px-8 py-4 rounded-xl hover:border-white/30 transition-all duration-300"
              >
                View Moments
              </a>
            </div>



          </div>

          {/* Right Floating Card Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">

            {/* Quick Tour Specs Card */}
            <div className="w-full max-w-sm bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl animate-float relative z-10">

              {/* Card Title */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Compass className="text-emerald-400 animate-spin" style={{ animationDuration: '10s' }} size={20} />
                  <span className="font-display font-bold text-white text-base">Adventure Specs</span>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-semibold border border-emerald-500/20">
                  Daily slots
                </span>
              </div>

              {/* Specs Grid */}
              <div className="space-y-4">

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Calendar size={18} className="text-orange-400" />
                    <span className="text-sm">Tours Available</span>
                  </div>
                  <span className="text-sm font-semibold text-white">Sunrise & Sunset</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Users size={18} className="text-orange-400" />
                    <span className="text-sm">Group Sizes</span>
                  </div>
                  <span className="text-sm font-semibold text-white">1 to 20 Persons</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <ShieldAlert size={18} className="text-orange-400" />
                    <span className="text-sm">Skill Level</span>
                  </div>
                  <span className="text-sm font-semibold text-white">Beginner Friendly</span>
                </div>

              </div>

              {/* Live Info Widget */}
              <div className="mt-6 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 flex gap-3 items-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </span>
                <p className="text-xs text-orange-200 leading-normal">
                  <strong className="font-semibold">Booking Notice:</strong> Sunset slots fill fast. Pre-booking via WhatsApp is highly recommended.
                </p>
              </div>

            </div>

            {/* Glowing Accent behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] -z-10 animate-pulse-glow"></div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
    </section>
  )
}

export default HeroSection