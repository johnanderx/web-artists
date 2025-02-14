"use client";
import React from "react";
import { colors } from "@/global/colors";

export default function Input() {
  return (
    <input
      className={`w-4/5 lg:w-96 pl-2 p-2 bg-[${colors.dark02}] rounded-md outline-none`}
      type="text"
      placeholder="search"
    />
  );
}
