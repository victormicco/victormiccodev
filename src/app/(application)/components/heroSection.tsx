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
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-28" variant={"outline"}>
                    About me
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-2/3 flex justify-center ">
                  {" "}
                  <DialogHeader>
                    <DialogTitle>About myself</DialogTitle>
                    <DialogDescription>
                      Feel free to know more about me
                    </DialogDescription>
                    <div className="text-justify pt-4">
                      <p className="flex gap-y-1">
                        My fascination with technology was ignited at a young
                        age, as I actively participated in an NGO in my
                        neighborhood since the tender age of 9. The foundation
                        of my programming skills, including programming logic,
                        algorithms, and agile methodology, laid the groundwork
                        for a self-directed learning path. I delved into online
                        courses, undertook personal projects, and ventured into
                        freelancing, cultivating a well-rounded skill set. I am
                        passionate about creating innovative and user-friendly
                        software solutions that solve real-world problems and
                        add value to customers. I am always eager to learn new
                        skills, technologies, and methodologies that can help me
                        improve my performance and deliver high-quality results.
                        I thrive in collaborative and diverse environments,
                        where I can contribute to the team&apos;s success and
                        grow as a professional.
                      </p>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
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
