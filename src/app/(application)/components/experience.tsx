"use client";
import React from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const content = [
  {
    title: "Anjun Brasil",
    position: "Software Developer",
    date: "Oct 2023 - Present",
    description:
      "I was responsible for the whole development of a document emission system for the company, Maintener of the company's design system lib and also responsible for the development of the pages to inspect the products to the GRU International Airport. Using Typescript as the main language, and inside of it, a lot of Libs, Frameworks and tools as Next, React, React Native, Vue, TurboRepo, etc",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="https://dvow0vltefbxy.cloudfront.net/assets/landing/carriers/anjun-1ff6484db0742b1cf29dbe140d4e9cecb480471291119e63c3ed0bc6c27a790c.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Anjun Brasil"
        />
      </div>
    ),
  },
  {
    title: "Nitro Química",
    position: "Infrastructure Analyst",
    date: "Jul 2023 - Oct 2023 · 4 mos",
    description:
      "Dedicated to resolving infrastructure issues with an unwavering commitment to finding innovative solutions that prevent the recurrence of the same problems. Constantly exploring new approaches and methodologies to create robust and sustainable fixes, ensuring a proactive approach to infrastructure stability.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://www.lrindustrial.ind.br/uploads/clientes/nitroquimica_logotipo_633dc8366601f.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Nitro quimica"
        />
      </div>
    ),
  },
  {
    title: "Metrô de São Paulo",
    position: "Mechatronics Technician",
    date: "May 2022 - Jul 2023 · 1 yr 3 mos",
    description:
      "Engaged in the acquisition of mechatronics techniques, delving into the realms of mechanics, electronics, and programming. Spearheaded the development of various projects and tests aimed at honing skills and advancing training in the field. Actively pursued extracurricular courses to foster both professional and personal growth, demonstrating a commitment to continuous learning and self-development.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Metr%C3%B4-SP_icon.svg/768px-Metr%C3%B4-SP_icon.svg.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Metro de São Paulo"
        />
      </div>
    ),
  },
  {
    title: "2LT Engenharia",
    position: "Frontend Developer",
    date: "Jan 2020 - Jan 2022 · 2 yrs 1 mo",
    description:
      "Championed the creation of a website, adhering to best programming practices and scalability standards. Undertook responsibilities encompassing potential maintenance, ensuring the site's longevity and optimal performance. Led the implementation of new features and functions, injecting innovation to enhance user experience and keep the website dynamic and relevant. Managed the design aspects, overseeing the aesthetic and functional aspects of the website to create a cohesive and engaging digital presence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold text-center">2LT Engenharia</h1>
      </div>
    ),
  },
];
export function Experience() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-y-4">
        <h3 className="text-5xl font-bold">Experience🎈</h3>

        <StickyScroll content={content} />
      </div>
    </>
  );
}
