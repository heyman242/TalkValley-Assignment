import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";
import {Navbar} from "../components"
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();


const Dashboard = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        logoutUser,
      }}
    >
      <div>
        <Navbar />
        <div>
          <Outlet context={{ user }} />
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default Dashboard;
