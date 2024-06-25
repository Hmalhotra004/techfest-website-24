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

export const Card = ({ src, name, desg }: PropsC) => {
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
              id={styles.pic}
            />
          </Reveal>

          <Reveal x={-500}>
            <h6 id={styles.desg}>{desg}</h6>
          </Reveal>

          <Reveal x={-500}>
            <h3 id={styles.name}>{name}</h3>
          </Reveal>
        </div>
      </Reveal>
    </>
  );
};

export default Cards;
