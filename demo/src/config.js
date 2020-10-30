import babel from "../docs/support-devserver";
import mdx from "../docs/support-mdx";
import react from "../docs/support-react";
import ts from "../docs/support-ts";
import gendoc from "../docs/script-gendoc";

export default {
  navigation: {
    title: "this is a title",
    titleColor: "",
    backgroundColor: "",
    links: [],
    iconColor: "",
  },
  sidebar: {
    menu: [  // submenu
      { title: 'babel', component: babel },
      { title: 'mdx', component: mdx },
      { title: 'react', component: react },
      { title: 'ts', component: ts },
      { title: 'gendoc', component: gendoc },
    ],
    userInfo: {
      avatar: {},
      nickName: "",
      motto: "",
    }
  },
  section: {
    index: {},
    detail: {},
  },
  footer: {
    title: "",
    titleColor: "",
    backgroundColor: "",
    channels: [],
    links: []
  }
}
