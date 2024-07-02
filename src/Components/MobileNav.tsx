import styles from "@/Styles/mobile.module.scss";
import { useEffect } from "react";
import Anchor from "./Anchor";

type Props = {
  hide: string;
  onClick: () => void;
};

const MobileNav = ({ hide, onClick }: Props) => {
  let mobile = styles.mobile_menu;
  mobile += ` ${hide}`;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <header>
      <nav>
        <ul className={styles.links}>
          <Anchor route="/">Home</Anchor>
          <Anchor route="/Gaming-Events">Gaming Events</Anchor>
          <Anchor route="/Informal-Events">Informal Events</Anchor>
          <Anchor route="/Fintech-Events">Fintech Events</Anchor>
          <Anchor route="/TechExpo">TechExpo</Anchor>
          <Anchor route="/TechSummit">TechSummit</Anchor>
          <Anchor route="/Meet-The-Team">Team</Anchor>
          <Anchor route="/Sponsors">Sponsors</Anchor>
          <Anchor route="/SAP">SAP</Anchor>
          <Anchor route="/Contact-us">Contact Us</Anchor>
          <Anchor route="/About-us">About Us</Anchor>
        </ul>
      </nav>
    </header>
  );
};

export default MobileNav;
