import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => (
  <NavigationStyled className="section">
    <img src="./favicon.png" height="70" width="auto" alt="vLeave-logo" />
    <ul className="nav__content-wrapper">
      <li>
        <NavLink children="Home" to={"/home"} />
      </li>
      <li>
        <NavLink children="Shop" to={"/shop"} />
      </li>
    </ul>
  </NavigationStyled>
);

export default Navigation;
