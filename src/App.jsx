import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUsPage from "./pages/ContactUsPage";
import FinTechEvents from "./pages/Events/FinTechEvents";
import GamingEvents from "./pages/Events/GamingEvents";
import InformalEvents from "./pages/Events/InformalEvents";
import TechExpoPage from "./pages/Events/TechExpoPage";
import TechSummitPage from "./pages/Events/TechSummitPage";
import HomePage from "./pages/HomePage";
import MeetTheTeamPage from "./pages/MeetTheTeamPage";
import RootLayout from "./pages/Root";
import SapPage from "./pages/SapPage";
import SponsorsPage from "./pages/SponsorsPage";

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
      { path: "Sponsors", element: <SponsorsPage /> },
      { path: "SAP", element: <SapPage /> },
      { path: "ContactUs", element: <ContactUsPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
