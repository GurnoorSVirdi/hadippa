import React from 'react';
import Logout from "./logout";
import './Dashboard.css'; 
import lionLeftoversHomeImage from './images/Lion_leftovers_home.png';
const WorkerDashboard = ({ userData }) => {
  return (
    <div className="dashboard-container">
      <img src={lionLeftoversHomeImage} alt="Lion Leftovers Logo" className="logo" />
      <h1>Welcome to the Worker Dashboard, {userData?.name}</h1>
      <button className="dashboard-button" onClick={() => console.log("Manage Inventory")}>Manage Inventory</button>
      <button className="dashboard-button" onClick={() => console.log("Manage Orders")}>Manage Orders</button>
      <button className="dashboard-button" onClick={() => console.log("Manage Reviews")}>Manage Reviews</button>
      <Logout />
    </div>
  );
};

export default WorkerDashboard;
