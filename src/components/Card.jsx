import "../styles//components/card.css";

export default function Card({ img, name }) {
  return (
    <>
      <div className="pic-container">
        <img src={img} />
        <h3>{name}</h3>
      </div>
    </>
  );
}
