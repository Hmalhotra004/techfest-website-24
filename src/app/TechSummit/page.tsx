"use client";
import Cards from "@/Components/Cards";
import Reveal from "@/Components/Reveal";
import { panel_1 } from "@/lib/summit";
import styles from "./ts.module.scss";

const TechSummit = () => {
  return (
    <section className={styles.bg}>
      <section className={`container ${styles.ts}`}>
        <Reveal x={-800}>
          <h1 className={styles.header}>TECHSUMMIT</h1>
        </Reveal>

        <Reveal x={-800}>
          <p className={styles.dets}>
            Date : 24th January, 2024 <br />
            Venue : Mukesh Patel Hall <br />
            Opp Cooper Hospital <br />
            Time : 11:30 AM Onwards
          </p>
        </Reveal>

        <Reveal x={-400}>
          <h2 className={styles.header2}>Panel 1:</h2>
        </Reveal>

        <Reveal x={-800}>
          <h3 className={styles.header3}>
            CAREER TRAJECTORIES: THE TRIFECTA OF CHOICES <br />
            JOBS, ENTREPRENEURSHIP, AND INVESTING
          </h3>
        </Reveal>

        <Cards data={panel_1} />
      </section>
    </section>
  );
};

export default TechSummit;
