import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from "@chakra-ui/react";
import Open from "components/icons/open";
import CloseCircle from "components/icons/close-circle";
import { cn } from "@/lib/utils";
import Check from "components/icons/check";
import CheckFill from "components/icons/check-fill";

const treeData = [
  {
    value: "Technology",
    title: "Technology",
    children: []
  },
  {
    value: "Project Type",
    title: "Project Type",
    children: [
      {
        value: "Staking",
        title: "Staking"
      },
      {
        value: "Mobile App",
        title: "Mobile App"
      },
      {
        value: "DEX",
        title: "DEX"
      },
      {
        value: "NFT",
        title: "NFT"
      },
      {
        value: "DeFi",
        title: "DeFi"
      },
      {
        value: "Non-custodial exchange",
        title: "Non-custodial exchange"
      },
      {
        value: "Proof Of Attendance (POAP)",
        title: "Proof Of Attendance (POAP)"
      },
      {
        value: "Crosschain",
        title: "Crosschain"
      },
      {
        value: "Multichain",
        title: "Multichain"
      },
      {
        value: "Bridge",
        title: "Bridge"
      }
    ]
  },
  {
    value: "Services",
    title: "Services",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "my leaf"
          },
          {
            value: "leaf2",
            title: "your leaf"
          }
        ]
      }
    ]
  }
];

export const AllFilters = ({ setTags, tags }) => {
  const handleClick = (isInclude, title) => {
    if (!isInclude) {
      setTags((tags) => [...tags, title]);
    } else {
      setTags((tags) => tags.filter((tag) => tag !== title));
    }
  };

  return (
    <div>
      {treeData.map((tree) => {
        return (
          <div className="mx-10 my-8" key={tree.value}>
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <div>
                    <AccordionButton>
                      <div className="flex w-full items-center justify-between  font-roc text-xl text-white">
                        <p className="max-w-2xl text-left !text-base !leading-none lg:!text-xl lg:!leading-none">
                          {tree.title}
                        </p>
                        {!isExpanded ? (
                          <Open className={"h-8 w-8"} />
                        ) : (
                          <CloseCircle className={"h-8 w-8"} />
                        )}
                      </div>
                    </AccordionButton>
                    <AccordionPanel
                      className={cn("opacity-0  will-change-transform", {
                        "pt-6 opacity-100 ": isExpanded
                      })}
                    >
                      <div className="flex flex-col gap-6 ">
                        {tree.children.map((children) => {
                          return (
                            <button
                              key={children.title}
                              onClick={() =>
                                handleClick(
                                  tags.includes(children.title),
                                  children.title
                                )
                              }
                              className="flex max-w-2xl items-center gap-6 text-left font-roc !text-base uppercase !leading-none text-white lg:!text-base lg:!leading-none"
                            >
                              {tags.includes(children.title) ? (
                                <CheckFill className={"h-4 w-4"} />
                              ) : (
                                <Check className={"h-4 w-4"} />
                              )}
                              {children.title}
                            </button>
                          );
                        })}
                      </div>
                    </AccordionPanel>
                  </div>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
};
