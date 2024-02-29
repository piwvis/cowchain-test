import React, { useRef } from "react";
import team from "@/assets/team/team.png";
import { motion, useScroll, useTransform } from "framer-motion";
import ua from "@/assets/ua.png";
import Image from "next/image";

export default function TeamInfo() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const marginTop = useTransform(scrollYProgress, [0.5, 0], [-50, 0]);

  return (
    <motion.div
      transition={{ from: 20, duration: 1 }}
      className=" -mt-40 border-b border-b-th-fade pb-28 md:mt-24  xl:mt-28"
    >
      <h3 className=" mx-5 mb-20 ml-5 max-w-[740px] text-2xl xl:mb-0 xl:ml-28  xl:text-4xl">
        SPLIT ACROSS{" "}
        <Image
          src={ua}
          className="mx-2 mb-2 inline-block max-h-[25px] max-w-[25px]"
          alt="ua"
        />
        UKRAINE AND EUROPE, WE WORK HARD AT FOSTERING AN ENVIRONMENT OF
        TOGETHERNESS, CREATIVITY, AND CLOSE COLLABORATION.
      </h3>
      <div className="flex flex-col items-center">
        <h1 className="mt-16 hidden text-center text-9xl xl:block">
          team photo
        </h1>
        <motion.div ref={ref} style={{ marginTop }}>
          <Image className="max-w-[375px] xl:max-w-[915px]" src={team} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
}
