import { SnackbarProvider } from "notistack";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store";

const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);
root.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={4}>
      <App />
    </SnackbarProvider>
  </Provider>
);
