import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './components/App';
import Stack from './components/Stack';
import Sobre from './components/Sobre';
import {store, persistor} from './store.js';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/stack" element={<Stack />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
);