import styles from "@/Styles/TeamCard.module.scss";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

type PropsC = {
  src: string;
  name?: string;
  desg?: string;
};

export const TeamCard = ({ src, name, desg }: PropsC) => {
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

export default TeamCard;
