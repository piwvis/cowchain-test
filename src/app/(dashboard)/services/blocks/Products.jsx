import React from "react";
import marsan from "@/assets/cases/marsan.png";
import eva from "@/assets/cases/eva.png";
import retrobridge from "@/assets/cases/retrobridge.png";
import step from "@/assets/cases/step.png";
import triend from "@/assets/cases/triend.png";
import finance from "@/assets/cases/finance.png";
const products = [
  {
    name: "Full-fledged blockchain ecosystems",
    photo: finance,
    link: "/cases/finance"
  },
  {
    name: "All kinds of dApps (decentralized applications)",
    photo: step,
    link: "/cases/move"
  },
  {
    name: "Crypto exchanges, including DEXes with staking, lending/borrowing, farming features",
    photo: marsan,
    link: "/cases/payment"
  },
  {
    name: "Crypto wallets with fiat payment processing",
    photo: triend,
    link: "/cases/move"
  },
  {
    name: "Cross-chain and multichain bridges",
    photo: retrobridge,
    link: "/cases/bridge"
  },
  {
    name: "AI products",
    photo: eva,
    link: "/cases/wallet"
  }
];

const ProductCard = ({ name, photo, link }) => {
  return (
    <div className="team_card_wrapper relative flex h-[112px]  select-none flex-col items-start justify-center border-b border-b-th-fade border-r-th-fade md:h-full md:border-r ">
      <span className="justify-center px-3 py-8 text-left text-base uppercase text-white lg:px-16 lg:pb-48 lg:pt-20 lg:font-roc lg:text-xl">
        {name}
      </span>
      <div className="team_card_overlay absolute left-0 top-0 flex h-full w-full">
        <div
          className="flex h-full w-full bg-cover bg-top bg-no-repeat p-8"
          style={{ backgroundImage: `url(${photo.src})` }}
        />
      </div>
    </div>
  );
};

export const Products = () => {
  return (
    <section
      id="products"
      className="relative z-20  border-t border-b-th-fade border-t-th-fade"
    >
      <div className="glid-cols-1 relative grid  md:grid-cols-3">
        {products.map((member, index) => (
          <ProductCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};
