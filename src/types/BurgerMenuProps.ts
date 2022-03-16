import { NavItem } from "./NavItem";

/*
 * ハンバーガーメニュープロパティ
 */
export type BurgerMenuProps = {
  pageWrapId: string;
  outerContainerId: string;
  navItems: NavItem[];
};
