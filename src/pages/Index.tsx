import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TechnologySection from "@/components/TechnologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <TechnologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
