import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './Redux/Store';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
