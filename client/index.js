/**
 * Created by Jitender on 21/10/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store'
import {socket} from './socket';
import {messageReceived} from './actions/chat.action';
import {Router, browserHistory} from 'react-router';
import route from './route/routes.js';
import {IntlProvider, FormattedMessage} from 'react-intl';

const store = configureStore();
let rootElement = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
        <Router routes={route} history={browserHistory}/>
    </Provider>
    ,rootElement);
