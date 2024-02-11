import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
