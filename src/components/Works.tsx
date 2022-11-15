import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { WorksCardProps } from "../types/WorksCardProps";
import { useTitleAnimation } from "../hooks/useCommonAnimation";
import WorksHorizontalCard from "./WorksHorizontalCard";
import WorksVerticalCard from "./WorksVerticalCard";
import ImgJsys from "../../public/images/works_jsys.png";
import ImgJasupo from "../../public/images/works_jasupo.png";
import ImgTfa from "../../public/images/works_tfa.png";
import ImgSalesPeriod from "../../public/images/works_salesperiod.png";
import ImgListAnime from "../../public/images/works_listanime.png";

const Works = () => {
  // タイトルのアニメーションを設定
  useTitleAnimation("#content_works", "#content_works_title", "#content_works_subtitle");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const card_l = "#content_works_h_cards div.works_card_l";
    const card_r = "#content_works_h_cards div.works_card_r";
    const card_v = "#content_works_v_cards div.works_card_v";

    // カードの拡大縮小
    document.querySelectorAll(`${card_l}, ${card_r}, ${card_v}`).forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.06,
          duration: 0.8,
          ease: "power4.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.8,
          ease: "power4.out",
        });
      });
    });

    // 実績カード（横）のスライドアニメーションを設定
    setHorizontalCardAnimation(card_l, 150);
    setHorizontalCardAnimation(card_r, -150);

    // 実績カード（縦）のアニメーションを設定
    gsap.set(card_v, { y: 28, opacity: 0 });
    ScrollTrigger.batch(card_v, {
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          overwrite: true,
        });
      },
      start: "top 90%",
      once: true,
    });
  });

  const setHorizontalCardAnimation = (selector: string, from_x: number) => {
    gsap.set(selector, { x: from_x, opacity: 0 });
    ScrollTrigger.batch(selector, {
      onEnter: (batch) => {
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          duration: 0.7,
          overwrite: true,
        });
      },
      start: "top 90%",
      once: true,
    });
  };

  const items: WorksCardProps[] = [
    {
      image_left: true,
      image_src: ImgJsys.src,
      image_alt: "株式会社 JSPシステム",
      category: "WEB SITE",
      name: "株式会社 JSPシステム",
      skillset: "Figma / HTML5 / TailwindCSS / React / Next.js / TypeScript",
    },
    {
      image_left: false,
      image_src: ImgJasupo.src,
      image_alt: "卓球専門店ジャスポ",
      category: "EC SITE",
      name: "卓球専門店ジャスポ",
      skillset: "EC-CUBE / HTML / CSS / Javascript / jQuery / PHP / Zend Framework / PostgreSQL",
      link: "https://www.jasupo.com/",
    },
    {
      image_left: true,
      image_src: ImgTfa.src,
      image_alt: "管理画面セキュリティ向上プラグイン",
      category: "EC-CUBE4 PLUGIN",
      name: "管理画面セキュリティ向上プラグイン",
      skillset: "EC-CUBE / HTML / CSS / Twig / PHP",
      link: "https://www.ec-cube.net/products/detail.php?product_id=2588",
    },
    {
      image_left: false,
      image_src: ImgSalesPeriod.src,
      image_alt: "販売期間設定プラグイン",
      category: "EC-CUBE4 PLUGIN",
      name: "販売期間設定プラグイン",
      skillset: "EC-CUBE / HTML / CSS / Twig / PHP",
      link: "https://www.ec-cube.net/products/detail.php?product_id=2581",
    },
    {
      image_left: true,
      image_src: ImgListAnime.src,
      image_alt: "一覧商品アニメーションプラグイン",
      category: "EC-CUBE4 PLUGIN FREE",
      name: "一覧商品アニメーションプラグイン",
      skillset: "EC-CUBE / HTML / CSS / Twig / PHP / GSAP",
      link: "https://www.ec-cube.net/products/detail.php?product_id=2604",
    },
  ];

  const h_cards = items.map((item, index) => {
    return (
      <section key={index}>
        <WorksHorizontalCard
          image_left={item.image_left}
          image_src={item.image_src}
          image_alt={item.image_alt}
          category={item.category}
          name={item.name}
          skillset={item.skillset}
          link={item.link}
        />
      </section>
    );
  });

  const v_cards = items.map((item, index) => {
    return (
      <section key={index}>
        <WorksVerticalCard
          image_left={item.image_left}
          image_src={item.image_src}
          image_alt={item.image_alt}
          category={item.category}
          name={item.name}
          skillset={item.skillset}
          link={item.link}
        />
      </section>
    );
  });

  return (
    <article id="content_works">
      <div className="flex flex-col justify-center items-center w-full text-neutral-800">
        <div className="flex pt-3 md:pt-6">
          <h1 id="content_works_title" className="font-jura text-3xl md:text-5xl font-bold">
            <span>W</span>
            <span>O</span>
            <span>R</span>
            <span>K</span>
            <span>S</span>
          </h1>
          <p id="content_works_subtitle" className="font-sansjp my-auto text-xs md:text-sm">
            <span>―&nbsp;</span>
            <span>実</span>
            <span>績</span>
            <span>&nbsp;―</span>
          </p>
        </div>
        <div id="content_works_h_cards" className="hidden md:block w-full">
          {h_cards}
        </div>
        <div id="content_works_v_cards" className="block md:hidden w-full">
          {v_cards}
        </div>
      </div>
    </article>
  );
};

export default Works;
