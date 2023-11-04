import { Outlet, Link } from "react-router-dom";

function Lyout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <li>
          <Link to="/Blogs">Blogs</Link>
        </li>
      </nav>

      <Outlet />
    </div>
  );
}
export default Lyout;
