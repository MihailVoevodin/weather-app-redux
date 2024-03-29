import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import Spinner from 'Common/Components/Spinner';
import {store} from 'Redux/Store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css';
import './18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <Suspense fallback={<Spinner />}>
            <App />
        </Suspense>
    </Provider>
);

reportWebVitals();
