import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore(reducers);

import App from './components/App'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
