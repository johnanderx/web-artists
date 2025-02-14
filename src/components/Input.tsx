import React from "react";

interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      className="bg-dark02 text-white w-[95%] lg:w-96 pl-2 p-2.5 rounded-md outline-none"
      type="text"
      placeholder={placeholder}
    />
  );
}
