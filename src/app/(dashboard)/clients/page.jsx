"use client";

import "./clients.css";
import Header from "./blocks/Header";
import Projects from "./blocks/Projects";
import Feedback from "./blocks/Feedback";
import Credo from "./blocks/Credo";
import Cases from "./blocks/Cases";
import Contact from "@/components/Contact";

const Clients = ({ setBurgerOpen }) => {
  return (
    <section id="clients-wrapper">
      <div className="relative bg-black">
        <Header />
        <Projects />
        <Feedback />
        <Credo />
        <Cases />
        <Contact />
      </div>
    </section>
  );
};

export default Clients;
