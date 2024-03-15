import Image from "next/image";
import { Button } from "../../components/ui/button";
import Navbar from "../../components/navbar";
import HeroSection from "./components/heroSection";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
