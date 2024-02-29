"use client";

import Benefits from "./Benefits";
import BenefitsMobiles from "./BenefitMobiles";
import Cases from "./Cases";
import Clients from "./Clients";
import Contact from "@/components/Contact";
import FAQ from "./FAQ";
import Stack from "@/components/stack";
import Team from "./Team";
 
export default function HomeContent() {
  return (
    <>
      <Benefits />
      <BenefitsMobiles />
      <Stack title={"Our Expertise"} />
      <Clients />
      <Cases />
      <Team />
      <FAQ />
      <Contact />
    </>
  );
}
