"use client";
import killuiconPic from "../../../img/projects-content/killuicon.png";
import midoryiaPic from "../../../img/projects-content/midoryia.png";
import cacvPic from "../../../img/projects-content/cacv.png";
import encontreiPic from "../../../img/projects-content/encontrei.png";

import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3d-card";
import Image from "next/image";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Github } from "lucide-react";
import { useToast } from "../../../components/ui/use-toast";

export default function Projects() {
  const { toast } = useToast();
  return (
    <div className="w-full flex justify-center p-10" id="projects">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold p-4 text-center">Projects</h1>
        <Carousel>
          <CarouselContent className="mx-2 ">
            <CarouselItem className="">
              <div className="m-4">
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Midoryia
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Digital Marketing Quiz App
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="w-full mt-4"
                    >
                      <Image
                        src={midoryiaPic}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        onClick={() =>
                          window.open("https://midoriya-pink.vercel.app/")
                        }
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        onClick={() => {
                          window.open(
                            "https://github.com/victormicco/midoriya"
                          );
                        }}
                      >
                        <Github />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </CarouselItem>
            <CarouselItem className="">
              <div className="m-4">
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.5] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Killuicon
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      Find any icon you need by a domain - Convert formats of
                      files
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="w-full mt-4"
                    >
                      <Image
                        src={killuiconPic}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        onClick={() =>
                          window.open("https://killuicon.vercel.app/")
                        }
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        onClick={() => {
                          window.open(
                            "https://github.com/victormicco/killuicon"
                          );
                        }}
                      >
                        <Github />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </CarouselItem>
            <CarouselItem className="">
              <div className="m-4">
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-pink-500/[0.8] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      N.G.O CACV
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      A website to a N.G.O in Brazil, called CACV
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="w-full mt-4"
                    >
                      <Image
                        src={cacvPic}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        onClick={() => {
                          window.open("https://cacv.vercel.app/");
                        }}
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        onClick={() => {
                          window.open("https://github.com/victormicco/cacv");
                        }}
                      >
                        <Github />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </CarouselItem>
            <CarouselItem className="">
              <div className="m-4">
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-gray-500/[0.6] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Encontrei
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      A multiplataform lost and found app
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="w-full mt-4"
                    >
                      <Image
                        src={encontreiPic}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        onClick={() => {
                          return toast({
                            variant: "default",
                            title: "Click on the Github icon",
                            description:
                              "You gotta clone the repo and run it on your machine!",
                          });
                        }}
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        onClick={() => {
                          window.open(
                            "https://github.com/fellipeutaka/encontrei"
                          );
                        }}
                      >
                        <Github />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
