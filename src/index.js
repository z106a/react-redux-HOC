import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Root>
    <BrowserRouter>
        <Route path='/' component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector('#root'),
  registerServiceWorker()
);
