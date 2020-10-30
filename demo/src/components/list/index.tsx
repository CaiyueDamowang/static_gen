import React from 'react';
import { css } from 'emotion';


export const List: React.FC<{
  dataSource: Array<{
    title: string
  }>
}> = (props) => {
  const defaultData = ['title', 'list'];

  return (
    <ul className={css`
      padding: 30px;`
    }>
      {(props.dataSource || defaultData).map(
        menuItem =>
          <li
            className={css`
              margin: 10px;
              color: #a6a6a6;`
          }>
            {menuItem.title}
          </li>
        )}
    </ul>
  );
};


