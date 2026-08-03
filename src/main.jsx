import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import ProductsProvider from "./context/ProductsProvider.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
      <App />
      <Toaster richColors position="top-right" />
      </ProductsProvider>
    </AuthProvider>
  </StrictMode>,
);
