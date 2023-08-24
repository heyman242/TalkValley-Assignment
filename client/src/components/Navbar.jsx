import { HomeIcon } from "../assets/icons";
import { useDashboardContext } from "../pages/Dashboard";

const Navbar = () => {
  const { logoutUser } = useDashboardContext();
  return (
    <header>
      <div>
        <HomeIcon />
        <span>RecordHub</span>
      </div>
      <div>
        <div>Dashboard</div>
      </div>
      <div>
        <button type="button" onClick={logoutUser}>Logout</button>
      </div>
    </header>
  );
};

export default Navbar;
