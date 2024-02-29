"use client";

import { cn } from "@/lib/utils";
import TeamEmblaCarousel from "./TeamEmbla";

export default function TeamCarousel() {
  const SLIDE_COUNT = 7;
  const OPTIONS = { loop: true };
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className={cn("relative z-20")}>
      <TeamEmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}
