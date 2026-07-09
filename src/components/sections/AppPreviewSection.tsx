import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export function AppPreviewSection() {
  return (
    <section className="py-24 overflow-hidden" aria-labelledby="preview-heading">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          }}
        >
          {/* Background decorations */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(79,70,229,0.6), transparent 70%)",
              filter: "blur(60px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,194,168,0.6), transparent 70%)",
              filter: "blur(60px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16">
            {/* Left: copy */}
            <AnimatedSection direction="right">
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Mobile App
              </p>
              <h2 id="preview-heading" className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                Your Pocket Grocery{" "}
                <span style={{ color: "#00c2a8" }}>Intelligence</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Real-time price comparison, AI basket optimisation, and smart product suggestions
                — all in a beautifully designed Android app.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Instant price comparison across 3 platforms",
                  "AI selects the cheapest overall basket",
                  "Google Sign-In for a personalised experience",
                  "100% free — no subscription required",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/80 text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "#00c2a8", color: "#fff", fontSize: "10px", fontWeight: "bold" }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <Button href={BRAND.playStoreUrl} size="lg" variant="secondary">
                Coming to Google Play
              </Button>
            </AnimatedSection>

            {/* Right: phone mockups */}
            <div className="flex items-end justify-center gap-6 pt-6">
              <AnimatedSection direction="left" delay={0.15} className="mb-8">
                <PhoneMockup accentColor="primary" label="Price Comparison" />
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.3}>
                <PhoneMockup accentColor="accent" label="Best Basket" />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
