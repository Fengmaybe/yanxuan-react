import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import {Provider} from 'react-redux';
import {HashRouter,Switch,Route} from 'react-router-dom';
//引入mockjs
import './mock/mockServer';
import './assets/js/rem';
import './assets/css/mixins.styl';

import Category from './containers/Category/Category';
import Home from './containers/Home/Home';
import InterLayer from './containers/InterLayer/InterLayer';
import Detail from './containers/Detail/Detail';
import ShopCart from './containers/ShopCart/ShopCart';
import Personal from './containers/Personal/Personla';
import LoginPhone from './containers/LoginPhone/LoginPhone';
import LoginEmail from './containers/LoginEmail/LoginEmail';
import store from "./redux/store";
//swiper样式
import 'swiper/dist/css/swiper.css';

import FooterNav from './components/FooterNav/FooterNav';

ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path='/loginemail' component={LoginEmail} />
          <Route path='/loginphone' component={LoginPhone} />
          <Route path='/home' component={Home} />
          <Route path='/detail' component={Detail} />
          <Route path='/category' component={Category} />
          <Route path='/shopcart' component={ShopCart} />
          <Route path='/personal' component={Personal} />
          <Route path='/interlayer' component={InterLayer} />
        </Switch>
      </HashRouter>
    </Provider>
  )
  , document.getElementById('root'));
