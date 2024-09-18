import NavBar from "./NavBar";

import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <section className=" bg-gradient-to-b overflow-hidden from-secondary    to-primary to-60%  h-full md:min-h-screen">
      <NavBar />
      <div className="flex w-full justify-center flex-col  md:gap-6 gap-4 items-center md:mt-10 py-10 h-full">
        <div className="text-center  md:text-7xl text-3xl font-bold">
          Build your <span className="text-accent">Form</span> in seconds
        </div>
        <p className=" text-sm text-zinc-500 md:w-[50%] mx-auto text-center md:px-10 px-6">
          Create any type of online form with ease using our intuitive form
          builder. Effortlessly design registration forms, order forms,
          application forms, surveys, and more, all seamlessly integrated with
          your digital tools.
        </p>
        <div>
          <div className="flex gap-6">
            <Button className="bg-accent rounded-md  hover:bg-accent/80">
              Get Started
            </Button>
            <Button
              className=" bg-accent/10 border-accent rounded-md  hover:text-white"
              variant={"outline"}
            >
              Browse Templates
            </Button>
          </div>
        </div>
        <div className=" relative w-[70vw]  bg-slate-900 mt-2 ">
          <img
            src="/hero2.png "
            alt="image"
            className=" md:rounded-t-2xl rounded-t-lg"
          />

          <div className=" absolute bg-gradient-to-t bottom-0 top-0 w-full from-[#000313] to-transparent  "></div>
        </div>
      </div>
    </section>
  );
}
