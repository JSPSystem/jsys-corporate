import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import { ServiceCardProps } from "../types/ServiceCardProps";
import ImgWeb from "../../public/images/service_web.png";
import ImgEc from "../../public/images/service_ec.png";
import ImgWebService from "../../public/images/service_webservice.png";

const Service = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        defaults: { opacity: 0, duration: 1, ease: "none" },
        scrollTrigger: {
          trigger: "#content_service",
          start: "top 90%",
        },
      })
      .from("#content_service_title > span", {
        stagger: {
          from: "start",
          amount: 0.3,
        },
      })
      .from(
        "#content_service_subtitle > span",
        {
          stagger: {
            from: "start",
            amount: 0.3,
          },
        },
        0.3,
      );

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

  const services: ServiceCardProps[] = [
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

  const cards = services.map((service, index) => {
    return (
      <ServiceCard
        key={index}
        image_src={service.image_src}
        image_alt={service.image_alt}
        title={service.title}
        description={service.description}
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
