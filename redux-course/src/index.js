import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './stores/store'
import registerServiceWorker from './registerServiceWorker';

const state = store.getState()

ReactDOM.render(<App {...state} />, document.getElementById('root'));
registerServiceWorker();
