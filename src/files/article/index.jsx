import Navbar from "components/Navbar";
import { HeroSection } from "./blocks/HeroSection";
import { Footer } from "components/Footer";
import splash from "assets/blog/articles/splash.png";
import planet from "assets/blog/articles/planet.png";
import FooterForm from "components/utils/FooterForm";
import { Blog } from "./blocks/Blog";

const Article = ({ setBurgerOpen }) => {
  return (
    <section>
      <div className="relative overflow-x-hidden bg-black">
        <Navbar isGradient={false} setBurgerOpen={setBurgerOpen} />
        <HeroSection />
        <Image
          src={splash}
          className=" block max-h-[560px] w-full object-cover"
          alt=""
        />
        <div className="container mb-28 mt-20 text-left 2xl:max-w-[670px] ">
          <h3 className="mb-6 text-left text-2xl uppercase">
            Building Trust in the Metaverse: Security and Privacy in Web3
            Development
          </h3>
          <span className="text-sm  text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae.
          </span>
          <Image
            src={planet}
            className=" my-12 block max-h-[260px] w-full object-cover"
            alt=""
          />
        </div>
        <div className="relative my-28 flex w-full flex-col items-center  overflow-hidden">
          <h3 className="mb-2 text-2xl uppercase">
            Subscribe to our newsletter
          </h3>
          <span className="mb-10 text-secondary">
            Receive weekly updates on new posts and features
          </span>
          <FooterForm />
        </div>
        <Blog />
        <Footer />
      </div>
    </section>
  );
};

export default Article;
