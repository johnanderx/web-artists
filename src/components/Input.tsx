import React from "react";

interface InputProps {
  placeholder: string;
  value?: string;
  type: string;
  event?: (e: any) => void;
}

export default function Input({ placeholder, event, value, type }: InputProps) {
  return (
    <input
      className="bg-dark02 text-white w-[95%] lg:w-96 pl-2 p-2.5 rounded-md outline-none"
      type={type}
      placeholder={placeholder}
      onChange={event}
      defaultValue={value}
    />
  );
}
