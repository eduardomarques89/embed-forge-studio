import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="pt-20">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;