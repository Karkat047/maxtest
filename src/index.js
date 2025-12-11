import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@maxhub/max-ui/dist/styles.css';
import { MaxUI } from "@maxhub/max-ui";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MaxUI>
    <App />
  </MaxUI>
);

