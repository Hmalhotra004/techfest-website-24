import "../styles//components/card.css";

export default function Card({ img, children }) {
  return (
    <>
      <div>
        <img src={img} />
        <h3>{children}</h3>
      </div>
    </>
  );
}
