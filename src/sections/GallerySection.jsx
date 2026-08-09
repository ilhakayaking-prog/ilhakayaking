import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const items = [
    {
      src: "/images/Sunrise.webp",
      thumb: "/images/Sunrise-thumb.webp",
      title: "Sunrise",
      tag: "Sunrise Tour"
    },
    {
      src: "/images/Sunset.webp",
      thumb: "/images/Sunset-thumb.webp",
      title: "Sunset",
      tag: "Sunset Tour"
    },
    {
      src: "/images/Naturepath.webp",
      thumb: "/images/Naturepath-thumb.webp",
      title: "Nature Path",
      tag: "Nature Path"
    },
    {
      src: "/images/Ecoroute.webp",
      thumb: "/images/Ecoroute-thumb.webp",
      title: "Eco Route",
      tag: "Eco Route"
    },
    {
      src: "/images/Grouptour.webp",
      thumb: "/images/Grouptour-thumb.webp",
      title: "Group Tour",
      tag: "Group Tour"
    },
    {
      src: "/images/Sky&cloud.webp",
      thumb: "/images/Sky&cloud-thumb.webp",
      title: "Sky & Cloud",
      tag: "Sky & Cloud"
    },
  ]

  // Handle keyboard navigation for the lightbox
  useEffect(() => {
    if (activeImageIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveImageIndex(null)
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev + 1) % items.length)
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev - 1 + items.length) % items.length)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeImageIndex, items.length])

  const handleNext = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setActiveImageIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <section id="gallery" className="relative py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">

      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] glow-gradient-emerald opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] glow-gradient-orange opacity-15 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Title */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Visual Journal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Moments From Pizhala, Kadamakudy
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            Glimpse into the serene beauty, mangrove pathways, and spectacular sunsets experienced by our visitors.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className="group relative overflow-hidden rounded-3xl border border-white/5 cursor-pointer shadow-lg shadow-black/20"
            >

              {/* Media Container */}
              <div className="overflow-hidden h-80 relative">
                <img
                  src={item.thumb}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Floating expand icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-zinc-950/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <Maximize2 size={16} />
                </div>

                {/* Floating category tag */}
                <div className="absolute top-4 left-4 bg-orange-500/90 text-zinc-950 text-xs font-bold px-3 py-1 rounded-lg">
                  {item.tag}
                </div>

                {/* Hover Text Details */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-display font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view full screen
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Stateful Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
        >

          {/* Close button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image & Title Frame */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center gap-4 relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[activeImageIndex].src}
              alt={items[activeImageIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl animate-scale-up"
            />

            <div className="text-center">
              <span className="text-xs text-orange-500 font-bold tracking-widest uppercase">
                {items[activeImageIndex].tag}
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-1">
                {items[activeImageIndex].title}
              </h3>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

        </div>
      )}

    </section>
  )
}

export default GallerySection