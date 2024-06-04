import Link from "next/link";
import styles from "../Components/Styles/NavBar.module.scss";

type Props = {
  children: string;
  route: string;
};

const Anchor = ({ children, route }: Props) => {
  return (
    <li className={styles.lists}>
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
