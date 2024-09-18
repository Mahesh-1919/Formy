import React from "react";
import { MdCheck } from "react-icons/md";

const FreeSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1  grid-cols-reverse gap-8 container mx-auto md:p-24 p-10">
      <div className="md:order-first order-last md:py-5">
        <h1 className="font-bold md:text-4xl mb-4 md:mb-8 text-2xl">
          Free Online Form Builder
        </h1>
        <p className="mb-8 text-sm md:text-lg">
          Create secure online forms and surveys using our no-code, drag & drop
          free form builder. 3000+ form templates are available to get you
          started. Build beautiful forms, collect data securely, and improve
          your productivity — all with just a few clicks. Our tool handles a
          wide variety of use cases, such as:
        </p>
        <p className="flex gap-4 items-center">
          <span className="text-accent">
            <MdCheck />
          </span>{" "}
          Event registration forms for a better planning of events.
        </p>
        <p className="flex gap-4 items-center">
          <span className="text-accent">
            <MdCheck />
          </span>
          Order forms for collecting payments
        </p>

        <p className="flex gap-4 items-center">
          <span className="text-accent">
            <MdCheck />
          </span>
          Application forms for enrolling new members
        </p>
        <p className="flex gap-4 items-center">
          <span className="text-accent">
            <MdCheck />
          </span>{" "}
          Survey forms for collecting client feedback. 
        </p>
      </div>
      <div className=" h-full    ">
        <img src="./5.jpg" alt="img" className="object-cover rounded-lg " />
      </div>
    </div>
  );
};

export default FreeSection;
