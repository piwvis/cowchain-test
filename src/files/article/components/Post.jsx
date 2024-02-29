import TextTruncate from "react-text-truncate";

export const Post = ({ id, title, description, photo }) => {
  const toText = (node) => {
    const tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };
  return (
    <article className="relative w-[320px] min-w-[320px] border-r border-r-th-fade lg:w-[420px] lg:min-w-[420px]">
      <div
        className="h-72 w-full bg-cover bg-center bg-no-repeat lg:h-96"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className="flex min-h-[280px] flex-col p-6 lg:min-h-[320px] lg:p-8">
        <h2 className="mb-auto lg:!text-lg lg:!leading-none">{title}</h2>
        <TextTruncate
          className="p !text-[#bbb]"
          line={5}
          text={toText(description)}
        />
        <div className="mt-auto">
          <a href="/">
            <p className="font-roc text-base font-medium uppercase text-white underline">
              READ MORE
            </p>
          </a>
        </div>
      </div>
    </article>
  );
};
