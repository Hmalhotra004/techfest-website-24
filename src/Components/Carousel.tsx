"use client";
import styles from "@/Styles/carousel.module.scss";
import { motion } from "framer-motion";

type Props = {
  logos: {
    src: string;
    name: string;
  }[];
};

const Carousel = ({ logos }: Props) => {
  return (
    <div className={styles.carousel__container}>
      <div className={styles.carousel__track}>
        {logos.map((data: { src: string; name: string }, idx: number) => {
          return (
            <div
              className={styles.carousel__card}
              key={idx}
            >
              <motion.img
                src={data.src}
                alt={data.name}
              />
            </div>
          );
        })}
        {/* {logos.map((data: { src: string; name: string }) => {
          return (
            <div className={styles.carousel__card}>
              <img
                src={data.src}
                alt={data.name}
              ></img>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Carousel;
