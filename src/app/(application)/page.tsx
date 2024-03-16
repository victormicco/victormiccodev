"use client";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import Navbar from "../../components/navbar";
import HeroSection from "./components/heroSection";
import Footer from "../../components/footer";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { motion } from "framer-motion";
import EducationSection from "./components/education";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Experience />
      <Projects />
      <EducationSection />
      <Footer />
    </>
  );
}
