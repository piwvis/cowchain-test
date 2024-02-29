import Tag from "@/components/ui/tag";
import Link from "next/link";
import Image from "next/image";

export const CaseSplash = ({ title, tags, img_mobile, img_desktop, link }) => {
  return (
    <Link
      href={link}
      className="group relative flex w-full items-end justify-start border-t border-th-fade"
    >
      <Image
        src={img_desktop}
        className=" hidden max-h-[560px] w-full object-cover lg:block"
        alt=""
      />
      <Image
        src={img_mobile}
        className=" block max-h-[560px] min-h-[500px] w-full object-cover lg:hidden"
        alt=""
      />
      <div className="absolute  bottom-1/2 right-10 ">
        <Link
          href={link}
          className="mx-auto  hidden h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-white text-center font-roc text-sm font-medium uppercase text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex lg:h-48 lg:w-48 lg:text-base"
        >
          View Project
        </Link>
      </div>
      <div className="absolute z-10 mb-4  ml-5 max-w-[270px] md:mb-16 md:ml-20 md:max-w-full">
        <ul className="mb-2 flex flex-wrap gap-[6px] md:mb-8 md:flex-nowrap">
          {tags.map((title, index) => (
            <Tag key={`${title + index}`} title={title} />
          ))}
        </ul>
        <h2 className="text-2xl md:text-3xl md:text-[42px]">{title}</h2>
      </div>
    </Link>
  );
};
