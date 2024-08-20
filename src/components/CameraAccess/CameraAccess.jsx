import React from "react";
import Webcam from "react-webcam";

function WebcamCapture() {
  return (
    <div>
      <h3 className="text-xl mb-5 font-semibold">Webcam View</h3>
      <Webcam audio={false} className="w-96 rounded-xl" />
    </div>
  );
}

export default WebcamCapture;
