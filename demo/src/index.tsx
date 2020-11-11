import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const container = document.createElement('div');
container.setAttribute('id', 'root');
document.body.append(container);


ReactDOM.render(<App />, container);

if (module.hot) {
    module.hot.accept('./App', async() => {
        const { App } = await import('./App');
        ReactDOM.render(<App/> , container);
    })
};
