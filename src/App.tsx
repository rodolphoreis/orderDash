import "./global.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | OrderDash" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
