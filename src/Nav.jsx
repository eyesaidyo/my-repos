import { Outlet, Link } from "react-router-dom";
import github from "./github.svg";
function Nav() {
  const style = {
    color: "white",
    textDecoration: "none",
    padding: "15px",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <nav>
        <Link style={style} to="/">
          Home
        </Link>
        <Link style={style} to="/about">
          Error 404
        </Link>
        <Link style={style} to="/boundary">
          Error-Boundary-Test
        </Link>
      </nav>
      <Outlet />
      <div>
        <a href="https://github.com/eyesaidyo">
          <img className="github" src={github} alt="github" />
        </a>
      </div>
    </div>
  );
}
export default Nav;
