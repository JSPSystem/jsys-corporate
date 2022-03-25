import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function useTitleAnimation(trigger: string, title: string, subtitle: string) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        defaults: { opacity: 0, duration: 1, ease: "none" },
        scrollTrigger: {
          trigger: trigger,
          start: "top 90%",
        },
      })
      .from(title + " > span", {
        stagger: {
          from: "start",
          amount: 0.3,
        },
      })
      .from(
        subtitle + " > span",
        {
          stagger: {
            from: "start",
            amount: 0.3,
          },
        },
        0.3,
      );
  });
}
