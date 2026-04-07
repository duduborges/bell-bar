import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Drinks } from "@/components/Drinks";
import { Atmosphere } from "@/components/Atmosphere";
import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Drinks />
      <div className="section-divider" />
      <Atmosphere />
      <div className="section-divider" />
      <Reviews />
      <div className="section-divider" />
      <Gallery />
      <div className="section-divider" />
      <Contact />
    </>
  );
}
