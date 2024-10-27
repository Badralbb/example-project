"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

import { ButtonsCard } from "./ui/button";

import { useRouter } from "next/navigation";

export function TailwindcssButtons() {
  const router = useRouter();
  const date = () => {
    router.push("/date");
  };
  const copy = (button: any) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    let buttonString = reactElementToJSXString(button.component);

    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
      });
  };
  return (
    <div className="pb-40 px-4 w-full flex justify-center">
      <div>
        {buttons.map((button, idx) => (
          <ButtonsCard
            key={idx}
            onClick={() => {
              copy(button);
              date();
            }}
          >
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}
export const buttons = [
  {
    name: "Lit up borders",
    description: "Gradient button with perfect corners",
    component: (
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Click here
        </div>
      </button>
    ),
  },
];
