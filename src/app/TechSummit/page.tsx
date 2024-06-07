"use client";
import Cards from "@/Components/Cards";
import Reveal from "@/Components/Reveal";
import { artists, contact, panel_1, panel_2, speaker } from "@/lib/summit";
import { motion } from "framer-motion";
import styles from "./ts.module.scss";

const TechSummit = () => {
  return (
    <section className={styles.bg}>
      <main className={`container ${styles.ts}`}>
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

        <Reveal x={-400}>
          <h2 className={styles.header2}>Panel 2:</h2>
        </Reveal>

        <Reveal x={-800}>
          <h3 className={styles.header3}>BEYOND THE SPOTLIGHT</h3>
        </Reveal>

        <Cards data={panel_2} />

        <Reveal x={-800}>
          <h2 className={styles.header2}>MUSIC ARTISTS</h2>
        </Reveal>

        <Cards data={artists} />

        <Reveal x={-800}>
          <h2 className={styles.header2}>KEYNOTE SPEAKERS</h2>
        </Reveal>

        <Cards data={speaker} />

        <Contact />
      </main>
    </section>
  );
};

const Contact = () => (
  <motion.footer
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
    viewport={{ once: true }}
    className={styles.contact}
  >
    <Reveal y={100}>
      <h2>Contact Us</h2>
    </Reveal>

    <motion.div className={styles.wrapper}>
      {contact.map((data, idx) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
          key={idx}
          className={styles.inner}
        >
          <h3>{data.Name}</h3>
          <p>{data.No}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.footer>
);

export default TechSummit;
