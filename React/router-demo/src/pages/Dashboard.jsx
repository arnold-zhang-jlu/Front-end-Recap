import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      DashBoard
      <Outlet />
    </div>
  );
}

export default Dashboard;
