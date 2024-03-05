import { HeroSection } from "./blocks/HeroSection";
import TeamContact from "./blocks/TeamContact";
import TeamGallery from "./blocks/TeamGallery";
import { Values } from "./blocks/Values";
import { ValuesMobile } from "./blocks/ValuesMobile";
import Tag from "@/components/ui/tag";
import linkedin from "@/assets/footer/linkedin.svg";
import telegram from "@/assets/footer/telegram.svg";
import mail from "@/assets/footer/mail.svg";
import team1 from "@/assets/team/team-carousel-2/team1.png";
import team2 from "@/assets/team/team-carousel-2/team2.png";
import team3 from "@/assets/team/team-carousel-2/team3.png";
import Image from "next/image";

const photos = [team1, team2, team3];

const Team = ({ setBurgerOpen }) => {
  return (
    <section className=" ">
      <div className="scrollbar-none  bg-black">
        <HeroSection />
        <Values />
        <ValuesMobile />

        <div className="mx-5 mt-14 flex flex-col gap-4  xl:mx-24 xl:mt-28 ">
          <Tag
            className={"max-w-[166px] xl:max-w-[200px]"}
            title={"founded and run by"}
          />
          <div className="flex flex-col justify-between xl:flex-row">
            <div className="flex max-w-[370px] flex-col items-start justify-start gap-4 pb-7 xl:pb-28 ">
              <h3 className="text-4xl uppercase xl:text-7xl">
                Mykhailo Adzhoiev
              </h3>
            </div>
            <div className="max-w-[497px] text-secondary">
              <p className="mb-5 text-secondary">
                Mykhailo Adzhoiev is a blockchain entrepreneur and crypto
                enthusiast with 9+ years of IT industry experience as a senior
                developer, team leader, and CTO. After years of working in
                traditional Web2 development, Mykhailo realized that he’s “been
                there, seen that, done that.” So once he got involved in a Web3
                project, he saw the potential for innovation in this industry
                that was missing in Web2 and suddenly knew he wanted to become a
                part of it.
              </p>
              <p className="text-secondary">
                After 3 unsuccessful attempts to create a team of passionate
                Web3 devotees, Mykhailo’s 4th time was a charm. That’s how
                Cowchain was created.
              </p>
              <div className="  mt-6 flex items-center justify-start    gap-x-4 xl:mt-4 ">
                <a
                  href="https://www.linkedin.com/company/cowchain/"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="linkedin"
                    className="w-12 lg:w-16"
                    src={linkedin}
                  ></Image>
                </a>
                <a
                  href="https://t.me/cowchain_team"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="telegram"
                    className="w-12 lg:w-16"
                    src={telegram}
                  ></Image>
                </a>
                <a
                  href="mailto:sales@cowchain.io"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <Image alt="mail" className="w-12 lg:w-16" src={mail}></Image>
                </a>
              </div>
            </div>
          </div>
          <div className="mb-16 mt-9 flex max-w-[110%] items-start  justify-start gap-2 overflow-x-scroll md:mt-0 md:items-center md:overflow-auto   lg:max-w-full  lg:justify-between">
            {photos.map((imgSrc, index) => (
              <Image
                src={imgSrc}
                className="h-[286px] w-[300px] lg:h-[492px] lg:w-[516px]"
                alt=""
                key={index}
              />
            ))}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center border-t border-t-th-fade px-8 py-16 text-center md:border-0  xl:my-24">
          <h3 className="mb-10 max-w-[890px] text-2xl font-light uppercase xl:text-4xl">
            “I think Web3 is amazing because, in this industry, everything
            doesn’t revolve merely around the product and its idea. In Web3,
            most solutions are community-centric. If you have a brilliant idea
            and manage to find like-minded people who also believe in it, then
            you’re almost destined for success.”
          </h3>
          <span className="  text-center text-white">
            Mykhailo Adzhoiev, CEO of Cowchain
          </span>
        </div>
        <TeamGallery />
        <TeamContact />
      </div>
    </section>
  );
};

export default Team;
