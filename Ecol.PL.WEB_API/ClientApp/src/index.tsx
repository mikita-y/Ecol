import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//
import MainPage from './components/MainPage'
import store from './store/store'

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <MainPage />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();




/*
  standart realization
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MainPage />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();

*/
