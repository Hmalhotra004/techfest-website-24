import styles from "@/Components/Styles/Footer.module.scss";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import TFLogo from "./TFLogo";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div>
        <h3 className={`${styles.heading}`}>Follow Us On:</h3>
        <Socials />
      </div>
      <TFLogo classname={styles.logo} />
    </section>
  );
};

const Socials = () => (
  <ul className={styles.lists}>
    <li>
      <a
        href="https://www.instagram.com/nm_techfest?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
      >
        <FaInstagram />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/nm-techfest/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
    </li>
    <li>
      <a
        href="https://www.threads.net/@nm_techfest?xmt=AQGzKVOTgfG6UDQeEoDPSD-v0lwdCgNzPvKHfnCW19GvG6U"
        target="_blank"
      >
        <FaThreads />
      </a>
    </li>
  </ul>
);

export default Footer;
