import { cn } from "@/lib/utils";

export const Category = ({ title, setTags, tags }) => {
  const handleClick = (isInclude, title) => {
    if (!isInclude) {
      setTags((tags) => [...tags, title]);
    } else {
      setTags((tags) => tags.filter((tag) => tag !== title));
    }
  };

  return (
    <button
      onClick={() => handleClick(tags.includes(title), title)}
      className={cn(
        "pointer cursor-pointer  whitespace-nowrap  rounded-[40px] bg-white/10 px-6 py-[11px] text-[14px] font-medium uppercase leading-[14px] text-white md:text-base",
        {
          "bg-white text-black": tags.includes(title)
        }
      )}
    >
      {title}
    </button>
  );
};
