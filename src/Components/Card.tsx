import Image from "next/image";
import "../styles/components/card.css";

type Props = {
  img: string;
  name: string;
}

const Card = ({ img, name }: Props) => {
  return (
    <>
      <div className="pic-container">
        <Image
          src={img}
          alt={name}
          width={1000}
          height={100}
        />
        <h3>{name}</h3>
      </div>
    </>
  );
};

export default Card;
