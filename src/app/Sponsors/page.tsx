"use client";
import Carousel from "@/Components/Carousel";
import Reveal from "@/Components/Reveal";
import { media, new1, past } from "@/lib/sponsors";
import { motion } from "framer-motion";
import styles from "./sponsor.module.scss";

const page = () => {
  return (
    <section className={styles.bg}>
      <main className={` container mainP`}>
        <Reveal x={-800}>
          <h1 className={styles.header1}>Our Sponsors</h1>
        </Reveal>

        <div id={styles.yes}>
          {new1.map((data, idx) => (
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              viewport={{ once: true }}
              src={data.src}
              alt={data.name}
              key={idx}
            />
          ))}
        </div>

        <Reveal x={-800}>
          <h1 className={styles.header1}>Media Partners</h1>
        </Reveal>
        <div id={styles.yes}>
          {media.map((data, idx) => (
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              viewport={{ once: true }}
              src={data.src}
              alt={data.name}
              key={idx}
            />
          ))}
        </div>

        <Reveal x={-800}>
          <h1 className={styles.header1}>Past Sponsors</h1>
        </Reveal>

        <Carousel logos={past} />
      </main>
    </section>
  );
};
export default page;
