"use client";

import EmblaCarousel from "./embla-carousel";
import { cn } from "@/lib/utils";

export default function BlogCarousel() {
  const SLIDE_COUNT = 2;
  const OPTIONS = { containScroll: "trimSnaps" };
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className={cn("relative")}>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}
