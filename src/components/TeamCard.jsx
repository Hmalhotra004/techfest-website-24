import "../styles//components/teamcard.css";

const TeamCard = ({ img, name, title }) => {
  return (
    <div className="team-container">
      <img src={img} />
      <h6>{title}</h6>
      <h3>{name}</h3>
    </div>
  );
};

export default TeamCard;
