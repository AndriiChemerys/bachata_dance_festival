import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">Navigation</div>
      <Outlet />
    </div>
  );
};

export default Navigation;
