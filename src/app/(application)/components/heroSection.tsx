"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowBigDownDash, ChevronsDown, Contact, Mouse } from "lucide-react";
import { TypewriterEffect } from "../../../components/ui/typewriter-effect";
import { Application } from "@splinetool/runtime";

import { ListOfStacks } from "./list-of-stacks";
import { useEffect, useState } from "react";

function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
export default function HeroSection() {
  const isClient = useIsClient();
  const isMobile = isClient && window.innerWidth < 640;

  const words = [
    {
      text: "Let",
      className: "text-4xl xl:text-6xl",
    },
    {
      text: "yourself",
      className:
        "text-4xl xl:text-6xl decoration-dotted decoration-primary underline",
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

  useEffect(() => {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/NSrTLZ9Q3VHNpwFk/scene.splinecode");

    canvas.width = canvas.width * 0.5; // Decrease canvas width by half
    canvas.height = canvas.height * 0.5; // Decrease canvas height by half

    return () => {
      // Cleanup if necessary
    };
  }, []);
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
        className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-background to-background-dark"
        id="home"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
              <TypewriterEffect words={words} />
            </h1>
            <p className="mt-4 text-xl sm:text-3xl text-foreground font-semibold">
              Hello, I&apos;m{" "}
              <span className="inline-block bg-gradient-to-r from-primary via-pink-800  to-pink-400 bg-clip-text text-transparent">
                Victor
              </span>
              ! A passionate{" "}
              <span className="inline-block bg-gradient-to-r from-primary via-pink-800  to-pink-400 bg-clip-text text-transparent">
                developer
              </span>{" "}
              with 3+ years of{" "}
              <span className="inline-block bg-gradient-to-r from-primary via-pink-800  to-pink-400 bg-clip-text text-transparent">
                professional experience
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-16">
            <span className="content-center items-center"></span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full justify-center items-center pb-8 flex-col mb-16 flex h-6/6">
          <canvas
            id="canvas3d"
            className="rounded-3xl hidden lg:flex "
            style={{ opacity: 0.1 }}
          ></canvas>
        </div>

        <ArrowBigDownDash className="h-10 w-10 animate-bounce " />
        <p className="font-semibold text-sm ">Scroll down</p>
      </section>
      <div className="hidden lg:flex xl:flex flex-col justify-center items-center gap-y-4 text-3xl font-bold">
        <p>Have been working with</p>
        <ListOfStacks />
      </div>
    </motion.div>
  );
}
