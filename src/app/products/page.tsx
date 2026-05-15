import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata = {
  title: "Products | Wuhao Industry & Trade",
  description: "Explore our comprehensive range of industrial storage and logistics solutions including wire containers, plastic pallets, IBC tanks, and warehouse racking systems.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <ProductCatalog />
      <Footer />
    </>
  );
}
