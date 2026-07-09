import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyYuktaSection } from "@/components/sections/WhyYuktaSection";
import { AppPreviewSection } from "@/components/sections/AppPreviewSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description:
    "YUKTA AI compares grocery prices across Blinkit, Zepto, and Instamart in real time. Our AI finds the cheapest overall basket so you save money on every order.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: BRAND.name,
  operatingSystem: "ANDROID",
  applicationCategory: "ShoppingApplication",
  description:
    "AI-powered grocery price comparison across Blinkit, Zepto, and Instamart. Shop smarter and save money on every order.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  url: BRAND.siteUrl,
  creator: {
    "@type": "Organization",
    name: BRAND.company,
    url: BRAND.companyUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyYuktaSection />
      <AppPreviewSection />
      <FAQSection />
    </>
  );
}
