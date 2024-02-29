import React from "react";
import arrow from "../../../assets/arrow_right.svg";
import BlogCarousel from "../components/blog-carousel";
import Image from "next/image";

export const Blog = () => {
  return (
    <section id="blog" className="relative">
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
        <div className="blog_wrapper overflow-x-scroll   md:col-span-3">
          <BlogCarousel />
        </div>
      </div>
    </section>
  );
};
