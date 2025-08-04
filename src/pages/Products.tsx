import Navigation from "@/components/Navigation";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="pt-20">
          <ProductsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;