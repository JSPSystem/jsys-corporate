import { elastic as Menu } from "react-burger-menu";
import NavLink from "./NavLink";
import { BurgerMenuProps } from "./types/BurgerMenuProps";

/*
 * ハンバーガーメニューコンポーネント
 */
const BurgerMenu = (props: BurgerMenuProps) => {
  // 配列からメニュー部分を生成
  const menu = props.navItems.map((item, index) => {
    return (
      <li key={index} className="w-full text-center">
        <NavLink navItem={item} offset={36} />
      </li>
    );
  });

  return (
    <Menu
      burgerButtonClassName={"md:hidden"}
      right
      pageWrapId={props.pageWrapId}
      outerContainerId={props.outerContainerId}
      className="font-jura text-white"
    >
      <ul>{menu}</ul>
    </Menu>
  );
};

export default BurgerMenu;
