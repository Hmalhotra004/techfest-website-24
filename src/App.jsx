import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FinTechEvents from "./pages/FinTechEvents";
import GamingEvents from "./pages/GamingEvents";
import HomePage from "./pages/HomePage";
import InformalEvents from "./pages/InformalEvents";
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
      { path: "Gaming", element: <GamingEvents /> },
      { path: "Informal", element: <InformalEvents /> },
      { path: "FinTech", element: <FinTechEvents /> },
      { path: "TechExpo", element: <TechExpoPage /> },
      { path: "TechSummit", element: <TechSummitPage /> },
      { path: "MeetTheTeam", element: <MeetTheTeamPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
