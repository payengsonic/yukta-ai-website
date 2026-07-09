import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { FEATURES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  compare: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
    </svg>
  ),
  cart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
    </svg>
  ),
  assistant: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  swap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  ),
  lightning: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  savings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-subtle" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            What YUKTA AI Does
          </p>
          <h2 id="features-heading" className="text-3xl md:text-4xl font-extrabold text-dark mb-4">
            Everything You Need to{" "}
            <GradientText>Shop Intelligently</GradientText>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From real-time price comparison to personalised AI recommendations — YUKTA AI
            handles the complexity so you don&apos;t have to.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <Card hover className="h-full flex flex-col gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-primary"
                  style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.1), rgba(0,194,168,0.1))" }}
                >
                  {ICONS[feature.icon]}
                </div>
                <div>
                  <h3 className="font-bold text-text text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
