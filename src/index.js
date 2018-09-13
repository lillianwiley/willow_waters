import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import Store from './ducks/Store';
import './index.css';
import App from './App';
// import {unregister} from './registerServiceWorker';

ReactDOM.render(
<Provider store={Store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>
, document.getElementById('root'));
// unregister();
