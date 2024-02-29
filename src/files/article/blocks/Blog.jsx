import { useRef } from "react";
import arrow from "../../../assets/arrow_right.svg";
import { blogData } from "../../../data/blogData";
import arrow_btn from "../../../assets/homepage/arrow-btn.png";
import { Post } from "../components/Post";

export const Blog = () => {
  const wrapper = useRef(null);

  const scroll = (scrollOffset, element) => {
    element.scrollLeft += scrollOffset;
  };

  return (
    <section id="blog" className="relative">
      <button
        id="blog-scroll"
        className="absolute right-24 top-1/3 z-30 hidden h-[50px] w-[50px] md:block"
        onClick={() => {
          scroll(480, wrapper.current);
        }}
      >
        <Image className="h-full w-full" src={arrow_btn} alt=""></Image>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="py-heading px-default md-border-r flex flex-col gap-y-6 border-b border-b-th-fade md:col-span-2">
          <h3 className="text-center md:text-left lg:max-w-[320px]">
            STAY UP TO DATE
          </h3>
          <a href="/blog" className="mx-auto md:mx-0">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                ALL ARTICLES
              </p>
              <Image className="w-6" src={arrow} alt=""></Image>
            </div>
          </a>
        </div>
        <div
          ref={wrapper}
          className="blog_wrapper flex items-stretch overflow-x-scroll border-b border-b-th-fade md:col-span-3"
        >
          {blogData &&
            blogData.map((postData, index) => (
              <Post key={index} {...postData} />
            ))}
        </div>
      </div>
    </section>
  );
};
