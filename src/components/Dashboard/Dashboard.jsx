import React from "react";
import WebcamCapture from "./../CameraAccess/CameraAccess";
import MicrophoneCapture from "./../MicroPhone/MicroPhone";

function Dashboard({ onSelectCategory, selectedCategory }) {

  console.log({ selectedCategory});
  

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h4><b>Exam Dashboard</b></h4>
        <ul>
          <li onClick={() => onSelectCategory("aptitude")}>
            Aptitude
          </li>
          <li onClick={() => onSelectCategory("technical")}>
            Technical
          </li>
          <li onClick={() => onSelectCategory("coding")}>
            Coding
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="header">
          <h1 className="text-xl mb-5 font-semibold">{selectedCategory ? selectedCategory.toUpperCase() + " Exam" : "Select a Category"}</h1>
        </div>
        <div className="proctoring-tools text-center">
          <MicrophoneCapture />
          <WebcamCapture />
        </div>
        <div className="questions">
          {/* This section will render questions */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
