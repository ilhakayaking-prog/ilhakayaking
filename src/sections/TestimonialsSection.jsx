import { Star, Quote } from "lucide-react"

function TestimonialsSection() {
  const reviews = [
    {
      name: "Sujith Kumar",
      role: "Local Explorer",
      text: "The sunset kayaking was magic. Paddling through the silent mangroves of Pizhala with such knowledgeable guides was a highlight of my Kochi trip. Highly recommended!",
      rating: 5,
      avatarBg: "bg-gradient-to-tr from-orange-500 to-amber-400 text-zinc-950"
    },
    {
      name: "Sarah Jenkins",
      role: "Solo Traveler",
      text: "As a complete beginner, I was a bit nervous. But the guides were incredibly patient and the safety briefing made me feel secure. Floating under the sunset was peaceful.",
      rating: 5,
      avatarBg: "bg-gradient-to-tr from-emerald-500 to-teal-400 text-zinc-950"
    },
    {
      name: "Ashwin Ram",
      role: "Nature Photographer",
      text: "A photographer's paradise. The sunrise tour had mirror-like water reflections, gorgeous soft mist, and plenty of aquatic bird sightings. The local snack at the end was delicious!",
      rating: 5,
      avatarBg: "bg-gradient-to-tr from-blue-500 to-indigo-400 text-zinc-950"
    }
  ]

  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      
      {/* Ambience Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 glow-gradient-orange opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Visitor Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Loved By Adventurers
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            See what our guests say about their backwater kayaking journeys around Pizhala island.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-3xl flex flex-col justify-between hover:border-white/10 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-zinc-800 group-hover:text-orange-500/10 transition-colors duration-300">
                <Quote size={40} strokeWidth={1} />
              </div>

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-sm leading-relaxed italic font-light relative z-10">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-xl ${rev.avatarBg} font-display font-extrabold text-sm flex items-center justify-center`}>
                  {rev.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">{rev.name}</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">{rev.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection
