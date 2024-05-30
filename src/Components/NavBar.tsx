import Image from "next/image";
import styles from "../Components/Styles/NavBar.module.scss";
import Anchor from "./Anchor";
// import tflogo from ;

const NavBar = () => {
  return (
    <section className={styles.header}>
      <Image
        // className={`${tflogo}`}
        width={14}
        height={14}
        src="/logos/tfLogo.png"
        alt="TF Logo"
      />
      <nav>
        <ul className={styles.nav__links}>
          <Anchor route="/">Home</Anchor>
          {/* <DropDown name="Events">
            <Anchor route="Gaming">Gaming Events</Anchor>
            <Anchor route="Informal">Informal Events</Anchor>
            <Anchor route="FinTech">FinTech Events</Anchor>
          </DropDown> */}
          <Anchor route="TechExpo">TechExpo</Anchor>
          <Anchor route="TechSummit">TechSummit</Anchor>
          <Anchor route="MeetTheTeam">Meet The Team</Anchor>
          <Anchor route="Sponsors">Sponsors</Anchor>
          {/* <DropDown
            name="More"
            id="more"
          >
            <Anchor route="SAP">SAP</Anchor>
            <Anchor route="ContactUs">Contact Us</Anchor>
            <Anchor route="AboutUs">About Us</Anchor>
          </DropDown> */}
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
