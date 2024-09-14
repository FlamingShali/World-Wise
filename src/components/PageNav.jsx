import { NavLink } from "react-router-dom";
import "./PageNav.module.styles.css";

const PageNav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing page</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product page</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
