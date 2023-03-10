import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    return (
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mt-10">
          <h2 className="text-2xl font-bold text-secondary">
            Welcome to your Dashboard
          </h2>
          <div className="py-8">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side py-10">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 bg-base-100 text-base-content">
            {/*<!-- Sidebar content here -->*/}
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Reviews</Link>
            </li>
            <li>
              <Link to="/dashboard/history">My History</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;