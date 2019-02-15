import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconFont />
        <Provider store={store}>
          <Header />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
