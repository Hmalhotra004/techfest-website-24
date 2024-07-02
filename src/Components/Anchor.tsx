"use client";
import styles from "@/Styles/NavBar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  children: string;
  route: string;
  id?: string;
  cn: string;
};

const Anchor = ({ children, route, id, cn }: Props) => {
  const pathname = usePathname();
  return (
    <li className={cn}>
      <Link
        href={route}
        className={pathname === route ? styles.active : ""}
        id={id}
      >
        <p>{children}</p>
      </Link>
    </li>
  );
};

export default Anchor;
