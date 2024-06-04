"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../Components/Styles/NavBar.module.scss";

type Props = {
  children: string;
  route: string;
};

const Anchor = ({ children, route }: Props) => {
  const pathname = usePathname();
  return (
    <li className={styles.lists}>
      <Link
        href={route}
        className={pathname === route ? styles.active : ""}
      >
        {children}
      </Link>
    </li>
  );
};

export default Anchor;
