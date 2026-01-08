import Navbar from "../components/navbar";
import Hero from "../components/hero_home";
import PartnersSection from "../components/partners_section";
import AboutSection from "../components/about_section";
import PricingSection from "../components/pricing_section";
import GallerySection from "../components/gallery_section";
import PromotionBanner from "../components/promotion_banner";
import TestimonialSection from "../components/testimonial_section";
import NewsArticleSection from "../components/news_article_section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <PartnersSection />
      <AboutSection />
      <PricingSection />
      <GallerySection />
      <TestimonialSection />
      <NewsArticleSection />
      <PromotionBanner />
      <Footer />
    </main>
  );
}
