"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <section
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg')",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
              Let{" "}
              <span className="underline decoration-wavy decoration-primary decoration-from-font underline-offset-4">
                yourself
              </span>{" "}
              know me👋
            </h1>
            <p className="mt-4 text-xl sm:text-3xl text-primary">
              Hello, I&apos;m Victor! A passionate developer with 3+ years of
              experience in:
            </p>
            <div className="flex justify-center">
              <ul className="mt-4 text-xl sm:text-3xl text-primary flex flex-row justify-between w-2/3 ">
                <li className="text-foreground font-bold">React</li>
                <li className="text-primary font-bold">Typescript</li>
                <li className="text-foreground font-bold">NextJS</li>
                <li className="text-primary font-bold">Tailwind</li>
              </ul>
            </div>

            <div className="mt-32 flex flex-col gap-20 justify-center items-center">
              <Button className="w-28" variant={"outline"}>
                Get in touch
              </Button>
              <span className="content-center items-center">
                <ChevronsDown className="h-20 w-20 animate-bounce" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
