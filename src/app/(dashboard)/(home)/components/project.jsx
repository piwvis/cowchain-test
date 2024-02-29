import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Project = ({
  title,
  description,
  photo,
  tags,
  id,
  link,
  index,
  scrollIndex
}) => {
  return (
    <motion.div
      id={"project-" + id}
      className={cn(
        "project-card group relative flex h-screen min-h-[420px] w-full cursor-pointer border-b border-b-th-fade bg-cover bg-center bg-no-repeat px-4 py-8 will-change-transform md:h-96 md:min-w-[25vw] md:px-8 lg:h-screen lg:px-16 xl:h-screen",
        {
          expanded: scrollIndex === index
        }
      )}
      style={{ backgroundImage: `url(${photo})` }}
    >
      <motion.div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></motion.div>
      <Link
        href={link}
        className="absolute left-0 top-0 flex h-full w-full flex-col gap-y-4 px-12 py-8 group-hover:flex md:hidden xl:py-12"
      >
        <Link
          href={link}
          className="btn-contact ml-auto max-h-24 max-w-[96px] opacity-0 md:max-h-none md:max-w-none md:opacity-100"
        >
          VIEW PROJECT
        </Link>
        <div className="absolute bottom-5 flex max-w-[270px] flex-col gap-y-4 md:max-w-none">
          <div className="flex items-center gap-x-1 md:gap-x-2">
            {tags.map((tag, index) => (
              <div key={index} className="rounded-full bg-white px-3 py-2">
                <p className="text-xs font-medium text-black lg:text-sm">
                  {tag}
                </p>
              </div>
            ))}
          </div>
          <span className="mt-2">{title}</span>
          <p className="body max-w-sm !text-[#bbb]">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};
