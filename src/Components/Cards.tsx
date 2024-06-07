import styles from "@/Components/Styles/Card.module.scss";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Reveal from "./Reveal";

type PropsO = {
  data: {
    Name: string;
    img: StaticImageData;
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
  src: StaticImageData;
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
            de={0.5}
            du={0.8}
          >
            <Image
              src={src}
              alt={name}
              width={1000}
              height={100}
              id={styles.pic}
            />
          </Reveal>
          <h6 id={styles.desg}>{desg}</h6>
          <motion.h3
            // initial={{ opacity: 0, x: -400 }}
            // whileInView={{ opacity: 1, x: 0 }}
            id={styles.name}
          >
            {name}
          </motion.h3>
          {/* <Reveal x={-400}>
            <div id={styles.div}></div>
          </Reveal> */}
        </div>
      </Reveal>
    </>
  );
};

export default Cards;
