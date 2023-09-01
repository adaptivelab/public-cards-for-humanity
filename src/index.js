import 'react-app-polyfill/stable'
import 'react-app-polyfill/ie11'
import './polyfills'
import './i18n'

import React from 'react'
import { hydrate, render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import App from './App'
import GlobalStyle from './style/global'
//import { LangProvider } from './context/lang'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Suspense } from 'react'

const Root = () => (
  <Router>
    <GlobalStyle />
    <Suspense fallback='loading...'>
      <Switch>
        <Route path="/figma">
          <App isFigma />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Suspense>
  </Router>
)
const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement)
} else {
  render(<Root />, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
