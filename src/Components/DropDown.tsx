import styles from "@/Styles/Dropdown.module.scss";

type Props = {
  name: string;
  children: JSX.Element;
};

const DropDown = ({ name, children }: Props) => {
  return (
    <div id={styles.dropdown}>
      <button id={styles.dropbtn}>{name}</button>
      <div id={styles.dropdownContent}>{children}</div>
    </div>
  );
};

export default DropDown;
