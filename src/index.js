import React from 'react';
import thunk from "redux-thunk";
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";
import { SnackbarProvider } from 'notistack';

Amplify.configure(config);

Sentry.init({
    dsn: "https://c51e38b242ca4dc99be9b202d84f30b1@o480242.ingest.sentry.io/5526727",
    release: "my-project-name@" + process.env.npm_package_version,
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});
const sentryReduxEnhancer = Sentry.createReduxEnhancer({
    // Optionally pass options
});

const rootReducer = combineReducers({
    form: formReducer
})

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), sentryReduxEnhancer)
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SnackbarProvider maxSnack={1}>
                <App/>
            </SnackbarProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

