import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import store from "./components/state/store";
import GlobalStyle from "./theme/GlobalStyle";
import Theme from "./theme/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
