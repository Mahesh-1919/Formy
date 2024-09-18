"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSpacing() {
  const data = ["/3.jpg", "/4.png", "/6.jpg", "/7.jpg"];

  return (
    <Carousel className="w-full max-w-6xl mx-auto ">
      <CarouselContent className="-ml-1 flex items-center ">
        {data.map((item, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <Card className="flex justify-center items-center bg-inherit border-none">
                <CardContent className="p-0 border-none ">
                  <img
                    src={item}
                    alt="image"
                    className=" rounded-lg w-full  md:h-80 h-60"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
