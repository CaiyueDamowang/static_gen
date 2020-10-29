import React, { Children } from "react";

import { Slider } from "../animated/slider";
import { Avatar } from "../avatar/index";
import { List } from '../list/index';
import "./index.scss";

export const Sidebar = React.memo(() => {
  return (
    <div className={'sidebar-wrapper'}>
      <div className={'modal'}>
        <Slider>
          <div className="sidebar">
            <Avatar />
            <List />
          </div>
        </Slider>
      </div>
    </div>
  )
})
