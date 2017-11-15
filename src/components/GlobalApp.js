import React, { Component } from 'react';
import { autorun } from 'mobx';
import { observer, Provider} from 'mobx-react';
import RootStore from '../stores/root';
import App from './App';

@observer
export default class GlobalApp extends Component {
  constructor(props) {
    super(props);
    // RootStore.init(props);
  }

  render() {
    return (
      <Provider rootStore={RootStore}>
        <App/>
      </Provider>
    );
  }
}