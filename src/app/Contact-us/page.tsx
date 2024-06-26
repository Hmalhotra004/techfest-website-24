"use client";
import Reveal from "@/Components/Reveal";
import styles from "./contact.module.scss";

const ContactUs = () => {
  return (
    <section className={styles.bg}>
      <main className={`container mainP`}>
        <Reveal x={-800}>
          <h1 className="heading">Contact Us</h1>
        </Reveal>

        <form id={styles.form}>
          <main id={styles.main}>
            <div id={styles.left}>
              <input
                type="text"
                id="fn"
                placeholder="Name"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
              />
              <input
                type="tel"
                id="phone"
                placeholder="Phone"
              />
            </div>
            <div>
              <textarea placeholder="Text Message" />
            </div>
          </main>
          <button type="submit">Send</button>
        </form>
      </main>
    </section>
  );
};

export default ContactUs;
