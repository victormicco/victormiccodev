"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronsDown, Contact } from "lucide-react";
import { TypewriterEffect } from "../../../components/ui/typewriter-effect";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import ContactMe from "./contact";
import { ListOfStacks } from "./list-of-stacks";

export default function HeroSection() {
  const words = [
    {
      text: "Let",
      className: "text-4xl xl:text-6xl",
    },
    {
      text: "yourself",
      className: "text-4xl xl:text-6xl",
    },
    {
      text: "know",
      className: "text-primary dark:text-primary text-4xl xl:text-6xl",
    },
    {
      text: "me",
      className: "text-primary dark:text-primary text-4xl xl:text-6xl",
    },
  ];

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
        id="home"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
              <TypewriterEffect words={words} />
            </h1>
            <p className="mt-4 text-xl sm:text-3xl text-primary">
              Hello, I&apos;m Victor! A passionate developer with 3+ years of
              experience
            </p>

            <div className="mt-32 flex flex-col gap-20 justify-center items-center ">
              <ListOfStacks />
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
