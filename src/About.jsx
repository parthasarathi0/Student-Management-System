import React from "react";
import "./About.css";
import Hoc from "./Hoc";

const About = ({about}) => {
  return (
    <div>
      <div>
        <h1 style={{ marginLeft: "500px" }}>Student Management System</h1>
        <h5> global Status:{about}</h5>
        <h3> About the Student Management System</h3>
        <p>
          Student Management System helps manage student registration track
          their academic perfomance and <br />
          provide the overview of student data in easy interface
        </p>
        <h6>Features of this system includes</h6>
        <li id="one">Register New Students With their names and Grade</li>
        <li id="two">View and remove Registered Students</li>
        <li id="three">Maintain the global Application Status</li>
        <li id="four">Easy Naviagation between pages</li>
        <h5 style={{marginLeft:"500px"}} >
          <span>Current System Status :</span>
          Welcome To Student Management System
        </h5>
      </div>
    </div>
  );
};

export default Hoc( About);
