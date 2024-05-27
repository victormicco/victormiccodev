"use client";

import { useState } from "react";
import { TracingBeam } from "../../../components/ui/tracing-beam";

export function Experience() {
  const [keyOfDiv, setKeyOfDiv] = useState(0);
  return (
    <div
      className="flex justify-center flex-col items-center gap-y-2 "
      id="experience"
    >
      <span className="font-bold text-5xl flex mb-10">
        <h3 className="decoration-wavy decoration-primary underline">
          Experience
        </h3>
        🚀
      </span>

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div className="mb-10" key={`content-${Math.random()}`}>
              <p className="text-3xl mb-4 font-extrabold text-primary">
                {item.title}
              </p>
              <h2 className="bg-foreground text-background rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <div className="text-sm  prose prose-sm dark:prose-invert mb-4">
                {item.stacks.map((stack) => (
                  <span
                    className="mr-2  text-xl "
                    key={`stack-${Math.random()}`}
                  >
                    {stack}
                  </span>
                ))}
              </div>
              {item.description}
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Comhub",
    description: (
      <>
        <p>
          Responsible for create usefuk and scalable fullstack solutions, using
          best pratices. Overseeing the whole development of external softwares.
          <br />
        </p>
        <p>
          Collaborated with a dynamic team to architect and develop all
          softwares from scratch.
          <br />
        </p>
      </>
    ),
    badge: "Fullstack Developer | May - Present",
    stacks: [
      "| Next |",
      "React |",
      "Typescript |",
      "Tailwind |",
      "Node|",
      "Fastify",
      "Docker|",
      "Postgres|",
      "PrismaORM|",
      "MySQL",
    ],
  },
  {
    title: "Anjun Brasil",
    description: (
      <>
        <div>
          Responsible for lead the development of an innovative MDFE, CTE, and
          NFSE software (front-end), overseeing the entire lifecycle from
          creation to closure.{" "}
          <p>
            Collaborated with a dynamic team to facilitate document creation,
            editing, consultation, cancellation, and closure through requests on
            SEFAZ.
          </p>
          <br />
          <p>
            Crafted the design of these software applications using Figma,
            ensuring a user-friendly and visually appealing interface. Managed
            communication with international stakeholders in English,
            facilitating effective collaboration.
          </p>
          <br />
          <p>
            Contributed significantly to structured projects, including the
            creation and management of an invoicing software, development of a
            system to monitor external APIs for team awareness, and enhancements
            to the company&apos;s JS front-end library, optimizing code speed
            and design patterns.
          </p>
          <br />
        </div>
      </>
    ),
    badge: "Software Developer | Oct 2023 - May 2024",
    stacks: [
      "| Next |",
      "React |",
      "React Native |",
      "Typescript |",
      "Shadcn |",
      "Storybook |",
      "Tailwind |",
      "Zod |",
      "Framer Motion |",
      "React Query |",
      "React Hook Form |",
      "React Testing Library |",
      "Jest",
    ],
  },
  {
    title: "Nitro Química",
    description: (
      <>
        <p>
          Dedicated to resolving infrastructure issues with an unwavering
          commitment to finding innovative solutions that prevent the recurrence
          of the same problems. Constantly exploring new approaches and
          methodologies to create robust and sustainable fixes, ensuring a
          proactive approach to infrastructure stability.
          <br />
        </p>
      </>
    ),
    badge:
      "Information Technology Infrastructure | Jul 2023 - Oct 2023 · 4 mos",
    stacks: [
      "| Windows |",
      "Linux |",
      "Networking |",
      "VMware |",
      "Active Directory |",
      "DNS |",
      "DHCP |",
      "WSUS |",
      "GPO |",
      "Hyper-V |",
      "Powershell",
    ],
  },
  {
    title: "Metrô de São Paulo",
    description: (
      <>
        <div>
          Engaged in the acquisition of mechatronics techniques, delving into
          the realms of mechanics, electronics, and programming. Spearheaded the
          development of various projects and tests aimed at honing skills and
          advancing training in the field. <br />
          <br />
          <p>
            Actively pursued extracurricular courses to foster both professional
            and personal growth, demonstrating a commitment to continuous
            learning and self-development.
          </p>
        </div>
      </>
    ),
    badge: "Mechatronics Technician | May 2022 - Jul 2023 · 1 yr 3 mos",
    stacks: [
      "| Mechanics |",
      "Electronics |",
      "Programming |",
      "Automation |",
      "PLC |",
      "Arduino |",
      "Raspberry Pi |",
      "C++ |",
      "Python |",
      "SolidWorks",
    ],
  },
  {
    title: "2LT Engenharia",
    description: (
      <>
        <div>
          Championed the creation of a website, adhering to best programming
          practices and scalability standards. <br />
          <br />
          <p>
            Undertook responsibilities encompassing potential maintenance,
            ensuring the site&apos;s longevity and optimal performance.
          </p>{" "}
          <br />
          <p>
            {" "}
            Led the implementation of new features and functions, injecting
            innovation to enhance user experience and keep the website dynamic
            and relevant.
          </p>
          <br />
          <p>
            Managed the design aspects, overseeing the aesthetic and functional
            aspects of the website to create a cohesive and engaging digital
            presence.
          </p>
        </div>
      </>
    ),
    badge: "Frontend Developer | Jan 2020 - Jan 2022 · 2 yrs 1 mo",
    stacks: [
      "| HTML |",
      "CSS |",
      "Javascript |",
      "React |",
      "Next |",
      "Figma |",
      "Tailwind |",
      "Bootstrap |",
    ],
  },
];
