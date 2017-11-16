import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import '../styles/App.css';

// @observer
export default class App extends Component {

  render() {
    console.log(observer);
    return (
      <div>
        App
      </div>
    );
  }
}
