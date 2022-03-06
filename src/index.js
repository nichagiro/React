import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Plantilla from './Plantilla';
import { Provider } from 'react-redux';
import store from './redux/store'
import StoreProvider from "./components/context/store/StoreProvider";
import HeaderProvider from './components/context/store/HeaderProvider';
import Store from './components/hooks/Store';


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <HeaderProvider>
        <Store key={'Hooks'}>
        <Provider store={store}>
          <Plantilla></Plantilla>
        </Provider>
        </Store>
      </HeaderProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
