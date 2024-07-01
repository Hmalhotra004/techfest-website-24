"use client";
import Reveal from "@/Components/Reveal";
import { SAPD, SAPD2, SAPH, SAPH2, SAPH3 } from "@/lib/sap";
import styles from "./sap.module.scss";

const SAP = () => {
  return (
    <section className={styles.bg}>
      <main className={`container mainP`}>
        <Reveal x={-800}>
          <h1 className={styles.head1}>Student Ambassador Program</h1>
        </Reveal>

        <Reveal x={-800}>
          <h2 className={styles.head2}>{SAPH}</h2>
        </Reveal>

        {SAPD.map((data, idx) => {
          return (
            <Reveal
              x={-400}
              key={idx}
            >
              <details className={styles.details}>
                <summary className={styles.head3}>{data.title}</summary>
                <p className={styles.para}>{data.p}</p>
              </details>
            </Reveal>
          );
        })}

        <Reveal x={-800}>
          <h2 className={styles.head2}>{SAPH2}</h2>
        </Reveal>

        {SAPD2.map((data, idx) => {
          return (
            <Reveal
              x={-400}
              key={idx}
            >
              <details className={styles.details}>
                <summary className={styles.head3}>{data.title}</summary>
                <p className={styles.para}>{data.p}</p>
              </details>
            </Reveal>
          );
        })}

        <Reveal x={-800}>
          <h2 className={styles.head2}>{SAPH3}</h2>
        </Reveal>
      </main>
    </section>
  );
};

export default SAP;
