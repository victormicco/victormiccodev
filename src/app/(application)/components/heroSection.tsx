import { Button } from "@/components/ui/button";

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
            <span className="underline decoration-primary decoration-wavy decoration-from-font underline-offset-4">
              yourself
            </span>{" "}
            know me
          </h1>
          <p className="mt-4 text-xl sm:text-3xl text-primary">
            Providing you with the latest news and updates.
          </p>
          <div className="mt-8">
            <Button className="" variant={"default"}>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
