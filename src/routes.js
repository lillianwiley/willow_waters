import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Private from './components/Login/Private/Private';
import Login from './components/Login/Login';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
        <Route path='/private' component={Private} />
        <Route path='/login' component={Login} />
    </Switch>
)