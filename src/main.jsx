import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* we can use this context value in any component wrap the app component with this.*/}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
