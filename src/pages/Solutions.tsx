import Navigation from "@/components/Navigation";
import TechnologySection from "@/components/TechnologySection";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="pt-20">
          <TechnologySection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;