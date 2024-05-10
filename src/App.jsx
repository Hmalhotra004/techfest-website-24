import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import TechSummitPage from "./pages/TechSummitPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "TechSummit", element: <TechSummitPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
