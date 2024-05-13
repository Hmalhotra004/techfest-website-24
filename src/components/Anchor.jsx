import { NavLink } from "react-router-dom";

const Anchor = ({ children, route }) => {
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
};

export default Anchor;
