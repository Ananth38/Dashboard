import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DashboardUIControllerProvider } from './context';

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <DashboardUIControllerProvider>
      <App />
    </DashboardUIControllerProvider>
  </BrowserRouter>
);

