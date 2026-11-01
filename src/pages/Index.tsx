import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Innovation from "@/components/Innovation";
import GeM from "@/components/GeM";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Innovation />
      <GeM />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
