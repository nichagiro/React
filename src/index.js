import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Plantilla from './Plantilla';
import { Provider } from 'react-redux';
import store from './redux/store'
import StoreProvider from "./components/context/store/StoreProvider";


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Provider store={store}>
        <Plantilla></Plantilla>
      </Provider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
