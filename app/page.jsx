import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-grey-50 text-brand-grey-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <ContactFooter />
    </main>
  );
}
