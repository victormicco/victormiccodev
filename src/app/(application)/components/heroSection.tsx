import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
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
            <span className="underline decoration-primary decoration-solid decoration-from-font underline-offset-4">
              yourself
            </span>{" "}
            know me
          </h1>
          <p className="mt-4 text-xl sm:text-3xl text-primary">
            Hello, I&apos;m Victor! A passionate developer with 3+ years of
            experience in:
          </p>
          <div className="flex justify-center">
            <ul className="mt-4 text-xl sm:text-3xl text-primary flex flex-row justify-between w-2/3 ">
              <li className="text-foreground">React</li>
              <li className="text-primary">Typescript</li>
              <li className="text-foreground">NextJS</li>
              <li className="text-primary">Tailwind</li>
            </ul>
          </div>
          {/* <div className="flex justify-center my-10">
            <Image
              src={
                "https://media2.giphy.com/media/67oWKfDkwuFpByHv3j/giphy.gif"
              }
              alt="Person animation"
              width={500}
              height={500}
            />
          </div> */}
          <div className="mt-32">
            <Button className="" variant={"default"}>
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
