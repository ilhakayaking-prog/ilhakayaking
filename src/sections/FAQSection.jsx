import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: "Do I need prior experience to join the kayaking tours?",
      a: "Absolutely not! Over 80% of our visitors are first-timers. Before we launch, our certified guides conduct a brief ground-training session to teach you basic paddling, steering, and safety protocols."
    },
    {
      q: "Are safety life jackets mandatory?",
      a: "Yes, 100%. Safety is our primary value. Every participant must wear a properly fitted, certified life jacket during the entire duration of the tour, regardless of their swimming capability."
    },
    {
      q: "What should I wear and bring with me?",
      a: "We recommend comfortable athletic clothes or quick-dry swimwear. Bring a cap/sun hat, sunglasses, sunscreen, a bottle of water, and dry clothes to change into after the tour. We provide dry bags for your phone and essentials."
    },
    {
      q: "Where is the launch point and is parking available?",
      a: "We launch from the Pizhala Ferry Point in Kochi. There is ample free vehicle parking space available right next to the departure dock. Detailed map coordinates will be shared with you on WhatsApp upon booking."
    },
    {
      q: "What happens if it rains on the day of the tour?",
      a: "Light rain can actually make the backwaters incredibly beautiful and serene! However, in case of heavy downpours, strong winds, or unsafe weather alerts, we will cancel the slot and offer you a full refund or free rescheduling."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 bg-zinc-950 overflow-hidden border-t border-zinc-900">
      
      {/* Accent Glows */}
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] glow-gradient-emerald opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-white/10"
              >
                
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 text-white">
                    <HelpCircle size={18} className="text-orange-500 flex-shrink-0" />
                    <span className="font-display font-bold text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  
                  <span className={`text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : ""}`}>
                    <ChevronDown size={18} />
                  </span>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-80 border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-zinc-400 text-sm leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQSection
