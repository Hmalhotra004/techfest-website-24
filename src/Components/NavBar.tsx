import styles from "@/Styles/NavBar.module.scss";
import Anchor from "./Anchor";
import DropDown from "./DropDown";
import TFLogo from "./TFLogo";

const NavBar = () => {
  return (
    <section className={styles.header}>
      <TFLogo classname={styles.logo} />
      <nav>
        <ul className={styles.links}>
          <Anchor route="/">Home</Anchor>
          <DropDown name="Events">
            <>
              <Anchor route="/Gaming-Events">Gaming Events</Anchor>
              <Anchor route="/Informal-Events">Informal Events</Anchor>
              <Anchor route="/Fintech-Events">Fintech Events</Anchor>
            </>
          </DropDown>
          <Anchor route="/TechExpo">TechExpo</Anchor>
          <Anchor route="/TechSummit">TechSummit</Anchor>
          <Anchor route="/Sponsors">Sponsors</Anchor>
          <Anchor
            route="/Meet-The-Team"
            id={styles.not}
          >
            Meet The Team
          </Anchor>
          <DropDown name="More">
            <>
              <div id={styles.hidden}>
                <Anchor route="/Meet-The-Team">Meet The Team</Anchor>
              </div>
              <Anchor route="/SAP">SAP</Anchor>
              <Anchor route="/Contact-us">Contact Us</Anchor>
              <Anchor route="/About-us">About Us</Anchor>
            </>
          </DropDown>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
