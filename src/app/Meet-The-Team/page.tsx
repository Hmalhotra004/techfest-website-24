"use client";
import Cards, { Card } from "@/Components/Cards";
import Reveal from "@/Components/Reveal";
import { top, V1, V2, V3, V4 } from "@/lib/mtt";
import styles from "./mtt.module.scss";

const MeetTheTeam = () => {
  return (
    <section className={styles.bg}>
      <section className={styles.mtt}>
        <Reveal x={-800}>
          <h1 className={styles.header}>Meet The Team</h1>
        </Reveal>

        <Reveal x={-400}>
          <h2 className={styles.header2}>Top Core</h2>
        </Reveal>

        <main>
          <Card
            src="/mtt/top/devB.png"
            name="Dev Barot"
            desg="Chairperson"
          />

          <Cards data={top} />

          <Card
            src="/mtt/top/aayushpatel.png"
            name="Aayush Patel"
            desg="Fest Advisor"
          />
        </main>
      </section>

      <section className={styles.mtt}>
        <Reveal x={-400}>
          <h2 className={styles.header2}>Head of Departments</h2>
        </Reveal>

        <Reveal x={-400}>
          <h2 className={styles.header2}>Vertical 1</h2>
        </Reveal>

        <Cards data={V1} />
      </section>

      <section className={styles.mtt}>
        <Reveal x={-400}>
          <h2 className={styles.header2}>Vertical 2</h2>
        </Reveal>

        <Cards data={V2} />
      </section>

      <section className={styles.mtt}>
        <Reveal x={-400}>
          <h2 className={styles.header2}>Vertical 3</h2>
        </Reveal>

        <Cards data={V3} />
      </section>

      <section className={styles.mtt}>
        <Reveal x={-400}>
          <h2 className={styles.header2}>Vertical 4</h2>
        </Reveal>

        <Cards data={V4} />
      </section>
    </section>
  );
};

export default MeetTheTeam;
