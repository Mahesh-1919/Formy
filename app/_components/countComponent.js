"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const CountComponent = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="p-10 bg-secondary  w-full text-white">
        <h1 className="text-center md:text-5xl text-3xl font-bold mb-3">
          {counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />}
          +
        </h1>
        <p className=" text-center text-xs md:text-sm ">
          Delivered form submissions. Ready to get yours?
        </p>
      </div>
    </ScrollTrigger>
  );
};

export default CountComponent;
