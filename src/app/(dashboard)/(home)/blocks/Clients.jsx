"use client";

import bg_lg from "@/assets/bg/home-clients.png";
import arrow from "@/assets/arrow_right.svg";
import { Counter } from "../components/counter";
import Link from "next/link";
import Image from "next/image";

export default function Clients() {
  return (
    <section className="relative">
      <Image
        alt=""
        className="absolute -top-[45%] right-0 h-screen md:-top-[45%] md:h-min  lg:-top-[80%]"
        src={bg_lg}
      />

      <div className="py-heading px-default relative">
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
          <h2 className="lg:order-0 text-4xl uppercase text-white  md:text-[60px]">
            OUR CLIENTS
          </h2>
          <Link
            href="/cases"
            className="hidden lg:order-1 lg:my-auto lg:ml-auto lg:block"
          >
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                VIEW ALL PROJECTS
              </p>
              <Image className="w-6" src={arrow} alt=""></Image>
            </div>
          </Link>
          <div className="mt-8 flex w-full max-w-xl justify-between  lg:order-3 lg:ml-auto">
            <div>
              <Counter duration={4} target={35} />
              <p className="body1 mt-2 uppercase">Techonologies</p>
            </div>
            <div>
              <Counter duration={4} target={93} />
              <p className="body1 mt-2 uppercase">Projects</p>
            </div>
            <div>
              <Counter duration={4} target={57} />
              <p className="body1 mt-2 uppercase">Clients</p>
            </div>
          </div>
          <p className="body my-8 max-w-lg md:my-12 lg:order-2 lg:max-w-xl">
            Over the course of just 3 years, our team has expertly developed 84+
            products in various niches, so we know exactly how to make your
            product successful. NFT marketplace? Play-to-Earn app? Crypto
            wallet? DeFi bridge? Chances are, we’ve done it all. Take a look at
            our portfolio and see for yourself
          </p>
          <Link href="/cases" className="lg:hidden">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                VIEW ALL PROJECTS
              </p>

              <Image className="w-6" src={arrow} alt=""></Image>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
