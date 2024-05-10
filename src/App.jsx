import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MeetTheTeamPage from "./pages/MeetTheTeamPage";
import RootLayout from "./pages/Root";
import TechExpoPage from "./pages/TechExpoPage";
import TechSummitPage from "./pages/TechSummitPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "TechExpo", element: <TechExpoPage /> },
      { path: "TechSummit", element: <TechSummitPage /> },
      { path: "MeetTheTeam", element: <MeetTheTeamPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
