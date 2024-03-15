import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './components/routes/Routes';

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
    <Router basename="/">
      <Routes>
        {
          routes.map((route, index) => (
              <Route key={index} path={route.path} exact element={<route.component />} />
            )
          ) 
        }
      </Routes>
    </Router>
  </IntlProvider>
);


