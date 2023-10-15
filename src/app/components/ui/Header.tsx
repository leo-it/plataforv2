"use client";

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  return (
    <div className="flex pt-5 mb-20  w-[100%] max-widt-[1440px] justify-between align-center height-full my-auto">
      <Link href={"/"} className="text-4xl font-bold	pl-5 ">
        <span className="text-[#9E8AFC]">Cour</span>
        <span className="t2">site</span>
      </Link>
      <div className="md:w-[300px] my-auto mr-5 md:mr-0" id="header-links">
        <Link href={"/about"}>Sobre mí</Link>
      </div>
    </div>
  );
};
