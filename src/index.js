/* eslint-disable import/default */

// React
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Router
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// Redux
//import { Provider } from 'react-redux';
//import configureStore from './store/configureStore';

// Styles
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

// Add tap events handling (for mobile devices)
injectTapEventPlugin();

// react-dom root rendering
render((
  //<Provider store={configureStore()}>
    <Router history={browserHistory} routes={routes} />
  //</Provider>
), document.getElementById('app'));
