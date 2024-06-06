import Image from "next/image";
import "../styles/components/teamcard.css";

type Props = {
  img: string;
  name: string;
  title: string;
};

const TeamCard = ({ img, name, title }: Props) => {
  return (
    <div className="team-container">
      <Image
        src={img}
        alt={name}
        width={1000}
        height={100}
      />
      <h6>{title}</h6>
      <h3>{name}</h3>
    </div>
  );
};

export default TeamCard;
