"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center select-none">
      {/* Glowing background circles */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-8 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #00c2a8 0%, transparent 70%)",
        }}
        animate={{ scale: [1.08, 1, 1.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main SVG illustration */}
      <motion.svg
        viewBox="0 0 320 320"
        className="relative z-10 w-64 h-64 md:w-80 md:h-80"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        {/* Shopping cart body */}
        <rect x="100" y="140" width="120" height="90" rx="16" fill="#4f46e5" opacity="0.15" />
        <rect x="108" y="148" width="104" height="74" rx="12" fill="#4f46e5" opacity="0.25" />

        {/* Cart handle */}
        <path
          d="M80 120 Q80 100 100 100 L220 100 Q240 100 240 120 L240 148 L80 148 Z"
          fill="none"
          stroke="#4f46e5"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Cart wheels */}
        <circle cx="130" cy="245" r="12" fill="#4f46e5" opacity="0.7" />
        <circle cx="190" cy="245" r="12" fill="#4f46e5" opacity="0.7" />
        <circle cx="130" cy="245" r="5" fill="white" />
        <circle cx="190" cy="245" r="5" fill="white" />

        {/* Store comparison cards */}
        {/* Blinkit card */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        >
          <rect x="55" y="155" width="70" height="44" rx="10" fill="white" filter="url(#shadow)" />
          <rect x="60" y="160" width="60" height="6" rx="3" fill="#f3f4f6" />
          <rect x="60" y="170" width="40" height="5" rx="2.5" fill="#4f46e5" opacity="0.4" />
          <rect x="60" y="179" width="50" height="4" rx="2" fill="#e5e7eb" />
          <circle cx="105" cy="163" r="3" fill="#fbbf24" />
          <text x="62" y="166" fontSize="5" fill="#6b7280" fontFamily="sans-serif">Blinkit</text>
          <text x="62" y="183" fontSize="6" fill="#111827" fontWeight="bold" fontFamily="sans-serif">₹195</text>
        </motion.g>

        {/* Zepto card */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <rect x="195" y="148" width="70" height="44" rx="10" fill="white" filter="url(#shadow)" />
          <rect x="200" y="153" width="60" height="6" rx="3" fill="#f3f4f6" />
          <rect x="200" y="163" width="40" height="5" rx="2.5" fill="#00c2a8" opacity="0.4" />
          <rect x="200" y="172" width="50" height="4" rx="2" fill="#e5e7eb" />
          <text x="202" y="159" fontSize="5" fill="#6b7280" fontFamily="sans-serif">Zepto</text>
          <text x="202" y="176" fontSize="6" fill="#111827" fontWeight="bold" fontFamily="sans-serif">₹210</text>
        </motion.g>

        {/* Instamart card */}
        <motion.g
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <rect x="125" y="78" width="70" height="44" rx="10" fill="white" filter="url(#shadow)" />
          <rect x="130" y="83" width="60" height="6" rx="3" fill="#f3f4f6" />
          <rect x="130" y="93" width="40" height="5" rx="2.5" fill="#f97316" opacity="0.4" />
          <rect x="130" y="102" width="50" height="4" rx="2" fill="#e5e7eb" />
          <text x="132" y="89" fontSize="5" fill="#6b7280" fontFamily="sans-serif">Instamart</text>
          <text x="132" y="106" fontSize="6" fill="#111827" fontWeight="bold" fontFamily="sans-serif">₹205</text>
        </motion.g>

        {/* AI sparkles */}
        <motion.g
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          style={{ transformOrigin: "246px 96px" }}
        >
          <path d="M246 88 L248 93 L253 96 L248 99 L246 104 L244 99 L239 96 L244 93 Z" fill="#00c2a8" />
        </motion.g>

        <motion.g
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          style={{ transformOrigin: "74px 130px" }}
        >
          <path d="M74 124 L76 129 L81 132 L76 135 L74 140 L72 135 L67 132 L72 129 Z" fill="#4f46e5" opacity="0.8" />
        </motion.g>

        <motion.g
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ transformOrigin: "256px 195px" }}
        >
          <path d="M256 191 L257.5 195 L261 197 L257.5 199 L256 203 L254.5 199 L251 197 L254.5 195 Z" fill="#00c2a8" opacity="0.6" />
        </motion.g>

        {/* AI brain / checkmark badge */}
        <motion.circle
          cx="210"
          cy="210"
          r="22"
          fill="#4f46e5"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <path
          d="M200 210 L207 218 L222 202"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Savings label */}
        <motion.g
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="96" y="165" width="70" height="22" rx="11" fill="#00c2a8" />
          <text x="131" y="180" fontSize="9" fill="white" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Save ₹247</text>
        </motion.g>

        {/* Defs */}
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#4f46e5" floodOpacity="0.12" />
          </filter>
        </defs>
      </motion.svg>
    </div>
  );
}
