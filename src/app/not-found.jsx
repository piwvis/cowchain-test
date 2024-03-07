"use client";

import Navbar from "@/components/Navbar";
import Header from "./[...not-found]/blocks/Header";
import LoaderWrapper from "./(dashboard)/loaderWrapper";
export default function Page() {
  return (
    <section>
      <Navbar isPageNotFound={true} />
      <LoaderWrapper>
        <Header />;
      </LoaderWrapper>
    </section>
  );
}
