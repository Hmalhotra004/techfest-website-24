"use client";
import Reveal from "@/Components/Reveal";
import styles from "./ts.module.scss";

const TechSummit = () => {
  return (
    <section className={styles.bg}>
      <section className={`container ${styles.ts}`}>
        <Reveal x={-800}>
          <h1 className={styles.header}>TECHSUMMIT</h1>
        </Reveal>

        <p className={styles.dets}>
          Date : 24th January, 2024 <br />
          Venue : Mukesh Patel Hall <br />
          Opp Cooper Hospital <br />
          Time : 11:30 AM Onwards
        </p>
      </section>
    </section>
  );
};

export default TechSummit;
