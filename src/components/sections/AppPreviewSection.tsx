import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import Image from "next/image";

const SCREENS = [
  { src: "/app/chatbot.jpeg", label: "AI Chatbot", delay: 0.1 },
  { src: "/app/nutrition.jpeg", label: "Nutrition Agent", delay: 0.25 },
  { src: "/app/chef.jpeg", label: "Chef Agent", delay: 0.4 },
];

function PhoneFrame({ src, label, delay }: { src: string; label: string; delay: number }) {
  return (
    <AnimatedSection direction="left" delay={delay} className="flex flex-col items-center">
      <div
        className="relative rounded-[2rem] border-[3px] border-white/20 overflow-hidden shadow-2xl"
        style={{ width: 160, height: 320, background: "#0f172a", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
      >
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover object-top"
          sizes="160px"
        />
        {/* Home indicator */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: 50, height: 3, background: "rgba(255,255,255,0.3)" }}
        />
      </div>
      <p className="mt-3 text-xs font-medium text-white/50 text-center">{label}</p>
    </AnimatedSection>
  );
}

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
            style={{ background: "radial-gradient(circle, rgba(79,70,229,0.6), transparent 70%)", filter: "blur(60px)" }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(0,194,168,0.6), transparent 70%)", filter: "blur(60px)" }}
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
                Search and compare prices across top quick delivery apps, get AI-curated carts, personalised nutrition guidance, and chef-crafted recipe shopping — all in one beautifully designed Android app.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Search and compare across all major quick delivery apps",
                  "AI curates your cart based on nutrition goals",
                  "Chef Agent orders ingredients for any dish and serving size",
                  "Savings dashboard tracks every rupee you save",
                  "100% free — no subscription required",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/80 text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold text-white"
                      style={{ background: "#00c2a8" }}
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

            {/* Right: real phone screenshots */}
            <div className="flex items-end justify-center gap-4 pt-6">
              {SCREENS.map((screen, i) => (
                <div
                  key={screen.src}
                  style={{ marginBottom: i === 1 ? "2rem" : "0" }}
                >
                  <PhoneFrame {...screen} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
