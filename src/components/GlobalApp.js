import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import RootStore from '../stores/root';
import App from './App';

export default class GlobalApp extends Component {
  constructor(props) {
    super(props);
    this.rootStore = new RootStore();
  }

  render() {
    return (
      <Provider rootStore={this.rootStore}>
        <App/>
      </Provider>
    );
  }
}
