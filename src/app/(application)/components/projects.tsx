"use client";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Button } from "../../../components/ui/button";

export default function Projects() {
  return (
    <div className="w-full flex justify-center p-10" id="projects">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold p-4 text-center">Projects</h1>
        <Carousel>
          <CarouselContent className="mx-2">
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <div className="aspect-16/9 rounded-lg overflow-hidden">
                    <Image
                      alt="Killuicon"
                      className="object-cover w-full h-full"
                      height={270}
                      src="https://i.ibb.co/Xj5k31m/killuicon.png"
                      style={{
                        aspectRatio: "480/270",
                        objectFit: "cover",
                      }}
                      width={480}
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-center">
                      <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary animate-ping" />
                        <div className="space-y-1 flex flex-col gap-y-2">
                          <p className="text-sm font-medium leading-none">
                            Killuicon
                          </p>
                          <p className="text-sm text-muted-foreground">
                            A project to find any icon you need.
                          </p>
                          <Button
                            className="w-28  "
                            onClick={() =>
                              window.open("https://killuicon.vercel.app")
                            }
                          >
                            Check it out
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <div className="aspect-16/9 rounded-lg overflow-hidden">
                    <Image
                      alt="NGO C.A.C.V"
                      className="object-cover w-full h-full"
                      height={270}
                      src="https://i.ibb.co/bv0dqWC/Screenshot-2024-03-17-172808.png"
                      style={{
                        aspectRatio: "480/270",
                        objectFit: "cover",
                      }}
                      width={480}
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-center">
                      <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary animate-ping" />
                        <div className="space-y-1 flex flex-col gap-y-2">
                          <p className="text-sm font-medium leading-none">
                            NGO C.A.C.V
                          </p>
                          <p className="text-sm text-muted-foreground">
                            A project to help a local NGO.
                          </p>
                          <Button
                            className="w-28  "
                            onClick={() =>
                              window.open("https://github.com/victormicco/cacv")
                            }
                          >
                            Check it out
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <div className="aspect-16/9 rounded-lg overflow-hidden">
                    <Image
                      alt="Encontrei"
                      className="object-cover w-full h-full"
                      height={270}
                      src="https://i.ibb.co/s2zX4yT/Screenshot-2024-03-17-173232.png"
                      style={{
                        aspectRatio: "480/270",
                        objectFit: "cover",
                      }}
                      width={480}
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-center">
                      <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary animate-ping" />
                        <div className="space-y-1 flex flex-col gap-y-2">
                          <p className="text-sm font-medium leading-none ">
                            Encontrei
                          </p>
                          <p className="text-sm text-muted-foreground">
                            A multiplataform lost and found app
                          </p>
                          <Button
                            className="w-28  "
                            onClick={() =>
                              window.open(
                                "https://github.com/fellipeutaka/encontrei"
                              )
                            }
                          >
                            Check it out
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
