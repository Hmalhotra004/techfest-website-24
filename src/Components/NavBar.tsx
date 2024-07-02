"use client";
import styles from "@/Styles/NavBar.module.scss";
import stylesMob from "@/Styles/mobile.module.scss";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Anchor from "./Anchor";
import DropDown from "./DropDown";
import MobileNav from "./MobileNav";
import TFLogo from "./TFLogo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let hamClass = "hamburger hamburger--collapse";
  let hide = stylesMob.hidden;

  if (isOpen) {
    hamClass += " is-active";
    hide = "";
  }

  function handleHamClick() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.header}>
      <TFLogo classname={styles.logo} />
      <div className={styles.hamMobile}>
        <button
          className={hamClass}
          type="button"
          onClick={handleHamClick}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
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
          <Anchor route="/Meet-The-Team">Team</Anchor>
          <Anchor route="/Sponsors">Sponsors</Anchor>
          <DropDown name="More">
            <>
              <Anchor route="/SAP">SAP</Anchor>
              <Anchor route="/Contact-us">Contact Us</Anchor>
              <Anchor route="/About-us">About Us</Anchor>
            </>
          </DropDown>
        </ul>
      </nav>

      <AnimatePresence
        initial={false}
        onExitComplete={() => null}
      >
        {isOpen && (
          <MobileNav
          // hide={hide}
          // onClick={handleHamClick}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default NavBar;
