import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./app/provider/ErrorBoundary";
import App from "./app/App";

import "./app/styles/main.scss";
import { AppConfig } from "./app/provider/AppConfig";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <AppConfig>
        <App />
      </AppConfig>
    </ErrorBoundary>
  </BrowserRouter>,
);
