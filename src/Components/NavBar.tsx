import { header } from "@/lib/header";
import styles from "../Components/Styles/NavBar.module.scss";
import Anchor from "./Anchor";
import TFLogo from "./TFLogo";

const NavBar = () => {
  return (
    <section className={styles.header}>
      <TFLogo classname={styles.logo} />
      <nav>
        <ul className={styles.links}>
          {header.map((data, idx) => (
            <Anchor
              key={idx}
              route={data.to}
            >
              {data.name}
            </Anchor>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
