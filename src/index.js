import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import GlobalApp from './components/GlobalApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GlobalApp />, document.getElementById('root'));
registerServiceWorker();
