import type { FAQItem, FeatureCard, NavLink, Step, WhyCard } from "@/types";

export const BRAND = {
  name: "YUKTA AI",
  company: "Udaan Spark AI",
  tagline: "Shop Smarter. Save More.",
  description:
    "YUKTA AI is your AI-powered grocery shopping assistant. Compare prices across Blinkit, Zepto, and Instamart instantly — and always checkout with the best deal.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://yukta.udaansparkai.com",
  companyUrl: "https://udaansparkai.com",
  supportEmail: "support@udaansparkai.com",
  playStoreUrl: "#", // placeholder until app is live
  year: 2026,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Support", href: "/support" },
];

export const FEATURES: FeatureCard[] = [
  {
    icon: "assistant",
    title: "AI Chatbot with Voice",
    description:
      "Talk to YUKTA AI using text or your mic. Ask anything — prices, substitutes, recipes, or nutrition — and get instant intelligent answers.",
  },
  {
    icon: "compare",
    title: "Multi-Store Price Comparison",
    description:
      "Search and compare prices across all major quick delivery apps simultaneously. See every option at a glance and always pick the best deal.",
  },
  {
    icon: "cart",
    title: "Nutrition-Curated Cart",
    description:
      "YUKTA AI builds your grocery cart based on your health profile and nutritional goals — not just price, but what's actually good for you.",
  },
  {
    icon: "swap",
    title: "AI Diet Plan & Nutrition Agent",
    description:
      "Set your dietary goals and let the Nutrition Agent create a personalised meal plan and automatically source the right ingredients.",
  },
  {
    icon: "lightning",
    title: "Chef Agent",
    description:
      "Pick any dish, set the number of people, and the Chef Agent figures out every ingredient and orders them for you — across the cheapest stores.",
  },
  {
    icon: "savings",
    title: "Savings Dashboard",
    description:
      "Track every order, see how much you saved on groceries, and watch your cumulative savings grow with every smart purchase.",
  },
];

export const HOW_IT_WORKS: Step[] = [
  {
    number: 1,
    title: "Search Your Groceries",
    description:
      "Type the items you need — from atta and dal to fruits and snacks. No special format required.",
  },
  {
    number: 2,
    title: "Compare Multiple Stores",
    description:
      "YUKTA AI fetches real-time prices from Blinkit, Zepto, and Instamart simultaneously.",
  },
  {
    number: 3,
    title: "AI Finds the Best Basket",
    description:
      "Our AI analyses thousands of combinations to recommend the cheapest overall basket — including delivery fees.",
  },
  {
    number: 4,
    title: "Checkout and Save",
    description:
      "Review your optimised cart and head straight to checkout. Save money on every single order.",
  },
];

export const WHY_YUKTA: WhyCard[] = [
  {
    icon: "rupee",
    title: "Saves You Money",
    description:
      "Real savings on every order — not cashback, not coupons. Just the cheapest price, guaranteed.",
  },
  {
    icon: "clock",
    title: "Saves You Time",
    description:
      "No more switching apps. Get price comparison results in seconds from a single search.",
  },
  {
    icon: "brain",
    title: "Powered by AI",
    description:
      "Our AI continuously learns to deliver smarter recommendations tailored to your shopping habits.",
  },
  {
    icon: "store",
    title: "Multiple Platforms",
    description:
      "Blinkit, Zepto, and Instamart — all in one place. More platforms coming soon.",
  },
  {
    icon: "decision",
    title: "Smart Decisions",
    description:
      "See nutritional info, quantity comparisons, and unit prices — everything you need to decide wisely.",
  },
  {
    icon: "person",
    title: "Personalised Shopping",
    description:
      "YUKTA AI remembers your preferences and dietary goals to make every suggestion more relevant.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does YUKTA AI compare prices across stores?",
    answer:
      "YUKTA AI fetches live product listings from Blinkit, Zepto, and Instamart in real time. Our AI engine then analyses every combination of stores to find the lowest total basket cost — accounting for delivery fees and minimum order values.",
  },
  {
    question: "Which grocery platforms are currently supported?",
    answer:
      "We currently support Blinkit, Zepto, and Instamart. We are actively working on adding Swiggy Instamart, BigBasket, and Amazon Fresh in upcoming releases.",
  },
  {
    question: "How does the AI decide which basket is best?",
    answer:
      "Our AI evaluates price per unit, total cart value, delivery charges, and estimated delivery time. It recommends the combination that minimises your total spend while meeting your quantity requirements.",
  },
  {
    question: "Is Google Login supported?",
    answer:
      "Yes. YUKTA AI uses Google Sign-In for secure, one-tap authentication. We do not store your Google password — only the basic profile information (name and email) required to personalise your experience.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes, YUKTA AI is completely free to download and use. We may introduce optional premium features in the future, but the core price comparison and AI shopping features will always remain free.",
  },
  {
    question: "How is my personal data protected?",
    answer:
      "Your data is encrypted in transit and at rest. We store only what is necessary to provide the service. You can request deletion of your account and all associated data at any time via our Delete Account page. We never sell your data to third parties.",
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/support#about" },
    { label: "Contact", href: "/contact" },
    { label: "Support", href: "/support" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Delete Account", href: "/delete-account" },
  ],
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
};
