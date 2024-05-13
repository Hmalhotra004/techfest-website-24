import "../styles//components/card.css";

const TeamCard = ({ img, name, title }) => {
  return (
    <div className="pic-container">
      <img src={img} />
      <h6>{title}</h6>
      <h3>{name}</h3>
    </div>
  );
};

export default TeamCard;
