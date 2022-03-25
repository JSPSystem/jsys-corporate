import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ServiceCardProps } from "../types/ServiceCardProps";
import { useTitleAnimation } from "../hooks/useCommonAnimation";
import ServiceCard from "./ServiceCard";
import ImgWeb from "../../public/images/service_web.png";
import ImgEc from "../../public/images/service_ec.png";
import ImgWebService from "../../public/images/service_webservice.png";

const Service = () => {
  // タイトルのアニメーションを設定
  useTitleAnimation("#content_service", "#content_service_title", "#content_service_subtitle");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ビューポートのサイズでカードのアニメーションを変更
    ScrollTrigger.saveStyles("#content_service_cards > div");
    ScrollTrigger.matchMedia({
      // md=(min-width: 768px)以上
      "(min-width: 798px)": function () {
        // タイトルをトリガーに、左からふわっと表示
        gsap.from("#content_service_cards > div", {
          y: 28,
          opacity: 0,
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#content_service_title",
            start: "top 80%",
          },
          stagger: {
            from: "start",
            amount: 0.6,
          },
        });
      },
      // md未満
      "(max-width: 797px)": function () {
        // カード自身をトリガーにふわっと表示
        gsap.set("#content_service_cards > div", {
          y: 28,
          opacity: 0,
        });
        ScrollTrigger.batch("#content_service_cards > div", {
          onEnter: (batch) => {
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              duration: 1.3,
              overwrite: true,
            });
          },
          start: "top 90%",
          once: true,
        });
      },
    });
  }, []);

  const items: ServiceCardProps[] = [
    {
      image_src: ImgWeb.src,
      image_alt: "WEB SITE",
      title: "WEB SITE",
      description: "クライアントの目的に合わせたWebサイトを構築します。",
    },
    {
      image_src: ImgEc.src,
      image_alt: "EC SITE",
      title: "EC SITE",
      description: "EC-CUBEなどを使用したECサイトを構築します。",
    },
    {
      image_src: ImgWebService.src,
      image_alt: "WEB SERVICE",
      title: "WEB SERVICE",
      description: "WordPressでのサイト構築や、Webサービスの開発を行います。",
    },
  ];

  const cards = items.map((item, index) => {
    return (
      <ServiceCard
        key={index}
        image_src={item.image_src}
        image_alt={item.image_alt}
        title={item.title}
        description={item.description}
      />
    );
  });

  return (
    <article
      id="content_service"
      className="flex flex-col justify-center items-center w-full h-252 md:h-116 bg-color-service-mb md:bg-color-service text-neutral-800"
    >
      <div className="flex text-white pt-3 md:pt-6">
        <p id="content_service_title" className="font-jura text-3xl md:text-5xl font-bold">
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
        </p>
        <p id="content_service_subtitle" className="font-sansjp my-auto text-xs md:text-sm">
          <span>―&nbsp;</span>
          <span>事</span>
          <span>業</span>
          <span>内</span>
          <span>容</span>
          <span>&nbsp;―</span>
        </p>
      </div>
      <div className="flex-1 mt-3 md:mt-5">
        <div id="content_service_cards" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-52 md:w-172">
          {cards}
        </div>
      </div>
    </article>
  );
};

export default Service;
