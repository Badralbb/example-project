import { TailwindcssButtons } from "@/components/tailwindButton";
import { AppleCardsCarouselDemo } from "@/components/ui/Caruasol";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <main className="bg-pink-100">
      <div className="max-w-[1200px] mx-auto">
        <AppleCardsCarouselDemo />

        <TailwindcssButtons />
      </div>
    </main>
  );
}
