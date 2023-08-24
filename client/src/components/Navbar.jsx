import { HomeIcon, LogoutIcon } from "../assets/icons";
import { useDashboardContext } from "../pages/Dashboard";

const Navbar = () => {
  const { user, logoutUser } = useDashboardContext();

  return (
    <header className="p-2 md:p-4 flex justify-between items-center">
      <a href="/" className="flex items-center gap-1">
        <HomeIcon />
        <span className="font-bold text-xl">RecordHub</span>
      </a>
      <div className="hidden md:block">
        <div className="font-bold text-xl border border-gray-500 rounded-full px-4 py-1 shadow shadow-gray-300">
          Welcome: {user?.name}
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={logoutUser}
          className="mx-2 flex font-bold text-xl"
        >
          Logout
          <LogoutIcon />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
