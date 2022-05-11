import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './features/react/root/App';
import { Provider } from 'react-redux';
import store from './app/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

