import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    }, 1200)
  }

  return (
    <section id="contact" className="relative py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] glow-gradient-emerald opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] glow-gradient-orange opacity-15 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
            Connect With Our Guides
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto rounded-full"></div>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            Have questions about weather, custom group events, or launch locations? Message us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Contact Cards + Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Contact Specs Grid */}
            <div className="space-y-6">
              
              {/* Card 1: Phone */}
              <a 
                href="https://wa.me/918891666118"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-zinc-950 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Call or WhatsApp</h4>
                  <p className="text-zinc-400 text-sm mt-0.5 group-hover:text-orange-400 transition-colors">
                    +91 8891666118
                  </p>
                </div>
              </a>

              {/* Card 2: Email */}
              <a 
                href="mailto:ilhakayaking@gmail.com"
                className="group flex items-center gap-5 p-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Email Address</h4>
                  <p className="text-zinc-400 text-sm mt-0.5 group-hover:text-emerald-400 transition-colors">
                    ilhakayaking@gmail.com
                  </p>
                </div>
              </a>

              {/* Card 3: Location */}
              <div className="flex items-center gap-5 p-5 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Departure Launch</h4>
                  <p className="text-zinc-400 text-sm mt-0.5">
                    Pizhala Ferry, Kochi, Kerala, India
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Google Map with Dark Mode Customization */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 h-64 lg:h-full min-h-[240px]">
              <iframe
                title="Ilha Kayaking location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.3243177995166!2d76.2690858!3d10.0722214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f5555555555%3A0xe543efee61053ef5!2sIlha%20Kayaking!5e0!3m2!1sen!2sin!4v1716912345678"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

          </div>

          {/* Right Column: Custom Glassmorphic Form Card */}
          <div className="lg:col-span-7 bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 sm:p-10 rounded-3xl relative flex flex-col justify-center">
            
            {isSubmitted ? (
              <div className="text-center py-12 px-4 space-y-6 animate-scale-up">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 mx-auto border border-emerald-500/20 shadow-xl shadow-emerald-500/5">
                  <CheckCircle2 size={44} className="animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-white">Message Dispatched!</h3>
                  <p className="text-zinc-400 max-w-sm mx-auto text-sm leading-relaxed">
                    Our team will check our logs and contact you via email or phone within a few hours. Paddle on!
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-zinc-800 hover:bg-zinc-750 text-white font-semibold text-sm px-6 py-2.5 rounded-xl border border-white/10 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Your Name</label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950/60 border border-white/5 focus:border-orange-500/40 rounded-xl px-4 py-3.5 text-zinc-100 placeholder-zinc-600 text-sm outline-none focus:ring-1 focus:ring-orange-500/20 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Email Address</label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-950/60 border border-white/5 focus:border-orange-500/40 rounded-xl px-4 py-3.5 text-zinc-100 placeholder-zinc-600 text-sm outline-none focus:ring-1 focus:ring-orange-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Message Description</label>
                  <textarea
                    id="form-message"
                    required
                    rows="5"
                    placeholder="Tell us about your plans (date, team size, custom requests)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950/60 border border-white/5 focus:border-orange-500/40 rounded-xl px-4 py-3.5 text-zinc-100 placeholder-zinc-600 text-sm outline-none focus:ring-1 focus:ring-orange-500/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-gradient-to-r from-orange-500 to-amber-400 text-zinc-950 font-bold py-4 rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

    </section>
  )
}

export default ContactSection