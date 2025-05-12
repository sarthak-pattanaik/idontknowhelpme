import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// For static builds, use window.ENV values if available
if (typeof window !== 'undefined' && (window as any).ENV) {
  const env = (window as any).ENV;
  
  // Set environment variables from window.ENV
  Object.keys(env).forEach(key => {
    (import.meta.env as any)[key] = env[key];
    console.log(`[Static Build] Using environment variable: ${key}`);
  });
  
  // Set static build indicator
  (window as any).IS_STATIC_BUILD = true;
  console.log('[Static Build] Running in static mode with env:', env);
}

createRoot(document.getElementById("root")!).render(<App />);
