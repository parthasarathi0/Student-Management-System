
import React, { createContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import "./Navbtn.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Students from "./Students";
import Register from "./Register";

export let Mydata = createContext();

const Navbtn = () => {
  let [store, setStore] = useState({ students: [] }); 

  return (
    <div>
      <Mydata.Provider value={{ store, setStore }}>
        <BrowserRouter>
          <div className="container" id="btn">
            <div className="row" id="insidebtn">
              <Link className="link" to={"/Home"}>
                <div className="col-3">
                  <Button variant="primary">Home</Button>
                </div>
              </Link>
              <Link className="link" to={"/About"}>
                <div className="col-3">
                  <Button variant="primary">About</Button>
                </div>
              </Link>

              <Link className="link" to={"/Students"}>
                <div className="col-3">
                  <Button variant="primary">Students</Button>
                </div>
              </Link>
              <Link className="link" to={"/Register"}>
                <div className="col-3">
                  <Button variant="primary">Register</Button>
                </div>
              </Link>
            </div>
          </div>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Mydata.Provider>
    </div>
  );
};

export default Navbtn;
