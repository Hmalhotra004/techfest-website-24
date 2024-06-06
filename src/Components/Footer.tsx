import styles from "@/Components/Styles/Footer.module.scss";
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import TFLogo from "./TFLogo";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div>
        <h3 className={styles.heading}>Follow Us On:</h3>
        <Socials />
      </div>
      <TFLogo classname={styles.logo} />
    </section>
  );
};

const Socials = () => (
  <ul className={styles.lists}>
    <li>
      <FaInstagram />
    </li>
    <li>
      <FaLinkedinIn />
    </li>
    <li>
      <FaThreads />
    </li>
  </ul>
);

export default Footer;
