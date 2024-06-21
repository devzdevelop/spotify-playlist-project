import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Router from './Router.jsx';
import { store } from './state/store.jsx';

// import App from './App.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
);
