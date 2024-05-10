import { NavLink } from "react-router-dom";

export default function Anchor({ children, route }) {
  return (
    <li className="nav__list">
      <NavLink
        to={route}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {children}
      </NavLink>
    </li>
  );
}
