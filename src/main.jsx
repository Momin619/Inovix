import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { onCLS, onFCP, onLCP, onTTFB, onINP } from "web-vitals";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);

function sendToConsole(metric) {
  console.log(`[Web Vital] ${metric.name}: ${Math.round(metric.value)}ms`);
}
onCLS(sendToConsole);
onFCP(sendToConsole);
onLCP(sendToConsole);
onTTFB(sendToConsole);
onINP(sendToConsole);
