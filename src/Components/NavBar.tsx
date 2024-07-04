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
          <Anchor
            route="/"
            cn={styles.lists}
          >
            Home
          </Anchor>

          <EventDrop />

          <Anchor
            route="/TechExpo"
            cn={styles.lists}
          >
            TechExpo
          </Anchor>

          <Anchor
            route="/TechSummit"
            cn={styles.lists}
          >
            TechSummit
          </Anchor>

          <Anchor
            route="/Meet-The-Team"
            cn={styles.lists}
          >
            Team
          </Anchor>

          <Anchor
            route="/Sponsors"
            cn={styles.lists}
          >
            Sponsors
          </Anchor>

          <MoreDrop />
        </ul>
      </nav>

      <AnimatePresence
        initial={false}
        onExitComplete={() => null}
      >
        {isOpen && (
          <MobileNav
            hide={hide}
            onClick={handleHamClick}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const MoreDrop = () => (
  <DropDown name="More">
    <>
      <Anchor
        route="/SAP"
        cn={styles.lists}
      >
        SAP
      </Anchor>
      <Anchor
        route="/Contact-us"
        cn={styles.lists}
      >
        Contact Us
      </Anchor>
      {/* <Anchor
        route="/About-us"
        cn={styles.lists}
      >
        About Us
      </Anchor> */}
    </>
  </DropDown>
);

const EventDrop = () => (
  <DropDown name="Events">
    <>
      <Anchor
        route="/Gaming-Events"
        cn={styles.lists}
      >
        Gaming Events
      </Anchor>
      <Anchor
        route="/Informal-Events"
        cn={styles.lists}
      >
        Informal Events
      </Anchor>
      <Anchor
        route="/Fintech-Events"
        cn={styles.lists}
      >
        Fintech Events
      </Anchor>
    </>
  </DropDown>
);

export default NavBar;
