"use client";
import styles from "@/Styles/regibtn.module.scss";
import Reveal from "./Reveal";

const RegiBtn = () => {
  return (
    <Reveal x={-400}>
      <div id={styles.btn}>
        <Reveal y={200}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScGjDhrVlcu15CwdZnYFiKvvvcilLd2CszSmzjcGDuCz92IuA/viewform?pli=1"
            target="_blank"
          >
            Register
          </a>
        </Reveal>
      </div>
    </Reveal>
  );
};

export default RegiBtn;
