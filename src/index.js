import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {HashRouter,Route} from 'react-router-dom'
import './assets/css/base.css';
import './assets/css/swiper.min.css';
import './library/js/jquery-1.7';
import './library/js/public';
import './library/js/schedule';
import store from './store';
import {Provider} from 'react-redux';
ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                 <Route component={App} />
            </HashRouter>
        </Provider>,
    document.getElementById('root'));

