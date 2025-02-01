import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WhoWeArePage from "./pages/WhoWeArePage";
import ServicesPage from "./pages/ServicesPage";
import DecorationsPage from "./pages/DecorationsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/whoWeArePage",
    element: <WhoWeArePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/servicesPage",
    element: <ServicesPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/decorationsPage",
    element: <DecorationsPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/contactPage",
    element: <ContactPage />,
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
