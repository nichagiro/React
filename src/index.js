import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Plantilla from './Plantilla';
import { Provider } from 'react-redux';
import store from './redux/store'


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <Plantilla></Plantilla>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
