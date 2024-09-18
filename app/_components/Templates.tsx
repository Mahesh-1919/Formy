import React from "react";
import CarouselComponent from "./CarouselComponent";

const Templates = () => {
  return (
    <div className="container mx-auto md:p-20 p-10">
      <div className="text-center">
        <h1 className="md:text-5xl text-xl font-bold">
          Need inspiration ? <br /> Browse through our{" "}
          <span className="text-accent">form templates</span>
        </h1>
        <p className="text-xs text-zinc-500 md:my-5 md:max-w-3xl mx-auto">
          customize form templates are fit for all industries. Find the form
          template you need in our online form templates gallery that you can
          customize with our form builder without using code and collect data
          easily.
        </p>
      </div>
      <div className="p-10">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default Templates;
