import type { NextPage } from "next";
import Head from "next/head";
import BurgerMenu from "../components/BurgerMenu";
import Nav from "../components/Nav";
import Top from "../components/Top";
import { NavItem } from "../types/NavItem";

const Home: NextPage = () => {
  const navItems: NavItem[] = [
    {
      text: "TOP",
      link: "#top",
    },
    {
      text: "ABOUT",
      link: "#about",
    },
    {
      text: "SERVICE",
      link: "#service",
    },
    {
      text: "WORKS",
      link: "#works",
    },
    {
      text: "CONTACT",
      link: "#contact",
    },
  ];

  return (
    <div>
      <Head>
        <title>株式会社 JSPシステム</title>
        <meta name="description" content="株式会社JSPシステムは、ITを通してお客様のやりたいことを実現し支援します。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 left-0 right-0 bg-neutral-800/80 h-9 md:h-14 font-jura text-white z-50">
        <Nav brand="JSP SYSTEM" navItems={navItems} />
      </header>

      <BurgerMenu navItems={navItems} pageWrapId={"main"} outerContainerId={"container"} />

      <div id="container">
        <main id="main">
          {/* テストで適当においている、最終的にコンポーネントになる */}
          <Top />
          <div id="about" className="h-96">
            about
          </div>
          <div id="service" className="h-96">
            service
          </div>
          <div id="works" className="h-96">
            work
          </div>
          <div id="contact" className="h-96">
            contact
          </div>
        </main>

        <footer>
          Footer
          {/*
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
          */}
        </footer>
      </div>
    </div>
  );
};

export default Home;
