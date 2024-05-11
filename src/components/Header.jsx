import "../styles/components/header.css";
import Anchor from "./Anchor";
import DropDown from "./DropDown";
import tflogo from "/logos/tfLogo.png";

export default function Header() {
  return (
    <section className="header">
      <img
        className="header__logo"
        src={tflogo}
        alt="TF Logo"
      />
      <nav>
        <ul className="nav__links">
          <Anchor route="/">Home</Anchor>
          <DropDown name="Events">
            <Anchor route="TechExpo">Gaming Events</Anchor>
            <Anchor route="TechExpo">Informal Events</Anchor>
            <Anchor route="TechExpo">FinTech Events</Anchor>
          </DropDown>
          <Anchor route="TechExpo">TechExpo</Anchor>
          <Anchor route="TechSummit">TechSummit</Anchor>
          <Anchor route="MeetTheTeam">Meet The Team</Anchor>
          <Anchor route="Sponsors">Sponsors</Anchor>
          <Anchor route="More">More</Anchor>
          {/* 
          <Anchor route="SAP">Student Ambassador Program</Anchor>
          <Anchor route="ContactUs">Contact Us</Anchor> 
          <Anchor route="AboutUs">About Us</Anchor>
          */}
        </ul>
      </nav>
    </section>
  );
}
