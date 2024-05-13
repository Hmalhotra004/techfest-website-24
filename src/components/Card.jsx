import "../styles//components/card.css";

const Card = ({ img, name }) => {
  return (
    <>
      <div className="pic-container">
        <img src={img} />
        <h3>{name}</h3>
      </div>
    </>
  );
};

export default Card;
