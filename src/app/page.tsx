import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Navbar />
        <Hero />
      </section>
      <LogoTicker />
      <section id="missao">
        <Introduction />
      </section>
      <section id="servicos">
        <Features />
      </section>
      <section id="ia">
        <Integrations />
      </section>
      <section id="valores">
        <Faqs />S
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}
