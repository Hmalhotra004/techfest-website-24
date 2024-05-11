import "../styles/components/dropdown.css";

export default function DropDown({ name, children, ...props }) {
  return (
    <div className="dropdown">
      <button className="nav__list">{name}</button>
      <div
        className="dropdown-content"
        {...props}
      >
        <ul className="nav__links">{children}</ul>
      </div>
    </div>
  );
}
