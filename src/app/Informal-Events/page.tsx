"use client";
import RegiBtn from "@/Components/RegiBtn";
import Reveal from "@/Components/Reveal";
import { informal } from "@/lib/informal";
import styles from "./informal.module.scss";

const page = () => {
  return (
    <section className={styles.bg}>
      <main className={`container mainP`}>
        <Reveal x={-800}>
          <h1 className={styles.header1}>Informal Events</h1>
        </Reveal>
        <RegiBtn />

        {informal.map((data, idx) => {
          return (
            <>
              <Reveal
                x={-400}
                key={idx}
              >
                <h2 className={styles.header2}>{data.title}</h2>
              </Reveal>

              <Reveal
                x={-400}
                key={idx}
              >
                <h2 className={styles.headerT}>{data.theme}</h2>
              </Reveal>

              {data.p.map((para, idx) => {
                return (
                  <Reveal
                    x={-400}
                    key={idx}
                  >
                    <p className={styles.para}>{para}</p>
                  </Reveal>
                );
              })}

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

        <div style={{ margin: "3rem 0" }}></div>
      </main>
    </section>
  );
};

export default page;
