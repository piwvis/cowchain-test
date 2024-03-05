import upwork from "@/assets/homepage/upwork.svg";
import clutch from "@/assets/homepage/clutch.svg";
import bg_top from "@/assets/bg/header_top.png";
import bg_top_lg from "@/assets/bg/header_top_lg.png";
import Image from "next/image";
import { lazy } from "react";

const Video = lazy(() => import("./Video"));

const Header = () => {
  return (
    <section
      className="fullheight -mt-40 overflow-hidden border-b border-b-th-fade md:-mt-0"
      id="header"
    >
      <div className="video-wrapper min-h-full">
        <Video />
        <div className="px-default relative flex min-h-full w-full flex-col pb-8">
          <Image
            srcSet={`${bg_top} 360w, ${bg_top} 480w, ${bg_top} 720w, ${bg_top_lg} 1920w`}
            sizes="(max-width: 640px) 100vw, 100vw"
            alt=""
            className="absolute left-0 top-0 hidden w-full md:block"
            src={bg_top_lg}
          />

           
          <div className="mt-auto grid grid-cols-1 md:grid-cols-2">
            <div className="relative flex items-center md:gap-x-1">
              <a
                href="https://www.upwork.com/ag/cowchain/"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image className="w-11 md:w-[70px]" src={upwork} alt=""></Image>
              </a>
              <a
                href="https://clutch.co/profile/cowchain"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image className="w-11 md:w-[70px]" src={clutch} alt=""></Image>
              </a>
            </div>
            <div className="my-4 flex cursor-default flex-col gap-y-4 md:items-end">
              <div>
                <h2>developers of web3</h2>
                <div className="md:mt-4 md:flex md:items-center md:justify-between">
                  <div className="flex flex-col gap-y-1">
                    <p className="body1 text-base">Mykhailo Adzhoiev</p>
                    <p className="text-sm  text-secondary">Founder & CTO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ModalVideo
          channel="youtube"
          youtube={{
            mute: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            disablekb: 1
          }}
          autoplay
          start
          isOpen={isOpen}
          videoId="0L38Z9hIi5s"
          ratio={screenWidth > 768 ? "16:9" : "1:1"}
          onClose={() => setOpen(false)}
        /> */}
      </div>
    </section>
  );
};

export default Header;
