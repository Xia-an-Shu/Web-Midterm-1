import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const language = navigator.language;

let locale;
let messages;

if (language.includes('es')) {
    locale = 'es-ES';
    messages = localeEsMessages;
  } else {
    locale = 'en-US';
    messages = localeEnMessages;
  }

console.log("locale: ", locale);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={locale} messages={messages}>
    <App locale={locale} />
  </IntlProvider>
);