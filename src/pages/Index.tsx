
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { UsefulLinks } from "@/components/UsefulLinks";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Clients />
        <UsefulLinks />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
