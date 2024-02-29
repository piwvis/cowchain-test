import Image from "next/image";

export const CollapsedIcon = ({ logo, alt }) => {
  return (
    <div className="tool-icon-container z-10 flex h-12 min-h-[48px] min-w-[48px] max-w-[135px] items-center justify-center gap-x-2 rounded-full border border-th-grey bg-black text-sm">
      <Image className="" alt="logo" src={logo}></Image>
      <div className="tool-text hidden pl-2 text-center">
        <p className="md:text-sm">{alt}</p>
      </div>
    </div>
  );
};
