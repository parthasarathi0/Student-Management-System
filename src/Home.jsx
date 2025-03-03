import React, { createContext, useState } from "react";

import Button from 'react-bootstrap/Button';
import "./Home.css";
import About from "./About";
import Hoc from "./Hoc";
const Home = ({h5,handleEvent}) => {
   
  return (
    <div>
      <h1 style={{marginLeft:"500px",marginTop:"-500px"}} >Student Management System</h1>
      <h5> global Status:
        {h5}
      </h5>
      <h3 style={{marginLeft:"500px"}}>Welcome to Student Management System</h3>
      <Button variant="success" onClick={handleEvent} >Success</Button>
      
    </div>
  );
};

export default Hoc( Home);
