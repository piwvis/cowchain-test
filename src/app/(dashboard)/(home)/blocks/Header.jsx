import bg_top from "@/assets/bg/header_top.png";
import bg_top_lg from "@/assets/bg/header_top_lg.png";
import Image from "next/image";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("./Video"));
const HeaderContent = dynamic(() => import("./HeaderContent"));

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
            priority
            alt=""
            className="absolute left-0 top-0 hidden w-full md:block"
            src={bg_top_lg}
          />
          <HeaderContent />
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
