"use client";
import styles from "@/Styles/NavBar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: string;
  route: string;
  id?: string;
};

const Anchor = ({ children, route, id }: Props) => {
  const pathname = usePathname();
  return (
    <li className={styles.lists}>
      <Link
        href={route}
        className={pathname === route ? styles.active : ""}
        id={id}
      >
        {children}
      </Link>
    </li>
  );
};

export default Anchor;
