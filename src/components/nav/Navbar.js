import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/toppings">
              <li>Toppings</li>
            </Link>
            {/* <Link to="/stuffs">
              <li>Stuffs</li>
            </Link> */}
            <Link to="/animals">
              <li>Animals</li>
            </Link>
            <Link to="/locations">
              <li>Locations</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};
