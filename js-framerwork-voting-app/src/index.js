import React from 'react';
import ReactDOM from 'react-dom';
import {createStore } from 'redux'
import myApp from './reducers'
import './index.css';
import App from './App';
import Results from './components/results';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(myApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function render(){
    ReactDOM.render(
        <div className="container">
            <App store={store}/>
            <Results store={store}/>
        </div>, 
    document.getElementById('root'));
}

store.subscribe(render)

render();

registerServiceWorker();
