"use client";
import { header } from "@/lib/header";
import styles from "@/Styles/mobile.module.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Anchor from "./Anchor";

type Props = {
  hide: string;
  onClick: () => void;
};

const MobileNav = ({ hide, onClick }: Props) => {
  let mobile = styles.menu;
  mobile += ` ${hide}`;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <header>
      <motion.nav
        className={mobile}
        initial={{ opacity: 0, x: "100vh" }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: "100vh", transition: { duration: 0.5 } }}
      >
        <ul className={styles.links}>
          {header.map((link, idx) => (
            <button
              onClick={onClick}
              key={idx}
            >
              <Anchor
                route={link.to}
                cn={styles.lists}
              >
                {link.name}
              </Anchor>
            </button>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default MobileNav;
