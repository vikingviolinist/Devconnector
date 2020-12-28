import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Fragment } from 'react';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link onClick={logout} to="#!">
          <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="#!">Profiles</Link>
      </li>
      <li></li>
      <Link to="r egister.html">Register</Link>
      <li>
        <Link to="login.html">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
