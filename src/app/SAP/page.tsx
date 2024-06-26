"use client";
import Reveal from "@/Components/Reveal";
import styles from "./sap.module.scss";

const SAP = () => {
  return (
    <section className={styles.bg}>
      <main className={`container mainP`}>
        <Reveal x={-800}>
          <h1 className="heading">Student Ambassador Program</h1>
        </Reveal>
      </main>
    </section>
  );
};

export default SAP;
