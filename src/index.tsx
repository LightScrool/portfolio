import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import enResource from "./assests/languages/en.json";
import ruResource from "./assests/languages/ru.json";
import store from "./store";
import {Provider} from "react-redux";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: enResource},
            ru: {translation: ruResource}
        },
        lng: 'ru', // TODO: set to en
        fallbackLng: 'ru', // TODO: set to en
        interpolation: {escapeValue: false},
        debug: true, // TODO: set to false
    });

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
