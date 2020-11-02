import { createContext } from "react";
import config from "../config";

// #region ...CustomConfig Interface
export interface LinkItem {
  name: string;
  link: string;
}
export interface UserInfo {
  avatar: string;
    // avatar: {
    //   src: string;
    //   size: number;
    // }
  nickName: string;
  motto: string;
}

export interface NavigationProps {
  title: string;
  titleColor: string;
  backgroundColor: string;
  links: LinkItem[];
}


export interface SidebarProps {
  menu: Array<LinkItem>;
  userInfo: UserInfo
}

export interface SectionProps {
    index?: Object;
    detail?: Object;
}

export interface FooterProps {
  title?: string;
  titleColor?: string;
  backgroundColor?: string;
  channels?: any[];
  links?: LinkItem[];
}

// #endregion

export interface CustomConifg {
  navigation: NavigationProps;
  sidebar: SidebarProps;
  section: SectionProps;
  footer: FooterProps;
};

export const ConfigContext = createContext<CustomConifg>(config);
