import styles from "@/Styles/Card.module.scss";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

type PropsO = {
  data: {
    Name: string;
    img: string;
    desg?: string;
  }[];
};

const Cards = ({ data }: PropsO) => (
  <div id="wrapper">
    {data.map((data, idx) => (
      <Card
        key={idx}
        src={data.img}
        name={data.Name}
        desg={data.desg}
      />
    ))}
  </div>
);

type PropsC = {
  src: string;
  name: string;
  desg?: string;
};

const Card = ({ src, name, desg }: PropsC) => {
  return (
    <>
      <Reveal y={100}>
        <div id={styles.pic_cont}>
          <Reveal
            y={50}
            du={0.8}
          >
            <motion.img
              src={src}
              alt={name}
              width={1000}
              height={100}
              id={styles.pic}
            />
          </Reveal>

          <motion.h6
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
            id={styles.desg}
          >
            {desg}
          </motion.h6>

          <Reveal x={-500}>
            <motion.h3
              // initial={{ opacity: 0, x: -200 }}
              // whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
              // viewport={{ once: true }}
              id={styles.name}
            >
              {name}
            </motion.h3>
          </Reveal>
        </div>
      </Reveal>
    </>
  );
};

export default Cards;
