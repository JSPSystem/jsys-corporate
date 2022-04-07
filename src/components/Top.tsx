import { useEffect } from "react";
import { gsap } from "gsap";

const Top = () => {
  useEffect(() => {
    // ヘッダのアニメーションに若干かぶせて、タイトル->スクロール文字の順でふわっと表示
    const title = "#content_top_title";
    const scroll = "#content_top_scroll";
    gsap.set(title, { y: 20, opacity: 0 });
    gsap.set(scroll, { y: -10, opacity: 0 });
    gsap
      .timeline({ defaults: { opacity: 1, duration: 1, ease: "power3.out" } })
      .to(title, { y: 0, delay: 0.5 })
      .to(scroll, { y: 0 }, 0.9);

    // スクロールの矢印のアニメーション
    const arrow = "#content_top_scroll > span";
    gsap
      .timeline({ repeat: -1, defaults: { duration: 1, ease: "power4.out" } })
      .set(arrow, { y: -60 })
      .to(arrow, { y: 0 })
      .to(arrow, { y: 60, ease: "power4.in" });
  }, []);

  return (
    <article id="content_top">
      <div className="relative flex justify-center items-center w-full h-screen bg-cover bg-center bg-img-top-mb md:bg-img-top md:bg-fixed font-jura text-white">
        <h1 id="content_top_title" className="text-center">
          <p className="md:mb-2 lg:mb-3 text-xl md:text-3xl lg:text-4xl">Software Development Company</p>
          <p className="text-3xl md:text-5xl lg:text-6xl">JSP SYSTEM</p>
        </h1>
        <p id="content_top_scroll" className="absolute bottom-24 text-base md:text-xl lg:text-2xl overflow-hidden">
          <span className="inline-block">↓</span>
          SCROLL
        </p>
      </div>
    </article>
  );
};

export default Top;
