import "../styles//components/card.css";

export default function TeamCard({ img, name, title }) {
  return (
    <div>
      <img src={img} />
      <h2>{title}</h2>
      <h3>{name}</h3>
    </div>
  );
}
