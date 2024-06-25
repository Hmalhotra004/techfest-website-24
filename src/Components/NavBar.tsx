import styles from "@/Styles/NavBar.module.scss";
import Anchor from "./Anchor";
import TFLogo from "./TFLogo";

const NavBar = () => {
  return (
    <section className={styles.header}>
      <TFLogo classname={styles.logo} />
      <nav>
        <ul className={styles.links}>
          <Anchor route="/">Home</Anchor>
          <Anchor route="/">Events</Anchor>
          <Anchor route="/TechExpo">TechExpo</Anchor>
          <Anchor route="/TechSummit">TechSummit</Anchor>
          {/* <Anchor route="/Meet-The-Team">Meet The Team</Anchor> */}
          <Anchor route="/Sponsors">Sponsors</Anchor>
          {/* <DropDown name="More">
          </DropDown>
            <Anchor route="/SAP">SAP</Anchor>
            <Anchor route="/Meet-The-Team">Meet The Team</Anchor>
            <Anchor route="/Sponsors">Sponsors</Anchor> */}
          {/* {header.map((data, idx) => (
            <Anchor
              key={idx}
              route={data.to}
            >
              {data.name}
            </Anchor>
          ))} */}
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
