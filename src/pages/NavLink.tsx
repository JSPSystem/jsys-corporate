import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { NavLinkProps } from "./types/NavLinkProps";

gsap.registerPlugin(ScrollToPlugin);

/*
 * ナビゲーションリンクコンポーネント
 */
const NavLink = (props: NavLinkProps) => {
  const handleClick = () => {
    gsap.to(window, { duration: 0.6, scrollTo: { y: props.navItem.link, offsetY: props.offset } });
  };

  return (
    <span
      className="cursor-pointer md:px-3 lg:px-6 text-xl hover:text-teal-300 transition ease-out"
      onClick={() => handleClick()}
    >
      {props.navItem.text}
    </span>
  );
};

export default NavLink;
