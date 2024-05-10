import { NavLink } from "react-router-dom";

export default function Anchor({ children, route }) {
  return (
    <li>
      <NavLink
        to={route}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {children}
      </NavLink>
    </li>
  );
}
