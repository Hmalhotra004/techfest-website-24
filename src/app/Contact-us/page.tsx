"use client";
import Reveal from "@/Components/Reveal";
import { useRef } from "react";
import styles from "./contact.module.scss";

const ContactUs = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passRef.current?.value;
    const message = messageRef.current?.value;

    //api func

    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (passRef.current) passRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <section className={styles.bg}>
      <main className={`container mainP ${styles.mainPad}`}>
        <Reveal x={-800}>
          <h1 className="heading">Contact Us</h1>
        </Reveal>

        <form
          id={styles.form}
          onSubmit={handleSubmit}
        >
          <main id={styles.main}>
            <div id={styles.left}>
              <input
                type="text"
                id="fn"
                placeholder="Name"
                ref={nameRef}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
              <input
                type="tel"
                id="phone"
                placeholder="Phone"
                ref={passRef}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Text Message"
                ref={messageRef}
                required
              />
            </div>
          </main>
          <button type="submit">Send</button>
        </form>
      </main>
    </section>
  );
};

export default ContactUs;
