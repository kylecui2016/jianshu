import React, { Component, Fragment } from 'react';
import store from './store';
import Header from './common/header';
import Home from './pages/home/loadable';
import Detail from './pages/detail/loadable';
import Login from './pages/login/loadable';
import Writting from './pages/writting/loadable';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconFont />
        <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/writting' exact component={Writting}></Route>
            </Fragment>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
