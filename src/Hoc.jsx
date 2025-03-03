import React from "react";
import { useState,useRef } from "react";
const Hoc = (GetComponent) => {
  return function innerFunction() {
    let [h5, seth5] = useState("student Management System");
    let [about, SetAbout] = useState("   students are Actively learning");

    
    let handleEvent = () => {
      seth5("   students are Actively learning");
    
    };
    return <GetComponent h5={h5} handleEvent={handleEvent} about={about} />;
  };
};

export default Hoc;
