import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar bg-dark">
    <h1>
      <Link to="/">
        <i className="fas fa-code"></i> DevConnector
      </Link>
    </h1>
    <ul>
      <li>
        <Link to="profiles.html">Developers</Link>
      </li>
      <li>
        <Link to="register.html">Register</Link>
      </li>
      <li>
        <Link to="login.html">Login</Link>
      </li>
    </ul>
  </nav>
);
