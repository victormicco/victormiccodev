"use client";
import React from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import etec from "../../../img/courses/etec.png";
import senai from "../../../img/courses/senai.png";
import oracle from "../../../img/courses/oracle.png";
import unicid from "../../../img/courses/unicid.png";

const content = [
  {
    title: "Oracle ONE",
    position: "Back-End Bootcamp - Java",
    date: "Jan 2024 - Out 2024",
    description:
      "During my intensive Back-End Bootcamp focused on Java, I immersed myself in the core principles and practices of server-side development. From mastering Java fundamentals to exploring advanced concepts like multithreading and concurrency, this program provided a thorough understanding of back-end architecture and development. Through hands-on projects and real-world challenges, I gained practical experience in building scalable and efficient Java-based applications. This portfolio reflects the culmination of my journey through the bootcamp, showcasing my expertise in Java programming, Spring Framework, RESTful APIs, database management, and other essential back-end technologies.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={oracle}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="oracle"
        />
      </div>
    ),
  },
  {
    title: "UNICID - Universidade de São Paulo",
    position: "Analysis and Systems Development",
    date: "2024 - 2027",
    description:
      "Throughout my college journey in analysis and software development, I embarked on a comprehensive exploration of the dynamic realm of computing. From dissecting fundamental theories to mastering cutting-edge methodologies, this program offered a holistic approach to software engineering. Through rigorous coursework, collaborative projects, and internships, I gained hands-on experience in designing, developing, and optimizing software solutions for diverse industries. This portfolio showcases the culmination of my academic endeavors, highlighting my proficiency in programming languages, data analysis, algorithm design, and software architecture.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={unicid}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="UNICID"
        />
      </div>
    ),
  },
  {
    title: "SENAI Anchieta",
    position: "Mechatronics Technician",
    date: "2022 - Dropout · 1 yr 3 mos",
    description:
      "During my mechatronics technician course, I delved deep into the multifaceted world of modern automation and robotics. From grasping foundational principles to exploring advanced techniques, this comprehensive program left no stone unturned. Through immersive hands-on projects and real-world simulations, I honed my skills in designing, building, and troubleshooting complex mechatronic systems. This portfolio serves as a testament to my expertise in integrating mechanical, electrical, and computer engineering principles to create innovative solutions in the field of mechatronics.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={senai}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="SENAI"
        />
      </div>
    ),
  },
  {
    title: "ETEC Parque Belém",
    position: "Systems Development Technician",
    date: "2020 - 2022",
    description:
      "In my comprehensive on-site software development journey, I immersed myself in the intricacies of modern development practices. From mastering fundamental concepts to delving into advanced techniques, this course covered it all. Through engaging in hands-on projects and tackling real-world scenarios, I gained invaluable practical experience in crafting robust software solutions. This portfolio showcases the culmination of my learning journey, highlighting my proficiency in various programming languages, frameworks, and methodologies.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src={etec}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="ETEC"
        />
      </div>
    ),
  },
];
export function EducationSection() {
  return (
    <>
      <div
        className="flex justify-center flex-col items-center gap-y-4 mt-20"
        id="education"
      >
        <h3 className="text-5xl font-bold">Education🎈</h3>

        <StickyScroll content={content} />
      </div>
    </>
  );
}
