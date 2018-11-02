import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../Home/index'
import Me from '../Me/index';

const Router = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/me" component={Me} />
        </Switch>
    </HashRouter>
);




export default Router;