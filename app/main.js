import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes.js';
import Perf from 'react-addons-perf';

window.Perf = Perf;

import injectTouchTapEvent from 'react-tap-event-plugin';
injectTouchTapEvent();

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
document.getElementById('root'));
