import { HomeIcon, LogoutIcon } from "../assets/icons";
import { useDashboardContext } from "../pages/Dashboard";

const Navbar = () => {
  const { user,logoutUser } = useDashboardContext();
  return (
    <header className=" p-1 flex  justify-between items-center">
      <a href="" className="flex items-center gap-1">
        <HomeIcon />
        <span className="font-bold text-xl">RecordHub</span>
      </a>
      <div>
        <div className="font-bold text-xl border border-grey-500 rounded-full px-4 py-1 ">
          Welcome: {user?.name}
        </div>
      </div>
      <div>
        <button type="button" onClick={logoutUser} className="mx-2 flex">
          Logout
          <LogoutIcon />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
