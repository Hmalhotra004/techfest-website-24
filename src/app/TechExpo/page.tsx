"use client";
import Reveal from "@/Components/Reveal";
import { p1, p2 } from "@/lib/expo";
import styles from "./expo.module.scss";

const page = () => {
  return (
    <section className={styles.bg}>
      <section className={`container mainP`}>
        <Reveal x={-800}>
          <h1 className={styles.header}>BUSINESS BEACON</h1>
        </Reveal>

        <Reveal x={-400}>
          <p className={styles.para1}>{p1}</p>
        </Reveal>

        <Btn />

        <Reveal x={-400}>
          <p className={styles.para2}>{p2}</p>
        </Reveal>
      </section>
    </section>
  );
};

const Btn = () => (
  <Reveal x={-200}>
    <div id={styles.btn}>
      <Reveal y={100}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfF3HB3fP1zoz3Rs3042Mbpwvj7Bp1rFBQjv2_EPYkt0VL46g/viewform"
          target="_blank"
        >
          Register
        </a>
      </Reveal>
    </div>
  </Reveal>
);

export default page;
