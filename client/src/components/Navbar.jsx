import { HomeIcon, LogoutIcon } from "../assets/icons";
import { useDashboardContext } from "../pages/Dashboard";

const Navbar = () => {
  const { user,logoutUser } = useDashboardContext();
  return (
    <header>
      <div>
        <HomeIcon />
        <span>RecordHub</span>
      </div>
      <div>
        <div>Welcome: {user?.name}</div>
      </div>
      <div>
        <button type="button" onClick={logoutUser}><LogoutIcon/></button>
      </div>
    </header>
  );
};

export default Navbar;
