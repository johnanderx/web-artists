import React from "react";

interface InputProps {
  placeholder: string;
  event?: (e: any) => void;
}

export default function Input({ placeholder, event }: InputProps) {
  return (
    <input
      className="bg-dark02 text-white w-[95%] lg:w-96 pl-2 p-2.5 rounded-md outline-none"
      type="text"
      placeholder={placeholder}
      onChange={event}
    />
  );
}
