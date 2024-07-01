"use client";
import Carousel from "@/Components/Carousel";
import { new1, past } from "@/lib/sponsors";
import { motion } from "framer-motion";
import styles from "./sponsor.module.scss";

const page = () => {
  return (
    <section className={styles.bg}>
      <main className={` container mainP`}>
        <h1 className={styles.header1}>Our Sponsors</h1>
        {new1.map((data, idx) => (
          <div
            id={styles.yes}
            key={idx}
          >
            <motion.img
              src={data.src}
              alt={data.name}
            />
          </div>
        ))}
        <h1 className={styles.header1}>Past Sponsors</h1>
        <Carousel logos={past} />
      </main>
    </section>
  );
};

export default page;
