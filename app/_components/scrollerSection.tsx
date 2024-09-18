"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { MdOutlineTextFields } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdDateRange } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden md:py-24">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "text",
    logo: <MdOutlineTextFields />,
  },
  {
    name: "Drop Down",
    logo: <IoIosArrowDropdownCircle />,
  },
  {
    name: "Mail",
    logo: <IoMdMail />,
  },
  {
    name: "Date",
    logo: <MdDateRange />,
  },
  {
    name: "name",
    logo: <MdDriveFileRenameOutline />,
  },
  {
    name: "Address",
    logo: <FaAddressCard />,
  },
  {
    name: "location",
    logo: <FaLocationDot />,
  },
  {
    name: "link",
    logo: <IoLink />,
  },
  {
    name: "choice",
    logo: <BiSolidSelectMultiple />,
  },
  {
    name: "phone",
    logo: <FaPhone />,
  },
];
