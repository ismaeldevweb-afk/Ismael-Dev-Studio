import AboutAndPlans from "@/interfaces/components/marketing/AboutAndPlans";
import FinalCTA from "@/interfaces/components/marketing/FinalCTA";
import Footer from "@/interfaces/components/marketing/Footer";
import Header from "@/interfaces/components/marketing/Header";
import Hero from "@/interfaces/components/marketing/Hero";
import Process from "@/interfaces/components/marketing/Process";
import Projects from "@/interfaces/components/marketing/Projects";
import Services from "@/interfaces/components/marketing/Services";
import WhatsAppFloat from "@/interfaces/components/marketing/WhatsAppFloat";
import {
  createProfessionalServiceJsonLd,
  createWebSiteJsonLd,
} from "@/lib/structured-data";

export default function HomePage() {
  const structuredData = [
    createProfessionalServiceJsonLd(),
    createWebSiteJsonLd(),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-white text-slate-950">
        <Header />
        <Hero />
        <Services />
        <Projects />
        <Process />
        <AboutAndPlans />
        <FinalCTA />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  );
}
