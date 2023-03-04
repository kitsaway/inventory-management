import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { InventoryProvider } from "./context";
import App from "./App";
import AddInventory from "./components/AddInventory";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <InventoryProvider>
    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/add" element={<AddInventory />} />
      </Routes>
    </Router>
    </InventoryProvider>
  </React.StrictMode>
);
