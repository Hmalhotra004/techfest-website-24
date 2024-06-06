import styles from "@/Components/Styles/Card.module.scss";
import Image, { StaticImageData } from "next/image";

type PropsO = {
  data: {
    Name: string;
    img: StaticImageData;
    desg?: string;
  }[];
};

const CardLayout = ({ data }: PropsO) => (
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
      <div id={styles.pic_cont}>
        <Image
          src={src}
          alt={name}
          width={1000}
          height={100}
          id={styles.pic}
        />
        <h6 id={styles.desg}>{desg}</h6>
        <h3 id={styles.name}>{name}</h3>
      </div>
    </>
  );
};

export default CardLayout;
