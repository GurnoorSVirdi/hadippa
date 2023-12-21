import React from 'react';
import Logout from "./logout";
import './Dashboard.css'; // Import the CSS file for consistent styling
import LionLeftoversLogo from './images/Lion_leftovers_home.png'; // Import the logo

const StudentDashboard = ({ userData }) => {
  return (
    <div className="dashboard-container">
      <img src={LionLeftoversLogo} alt="Lion Leftovers Logo" className="logo" />
      <h1>Welcome to Lion Leftovers, {userData?.name}</h1>
      <button className="dashboard-button" onClick={() => console.log("View Food Options")}>View Food Options</button>
      <button className="dashboard-button" onClick={() => console.log("Make an Order")}>Make an Order</button>
      <button className="dashboard-button" onClick={() => console.log("Write a Review")}>Write a Review</button>
      <Logout />
    </div>
  );
};

export default StudentDashboard;
