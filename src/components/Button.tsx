import React from "react";
interface ButtonProps {
  title: string;
  event?: (e: any) => void;
}
export default function Button({ title, event }: ButtonProps) {
  return (
    <button
      onClick={event}
      className={`text-white rounded-lg w-24 p-2 flex justify-center bg-dark02 hover:bg-zinc-700 duration-500`}
    >
      {title}
    </button>
  );
}
