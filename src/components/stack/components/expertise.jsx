import { CollapsedIcon } from "./collapsed-icon";

export const ExpertiseBlock = ({ title, text, tools }) => {
  return (
    <article className="expertise_wrapper md-border-r relative cursor-default  border-b border-b-th-fade px-4 py-12 lg:px-8 lg:py-16 xl:px-16 xl:py-20">
      <div className="expertise_wrapper_bg absolute left-0 top-0 h-full w-full"></div>
      <div className="relative">
        <p className="body3 text-white">{title}</p>
        <p className="mt-8 text-[#bbb]">{text}</p>
        <div className="tools_wrapper mt-8 flex items-center">
          {tools.map((tool, index) => (
            <CollapsedIcon key={index} {...tool} />
          ))}
        </div>
      </div>
    </article>
  );
};
