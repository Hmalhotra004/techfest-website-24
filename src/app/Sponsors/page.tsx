import Carousel from "@/Components/Carousel";
import { past } from "@/lib/sponsors";
import styles from "./sponsor.module.scss";

const page = () => {
  return (
    <section className={styles.bg}>
      <main className={` container mainP`}>
        <h1 className={styles.header1}>Our Sponsors</h1>
        <h1 className={styles.header1}>Past Sponsors</h1>
        <Carousel logos={past} />
      </main>
    </section>
  );
};

export default page;
