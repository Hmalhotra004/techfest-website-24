import "../styles/components/header.css";
import Anchor from "./Anchor";
import DropDown from "./DropDown";
import tflogo from "/logos/tfLogo.png";

const Header = () => {
  return (
    <section className="header">
      <img
        className="tflogo header__logo"
        src={tflogo}
        alt="TF Logo"
      />
      <nav>
        <ul className="nav__links">
          <Anchor route="/">Home</Anchor>
          <DropDown name="Events">
            <Anchor route="Gaming">Gaming Events</Anchor>
            <Anchor route="Informal">Informal Events</Anchor>
            <Anchor route="FinTech">FinTech Events</Anchor>
          </DropDown>
          <Anchor route="TechExpo">TechExpo</Anchor>
          <Anchor route="TechSummit">TechSummit</Anchor>
          <Anchor route="MeetTheTeam">Meet The Team</Anchor>
          <Anchor route="Sponsors">Sponsors</Anchor>
          {/* <DropDown
            name="More"
            className="first"
          >
            <Anchor route="MeetTheTeam">Meet The Team</Anchor>
            <Anchor route="Sponsors">Sponsors</Anchor>
            <Anchor route="SAP">SAP</Anchor>
            <Anchor route="ContactUs">Contact Us</Anchor>
            <Anchor route="AboutUs">About Us</Anchor>
          </DropDown> */}
          <DropDown
            name="More"
            id="more"
          >
            <Anchor route="SAP">SAP</Anchor>
            <Anchor route="ContactUs">Contact Us</Anchor>
            <Anchor route="AboutUs">About Us</Anchor>
          </DropDown>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
