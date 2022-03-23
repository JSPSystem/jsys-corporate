import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AboutCardRow } from "../types/AboutCardRow";
import AboutCard from "./AboutCard";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        defaults: { opacity: 0, duration: 1, ease: "none" },
        scrollTrigger: {
          trigger: "#content_about",
          start: "top 90%",
        },
      })
      .from("#content_about_title > span", {
        stagger: {
          from: "start",
          amount: 0.3,
        },
      })
      .from(
        "#content_about_subtitle > span",
        {
          stagger: {
            from: "start",
            amount: 0.3,
          },
        },
        0.3,
      )
      .from(
        "#content_about_card",
        {
          y: 28,
          duration: 1.3,
          ease: "power4.out",
        },
        0.3,
      );
  }, []);

  const rows: AboutCardRow[] = [
    {
      title: "社名",
      values: ["株式会社 JSPシステム"],
    },
    {
      title: "代表",
      values: ["真鍋 圭輔"],
    },
    {
      title: "所在地",
      values: ["愛媛県新居浜市新須賀町2-8-36"],
    },
    {
      title: "設立",
      values: ["2014-03-04"],
    },
    {
      title: "事業内容",
      values: ["Webサイト構築", "ECサイト構築", "Webシステム開発", "WordPress導入・カスタマイズ"],
    },
  ];

  return (
    <article
      id="content_about"
      className="flex flex-col justify-center items-center w-full h-80 md:h-124 bg-color-about text-neutral-800"
    >
      <div className="flex pt-3 md:pt-6">
        <p id="content_about_title" className="font-jura text-3xl md:text-5xl font-bold">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </p>
        <p id="content_about_subtitle" className="font-sansjp my-auto text-xs md:text-sm">
          <span>―&nbsp;</span>
          <span>会</span>
          <span>社</span>
          <span>概</span>
          <span>要</span>
          <span>&nbsp;―</span>
        </p>
      </div>
      <div id="content_about_card" className="flex-1 w-full mt-3 md:mt-4">
        <div className="mx-auto w-4/5 md:w-148 h-11/12 md:h-96">
          <AboutCard rows={rows} />
        </div>
      </div>
    </article>
  );
};

export default About;
