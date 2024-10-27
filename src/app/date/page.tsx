"use client";

import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function App() {
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [show, setShow] = useState(false);

  const words = [
    {
      text: "Date",
      className: "text-pink-200",
    },
    {
      text: "with",
      className: "text-purple-300",
    },
    {
      text: "me",
      className: "text-red-500",
    },
  ];
  const words1 = "YOU ARE SO BEAUTIFUL";
  const handleMouseMove = () => {
    // Mouse position-ыг авах

    const top = Math.floor(Math.random() * 400 + 10);
    const left = Math.floor(Math.random() * 400 + 10);

    // Зүүн дээд талын координат

    setPosition({ top: top, left: left });
  };
  useEffect(() => {
    const div = document.getElementById("div");
    div?.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="bg-pink-100 min-h-screen">
      <div className="flex justify-center">
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="max-w-[800px] mx-auto flex justify-between gap-12">
        <div className="" style={{ width: 400, height: 400 }}>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            style={{
              overflow: "hidden",
              borderRadius: "50%",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Зүрхэн хэлбэр үүсгэх SVG path */}
            <defs>
              <clipPath id="heartClip">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                />
              </clipPath>
            </defs>
            {/* Дотор нь зургийг байрлуулах */}
            <image
              xlinkHref={"/images/image1.jpg"}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#heartClip)"
            />
          </svg>
          <TextGenerateEffect className="ml-5" words={words1} />
        </div>
        <div className="container">
          <div className="glass"></div>
          <div className="thorns">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="glow"></div>
          <div className="rose-leaves">
            <div></div>
            <div></div>
          </div>
          <div className="rose-petals">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="sparkles">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-28 gap-3">
        <div id="div" className="w-[400px] flex justify-center  h-[400px]">
          <Button
            className="relative"
            style={{
              transition: "0.1s",
              left: position.left + "px",
              top: position.top + "px",
            }}
            variant="destructive"
          >
            reject
          </Button>
          <Button onClick={() => setShow(true)}>accept</Button>
        </div>

        <AnimatePresence>
          {show && (
            <>
              <Confetti width={1600} height={1000} numberOfPieces={300} />

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#28a745",
                  marginTop: "20px",
                }}
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
