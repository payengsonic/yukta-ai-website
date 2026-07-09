import { clsx } from "clsx";

interface PhoneMockupProps {
  className?: string;
  accentColor?: "primary" | "accent";
  label?: string;
}

export function PhoneMockup({ className, accentColor = "primary", label }: PhoneMockupProps) {
  const borderColor = accentColor === "primary" ? "#4f46e5" : "#00c2a8";
  const glowColor = accentColor === "primary" ? "rgba(79,70,229,0.3)" : "rgba(0,194,168,0.3)";

  return (
    <div className={clsx("relative flex flex-col items-center", className)}>
      <div
        className="relative rounded-[2.5rem] border-[3px] shadow-2xl overflow-hidden"
        style={{
          width: 220,
          height: 440,
          borderColor,
          boxShadow: `0 24px 64px ${glowColor}`,
          background: "#0f172a",
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-10"
          style={{ width: 80, height: 24, background: "#0f172a" }}
        />

        {/* Screen content placeholder */}
        <div className="absolute inset-0 flex flex-col">
          {/* Status bar */}
          <div className="h-8 bg-gray-900/80 flex items-center justify-between px-5 pt-2">
            <span className="text-white text-[10px] font-medium">9:41</span>
            <div className="flex gap-1">
              <div className="w-3 h-2 rounded-sm bg-white/60" />
              <div className="w-2 h-2 rounded-full bg-white/60" />
            </div>
          </div>

          {/* App content mockup */}
          <div className="flex-1 p-3 flex flex-col gap-2 bg-gray-950">
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
              <div className="text-white font-bold text-xs">YUKTA AI</div>
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: borderColor }}
              />
            </div>

            {/* Search bar */}
            <div className="bg-gray-800 rounded-xl px-3 py-2 text-gray-400 text-[9px]">
              Search groceries…
            </div>

            {/* Product cards */}
            {[
              { name: "Tata Salt 1kg", prices: ["₹22", "₹25", "₹21"], best: 2 },
              { name: "Amul Milk 500ml", prices: ["₹28", "₹28", "₹26"], best: 2 },
              { name: "Fortune Atta 5kg", prices: ["₹198", "₹205", "₹195"], best: 2 },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-2.5">
                <div className="text-white text-[9px] font-medium mb-1.5">{item.name}</div>
                <div className="flex gap-1.5">
                  {["B", "Z", "I"].map((store, j) => (
                    <div
                      key={j}
                      className="flex-1 rounded-lg py-1 text-center"
                      style={{
                        background: j === item.best ? borderColor : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="text-[8px] text-gray-400">{store}</div>
                      <div
                        className="text-[9px] font-bold"
                        style={{ color: j === item.best ? "#fff" : "#9ca3af" }}
                      >
                        {item.prices[j]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div
              className="rounded-xl py-2 text-center text-white text-[9px] font-bold mt-auto"
              style={{ background: `linear-gradient(135deg, ${borderColor}, ${accentColor === "primary" ? "#00c2a8" : "#4f46e5"})` }}
            >
              Save ₹247 with Best Basket →
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: 60, height: 3, background: "rgba(255,255,255,0.3)" }}
        />
      </div>

      {label && (
        <p className="mt-4 text-sm font-medium text-muted text-center">{label}</p>
      )}
    </div>
  );
}
