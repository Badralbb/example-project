"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="max-w-7xl pl-4 mx-auto flex gap-2 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <div>Date invintation from</div>
        <div>
          <Image
            src={"/images/image5.jpeg"}
            alt="unda"
            width={60}
            height={60}
          />
        </div>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <Image
              src={item.src}
              alt="image"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "",
    title: "",
    src: "/images/image1.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "/images/image2.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "",
    src: "/images/image3.jpg",
    content: <DummyContent />,
  },

  {
    category: "",
    title: "",
    src: "/images/image4.jpg",
    content: <DummyContent />,
  },
];
