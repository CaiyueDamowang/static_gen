import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { css } from 'emotion';
import { ConfigContext } from '../../store';


export const Menu: React.FC = () => {
  const { 
    sidebar: {
      menu
    }
  } = useContext(ConfigContext);

  return (
    <ul className={css`
      padding: 30px;
    `}>
      {menu.map(
        dataItem =>
          <li className={css`
              margin: 10px;
              color: #a6a6a6;
          `}>
            <Link to={dataItem.link}>
              {dataItem.name}
            </Link>
          </li>
        )}
    </ul>
  );
};
