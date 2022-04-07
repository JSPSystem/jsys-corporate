import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import BurgerMenu from "../components/BurgerMenu";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Service from "../components/Service";
import Top from "../components/Top";
import Works from "../components/Works";
import { NavItem } from "../types/NavItem";
import Favicon from "../../public/favicon.ico";

const Home: NextPage = () => {
  const navItems: NavItem[] = [
    {
      text: "TOP",
      link: "#content_top",
    },
    {
      text: "ABOUT",
      link: "#content_about",
    },
    {
      text: "SERVICE",
      link: "#content_service",
    },
    {
      text: "WORKS",
      link: "#content_works",
    },
    {
      text: "CONTACT",
      link: "#content_contact",
    },
  ];

  return (
    <div>
      <Head>
        <title>株式会社 JSPシステム</title>
        <meta
          name="description"
          content="株式会社JSPシステムは、システム開発でお客様のやりたいことを実現し支援する企業です。"
        />
        <link rel="icon" href={Favicon.src} />
      </Head>

      <header className="fixed top-0 left-0 right-0 bg-neutral-800/80 h-9 md:h-14 font-jura text-white z-50">
        <Nav brand="JSP SYSTEM" navItems={navItems} />
      </header>

      <BurgerMenu navItems={navItems} pageWrapId={"main"} outerContainerId={"container"} />

      <div id="container">
        <main id="main">
          <Top />
          <About />
          <Service />
          <Works />
          <Contact />
        </main>
      </div>

      <footer className="pt-2 pb-4 font-jura bg-neutral-900 text-white text-center text-xs md:text-base">
        &copy; 2022 JSP System Inc. All rights reserved
      </footer>
    </div>
  );
};

export default Home;
