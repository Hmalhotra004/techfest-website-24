"use client";
import RegiBtn from "@/Components/RegiBtn";
import Reveal from "@/Components/Reveal";
import { fin } from "@/lib/fintech";
import styles from "@/Styles/events.module.scss";

const page = () => {
  return (
    <section className={styles.bg}>
      <main className={`container mainP`}>
        <Reveal x={-800}>
          <h1 className={styles.header1}>Fintech Events</h1>
        </Reveal>
        <RegiBtn />

        {fin.map((data, idx) => {
          return (
            <>
              <Reveal
                x={-400}
                key={idx}
              >
                <h2 className={styles.header2}>{data.title}</h2>
              </Reveal>

              <Reveal x={-400}>
                <p className={styles.para}>{data.p}</p>
              </Reveal>

              {data.li.map((li, idx) => {
                return (
                  <Reveal
                    x={-400}
                    key={idx}
                  >
                    <p className={styles.para2}>{li}</p>
                  </Reveal>
                );
              })}

              <Reveal x={-400}>
                <details>
                  <summary className={styles.header3}>Rules & Regulations</summary>

                  {data.ru.map((ru, idx) => {
                    return (
                      <Reveal
                        x={-400}
                        key={idx}
                      >
                        <li className={styles.para2}>{ru}</li>
                      </Reveal>
                    );
                  })}
                </details>
              </Reveal>
            </>
          );
        })}
      </main>
    </section>
  );
};

export default page;
