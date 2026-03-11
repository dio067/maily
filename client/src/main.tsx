import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";

const el = document.querySelector("#root")!;

const store = createStore(() => {}, applyMiddleware());

const root = createRoot(el);

root.render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      <App />
    </Provider>
  </StrictMode>,
);
