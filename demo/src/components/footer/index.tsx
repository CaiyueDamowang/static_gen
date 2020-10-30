import React from 'react';
import { css } from 'emotion';

export const Footer: React.FC = () => {
  return <StyledFooter />
}

const StyledFooter: React.FC = () => {

  return (
    <footer className={css`
      padding: 25px;
      background-color: #4f95e1;
      box-shadow: 0 2px 8px rgba(0,0,0,.25);
      text-align: center;`
    }>
      <div>
        <h6 className={'white-text'}>github: </h6>
        <h6 className={'white-text'}>contact us</h6>
        <div className={css`
          border-bottom: 1px solid #ddd;
          margin: 20px 0 10px 0;`
        }></div>
      </div>
    </footer>
  )
}
