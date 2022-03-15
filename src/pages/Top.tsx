import { useEffect } from "react";
import { gsap } from "gsap";

const Top = () => {
  useEffect(() => {
    // 文字列をふわっと表示、ヘッダメニューのアニメーションに若干かぶせて実行
    gsap
      .timeline({ defaults: { opacity: 0, duration: 1, ease: "power3.out" } })
      .from("#content_top_h", {
        y: 20,
        delay: 0.5,
      })
      .from(
        "#content_top_scroll",
        {
          y: -10,
        },
        0.9,
      );

    // スクロールの矢印のアニメーション
    gsap
      .timeline({ repeat: -1, defaults: { duration: 1, ease: "power4.out" } })
      .from("#content_top_scroll > span", {
        y: -60,
      })
      .to("#content_top_scroll > span", {
        y: 0,
      })
      .to("#content_top_scroll > span", {
        y: 60,
        ease: "power4.in",
      })
      .set("#content_top_scroll > span", {
        y: -60,
      });
  }, []);

  return (
    <article
      id="content_top"
      className="relative flex justify-center items-center w-full h-128 md:h-screen bg-cover bg-center bg-img-top-mb md:bg-img-top font-jura text-white"
    >
      <h1 id="content_top_h" className="text-center">
        <p className="md:mb-2 lg:mb-3 text-xl md:text-3xl lg:text-4xl">Software Development Company</p>
        <p className="text-3xl md:text-5xl lg:text-6xl">JSP SYSTEM</p>
      </h1>
      <p id="content_top_scroll" className="absolute bottom-16 text-base md:text-xl lg:text-2xl overflow-hidden">
        <span className="inline-block">↓</span>
        SCROLL
      </p>
    </article>
  );
};

export default Top;
