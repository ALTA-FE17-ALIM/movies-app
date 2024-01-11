import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "@/routes/index";
import { FavoriteProvider } from "./lib/contexts/favorite";
import { Toaster } from "./components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FavoriteProvider>
      <App />
      <Toaster />
    </FavoriteProvider>
  </React.StrictMode>
);
