import { useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { gsap } from "gsap";
import { NavProps } from "../types/NavProps";

/*
 * ナビゲーションコンポーネント
 */
const Nav = (props: NavProps) => {
  useEffect(() => {
    // 社名->メニューの順に表示
    gsap.from("#header > div", {
      y: 20,
      opacity: 0,
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
      <div className="flex w-full justify-end">
        <ul className="hidden md:flex justify-between">{menu}</ul>
      </div>
    </nav>
  );
};

export default Nav;
