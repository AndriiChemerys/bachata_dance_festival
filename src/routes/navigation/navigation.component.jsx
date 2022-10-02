import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Logo
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/artists">
            Artists
          </Link>
          <Link className="nav-link" to="/program">
            Program
          </Link>
          <Link className="nav-link" to="/tickets">
            Tickets
          </Link>
          <Link className="nav-link" to="/venue">
            Venue
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
