import "../styles//components/card.css";

export default function TeamCard({ img, name, title }) {
  return (
    <div className="pic-container">
      <img src={img} />
      <h6>{title}</h6>
      <h3>{name}</h3>
    </div>
  );
}
