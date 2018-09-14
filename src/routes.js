import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Private from './components/Login/Private/Private';
import Login from './components/Login/Login';
import ProductsDisplay from './components/ProductsDisplay/ProductsDisplay';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Cart from './components/cart/Cart';
import ImageUploader from './components/imageUploader/ImageUploader';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/about' component={About} />
        <Route path='/private' component={Private} />
        <Route path='/login' component={Login} />
        <Route path='/charcoal' component={Login} />
        <Route path='/products/:category' component={ProductsDisplay} />
        <Route path='/portfolio' component={Portfolio} />
        {/* <Route path='/contact' component={Contact} /> */}
        <Route path='/cart' component={Cart} />
        <Route path='/imageuploader' component={ImageUploader} />
    </Switch>
)