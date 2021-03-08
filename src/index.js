import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase-config";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Suspense fallback={"Conectandose ...."}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </Suspense>
  </StrictMode>,
  rootElement
);
