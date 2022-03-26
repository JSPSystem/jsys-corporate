import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTitleAnimation } from "../hooks/useCommonAnimation";
import { AboutCardRow } from "../types/AboutCardRow";
import AboutCard from "./AboutCard";

const About = () => {
  // タイトルのアニメーションを設定
  useTitleAnimation("#content_about", "#content_about_title", "#content_about_subtitle");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#content_about_card", {
      opacity: 0,
      y: 28,
      duration: 1.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#content_about_card",
        start: "top 90%",
      },
    });
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
    <article id="content_about">
      <div className="flex flex-col justify-center items-center w-full h-80 md:h-124 bg-color-about text-neutral-800">
        <div className="flex pt-3 md:pt-6">
          <h1 id="content_about_title" className="font-jura text-3xl md:text-5xl font-bold">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
          </h1>
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
      </div>
    </article>
  );
};

export default About;
