import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import enResource from "./assests/languages/en.json";
import ruResource from "./assests/languages/ru.json";
import store from "./store";
import {Provider} from "react-redux";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        supportedLngs: ['en', 'ru'],
        resources: {
            en: {translation: enResource},
            ru: {translation: ruResource}
        },
        fallbackLng: '',
        interpolation: {escapeValue: false},
        debug: false,

        detection: {
            order: ['localStorage', 'htmlTag'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
            htmlTag: document.documentElement
        },
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
