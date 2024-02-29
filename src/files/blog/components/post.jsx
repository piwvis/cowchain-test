import Tag from "components/ui/tag";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Post = ({ tag, title, content, imgSrc, className }) => {
  return (
    <Link
      href={"/blog/article"}
      className={cn(
        "group relative flex w-full cursor-pointer flex-col justify-start p-6",
        className
      )}
    >
      <Image
        className="mb-8 h-[360px] w-full self-center object-none transition-transform duration-200 group-hover:scale-95  md:h-auto md:object-fill"
        src={imgSrc}
        alt=""
      />

      <div className=" absolute right-5  items-center justify-center opacity-0  transition-opacity duration-300 group-hover:opacity-100">
        <button className="mx-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-center font-roc text-sm font-medium uppercase text-black lg:h-24 lg:w-24 lg:text-base">
          Read
        </button>
      </div>

      <Tag className="mb-6 mr-auto" title={tag} />
      <span className="mb-4 font-roc text-lg font-medium uppercase leading-6 text-white">
        {title}
      </span>
      <span className="text-sm  text-secondary">{content}</span>
    </Link>
  );
};
