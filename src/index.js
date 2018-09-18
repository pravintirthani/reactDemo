import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Route from './Route';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './RootReducer';

const store = createStore(rootReducer);

ReactDOM.render(<Route store={store} />, document.getElementById('root'));
registerServiceWorker();
