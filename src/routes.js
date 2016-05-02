import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

const Greeting = () => {
    return <h1>Hello World!</h1>;
}

export default(
    <Route path="/" component={ App }>
        <Route path="greet" component={Greeting} />
    </Route>
);
