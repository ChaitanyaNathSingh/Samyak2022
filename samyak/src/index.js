import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TheRouter from './TheRouter';
import reportWebVitals from './reportWebVitals';

import { SnackbarProvider } from "notistack";
import './components/BaseComponents/assets/Mont-Bold.otf';

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={5}>
      <TheRouter/>
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
