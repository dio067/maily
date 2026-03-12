import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import App from "./components/App";

const el = document.querySelector("#root")!;
const root = createRoot(el);
root.render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      <App />
    </Provider>
  </StrictMode>,
);
