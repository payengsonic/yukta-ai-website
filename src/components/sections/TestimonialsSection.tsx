import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientText } from "@/components/ui/GradientText";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Bangalore",
    initials: "PS",
    color: "#4f46e5",
    rating: 5,
    text: "I used to spend 45 minutes every week comparing prices on Blinkit and Zepto. With YUKTA AI I just search once and it shows me the best deal in seconds. I'm saving around ₹300 every single order.",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    initials: "RM",
    color: "#00c2a8",
    rating: 5,
    text: "The Nutrition Agent is a game changer. I set my weight loss goals and it builds my entire grocery cart around my macros. I never knew eating healthy could also be this affordable.",
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad",
    initials: "SP",
    color: "#6366f1",
    rating: 5,
    text: "I cooked butter chicken for 8 people last weekend. I just told the Chef Agent the dish and how many people — it listed every ingredient and ordered them from the cheapest store. Saved me so much hassle.",
  },
  {
    name: "Arjun Nair",
    location: "Hyderabad",
    initials: "AN",
    color: "#0ea5e9",
    rating: 5,
    text: "The savings dashboard is so satisfying. I can see exactly how much I've saved since I started using YUKTA AI. It's over ₹4,200 in two months. That's a free month of groceries basically.",
  },
  {
    name: "Deepika Rao",
    location: "Chennai",
    initials: "DR",
    color: "#8b5cf6",
    rating: 5,
    text: "My dietitian gave me a strict plan after my health checkup. The Nutrition Agent understood my restrictions instantly and now every week it suggests exactly what I should buy. My health markers have genuinely improved.",
  },
  {
    name: "Vikram Joshi",
    location: "Pune",
    initials: "VJ",
    color: "#f59e0b",
    rating: 5,
    text: "I asked the AI chatbot using my mic whether a certain cooking oil was better than another for heart health. It gave me a full comparison with nutritional data and even showed me which store had the better price. Incredible.",
  },
  {
    name: "Ananya Krishnan",
    location: "Delhi",
    initials: "AK",
    color: "#10b981",
    rating: 5,
    text: "As a working mom I barely have time to plan meals. The Chef Agent helps me plan the whole week — I tell it what dishes I want to cook for how many people and it handles everything. Groceries done in under 5 minutes.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm" aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-subtle overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            What Our Users Say
          </p>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Real People. <GradientText>Real Savings.</GradientText>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From saving hundreds of rupees weekly to eating healthier — see how YUKTA AI is changing how India shops for groceries.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.07}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 h-full hover:shadow-md transition-shadow duration-300">
                <StarRating count={t.rating} />
                <p className="text-text text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ background: t.color }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{t.name}</p>
                    <p className="text-xs text-muted">{t.location}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
