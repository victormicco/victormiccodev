import Image from "next/image";
import { Button } from "../../components/ui/button";
import Navbar from "../../components/navbar";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
    </div>
  );
}
