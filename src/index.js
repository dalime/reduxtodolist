import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

import App from './components/App'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
