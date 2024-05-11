import "../styles/components/dropdown.css";

export default function DropDown({ name, children }) {
  return (
    <div className="dropdown">
      <button className="nav__list">{name}</button>
      <div className="dropdown-content">
        <ul className="nav__links">{children}</ul>
      </div>
    </div>
  );
}
