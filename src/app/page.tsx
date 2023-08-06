
'use client'
import HeroSection from "./components/sections/HeroSection";
import NewsLetter from "./components/sections/NewsLetter";
import ProductsSection from "./components/sections/ProdutsSection";
import PromotionSection from "./components/sections/PromotionSection";

export default function Home() {

  return (
    <main>
      <HeroSection />
      <PromotionSection />
      <ProductsSection />
      <NewsLetter />
    </main>
  )
}

