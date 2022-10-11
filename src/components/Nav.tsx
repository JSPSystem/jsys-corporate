import { useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { gsap } from "gsap";
import { NavProps } from "../types/NavProps";
import ImgGit from "../../public/images/GitHub-Mark-Light-32px.png";

/*
 * ナビゲーションコンポーネント
 */
const Nav = (props: NavProps) => {
  useEffect(() => {
    // 社名->メニューの順に表示
    const selector = "#header > div";
    gsap.set(selector, { y: 20, opacity: 0 });
    gsap.to(selector, {
      y: 0,
      opacity: 1,
      duration: 1.3,
      ease: "power4.out",
      stagger: {
        from: "start",
        amount: 0.3,
      },
    });
  }, []);

  // 配列からメニュー部分を生成
  const menu = props.navItems.map((item, index) => {
    return (
      <li key={index} className="w-full text-center">
        <NavLink navItem={item} offset={56} />
      </li>
    );
  });

  return (
    <nav id="header" className="h-full flex items-center">
      <div className="flex-none px-6 w-60">
        <Link href="/">
          <a className="text-lg md:text-3xl">{props.brand}</a>
        </Link>
      </div>
      <div className="flex-none ml-5">
        <a href="https://github.com/JSPSystem">
          <img src={ImgGit.src} alt="GitHub" className="w-2/3 md:w-full" />
        </a>
      </div>
      <div className="flex w-full justify-end">
        <ul className="hidden md:flex justify-between">{menu}</ul>
      </div>
    </nav>
  );
};

export default Nav;
