"use client";

import Navbar from "../../components/navbar";
import HeroSection from "./components/heroSection";

import Footer from "../../components/footer";
import { Experience } from "./components/experience";
import Projects from "./components/projects";

import EducationSection from "./components/education";

import ContactMe from "./components/contact";
import { Gallery } from "./components/gallery";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <Experience />
      <Projects />
      <EducationSection />
      <ContactMe />
      <Gallery />
      <Footer />
    </div>
  );
}
