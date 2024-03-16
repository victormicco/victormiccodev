"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref, inView } = useInView();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div className="w-full flex justify-center h-[1000px] mb-16">
      <div
        ref={ref}
        className={`rounded-lg border dark:border-gray-700 overflow-hidden w-2/3 p-8`}
        style={{
          transition: "opacity 3s ease",
          opacity: animate ? 1 : 0,
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground p-6">
          Experience
        </h1>
        <div className="h-full w-full relative overflow-y-auto">
          <div className="grid gap-4 p-6">
            <div className="flex gap-x-4 ">
              <Image
                alt="Anjun Brasil"
                className="rounded-lg"
                height="48"
                src="https://proimpeachment.com.br/wp-content/uploads/2022/05/Anjun-Rastreamento.jpeg"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="grid gap-1.5">
                <h3 className="text-lg font-semibold leading-none">
                  Software Developer
                </h3>
                <p className="text-sm font-medium not-italic leading-none text-gray-500">
                  Anjun Brasil
                </p>
              </div>
            </div>
            <div className="grid gap-1.5">
              <h4 className="text-sm font-medium not-italic leading-none">
                Oct 2023 - Present
              </h4>
              <p className="text-sm text-gray-500 leading-snug">
                Responsible for lead the development of an innovative MDFE, CTE,
                and NFSE software (front-end), overseeing the entire lifecycle
                from creation to closure. Collaborated with a dynamic team to
                facilitate document creation, editing, consultation,
                cancellation, and closure through requests on SEFAZ. Drove
                logistics knowledge acquisition to enhance and introduce new
                features to the document emission software. Developed robust and
                scalable solutions using cutting-edge technologies such as Next,
                Electron, React, and more, with Typescript as the primary
                language. Responsible for implement the pattern of unity tests
                and manage it from the scratch working with a really good team.
                Crafted the design of these software applications using Figma,
                ensuring a user-friendly and visually appealing interface.
                Managed communication with international stakeholders in
                English, facilitating effective collaboration. Contributed
                significantly to structured projects, including the creation and
                management of an invoicing software, development of a system to
                monitor external APIs for team awareness, and enhancements to
                the company&rsquo;s JS front-end library, optimizing code speed
                and design patterns.
              </p>
            </div>
          </div>
          <div className="grid gap-4 p-6">
            <div className="flex gap-4 items-center">
              <Image
                alt="Company"
                className="rounded-lg"
                height="48"
                src="https://media.licdn.com/dms/image/D4D0BAQEljRY-7J1ufQ/company-logo_200_200/0/1684755057677/htpp_nitroquimica_com_br_logo?e=2147483647&v=beta&t=LxhcmKuJgVVzjue2dG-enmyqgnJkF5RHLN57nX2X8uk"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="grid gap-1.5">
                <h3 className="text-lg font-semibold leading-none">
                  Information Technology Infrastructure
                </h3>
                <p className="text-sm font-medium not-italic leading-none text-gray-500">
                  Nitro
                </p>
              </div>
            </div>
            <div className="grid gap-1.5">
              <h4 className="text-sm font-medium not-italic leading-none">
                Jul 2023 - Oct 2023 · 4 mos
              </h4>
              <p className="text-sm text-gray-500 leading-snug">
                Dedicated to resolving infrastructure issues with an unwavering
                commitment to finding innovative solutions that prevent the
                recurrence of the same problems. Constantly exploring new
                approaches and methodologies to create robust and sustainable
                fixes, ensuring a proactive approach to infrastructure
                stability.
              </p>
            </div>
          </div>
          <div className="grid gap-4 p-6 ">
            <div className="flex gap-4 items-center ">
              <Image
                alt="Company"
                className="rounded-lg"
                height="48"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Metr%C3%B4-SP_icon.svg/768px-Metr%C3%B4-SP_icon.svg.png"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="grid gap-1.5">
                <h3 className="text-lg font-semibold leading-none">
                  Mechatronics Technician
                </h3>
                <p className="text-sm font-medium not-italic leading-none text-gray-500">
                  Metrô de São Paulo
                </p>
              </div>
            </div>
            <div className="grid gap-1.5">
              <h4 className="text-sm font-medium not-italic leading-none">
                May 2022 - Jul 2023 · 1 yr 3 mos
              </h4>
              <p className="text-sm text-gray-500 leading-snug">
                Engaged in the acquisition of mechatronics techniques, delving
                into the realms of mechanics, electronics, and programming.
                Spearheaded the development of various projects and tests aimed
                at honing skills and advancing training in the field. Actively
                pursued extracurricular courses to foster both professional and
                personal growth, demonstrating a commitment to continuous
                learning and self-development.
              </p>
            </div>
            <div className="flex gap-4 items-center mt-8">
              <Image
                alt="Company"
                className="rounded-lg"
                height="48"
                src="https://scontent.fgru12-1.fna.fbcdn.net/v/t39.30808-1/376258412_801776935282616_2095711069591827113_n.jpg?stp=c29.0.200.200a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=00ZO8oCsey4AX_hSo_N&_nc_ht=scontent.fgru12-1.fna&oh=00_AfBnzVLm0GcT5Zfxc_ZpFnsQkuqJPN3TeQfg23AQuC7Xfw&oe=65F9F00A"
                style={{
                  aspectRatio: "48/48",
                  objectFit: "cover",
                }}
                width="48"
              />
              <div className="grid gap-1.5">
                <h3 className="text-lg font-semibold leading-none">
                  Frontend Developer - Freelance
                </h3>
                <p className="text-sm font-medium not-italic leading-none text-gray-500">
                  2LT Engenharia
                </p>
              </div>
            </div>
            <div className="grid gap-1.5">
              <h4 className="text-sm font-medium not-italic leading-none">
                Jan 2020 - Jan 2022 · 2 yrs 1 mo
              </h4>
              <p className="text-sm text-gray-500 leading-snug">
                Championed the creation of a website, adhering to best
                programming practices and scalability standards. Undertook
                responsibilities encompassing potential maintenance, ensuring
                the site&apos;s longevity and optimal performance. Led the
                implementation of new features and functions, injecting
                innovation to enhance user experience and keep the website
                dynamic and relevant. Managed the design aspects, overseeing the
                aesthetic and functional aspects of the website to create a
                cohesive and engaging digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
