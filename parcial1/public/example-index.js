import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";

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
  

ReactDOM.render(
        <IntlProvider locale={locale} messages={messages}>
                <JobsList locale={locale} />
        </IntlProvider>, document.getElementById("root")
);