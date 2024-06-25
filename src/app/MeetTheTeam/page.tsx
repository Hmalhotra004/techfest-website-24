"use client";
import Cards, { Card } from "@/Components/Cards";
import Reveal from "@/Components/Reveal";
import { top } from "@/lib/mtt";
import styles from "./mtt.module.scss";

const MeetTheTeam = () => {
  return (
    <section className={styles.bg}>
      <main className={styles.mtt}>
        <Reveal x={-800}>
          <h1 className={styles.header}>Meet The Team</h1>
        </Reveal>

        <Reveal x={-400}>
          <h2 className={styles.header2}>Top Core</h2>
        </Reveal>

        <article>
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
        </article>
      </main>
    </section>
  );
};

export default MeetTheTeam;
