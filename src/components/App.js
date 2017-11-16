import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import '../styles/App.css';

@inject('rootStore')
@observer
export default class App extends Component {

  render() {
    const { rootStore } = this.props;
    return (
      <div>
        {rootStore.thing}
      </div>
    );
  }
}
