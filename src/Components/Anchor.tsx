import Link from "next/link";
import styles from "../Components/Styles/NavBar.module.scss";

const Anchor = ({ children, route }: { children: string; route: string }) => {
  return (
    <li className={styles.nav__list}>
      <Link
        href={route}
        // className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {children}
      </Link>
    </li>
  );
};

export default Anchor;
