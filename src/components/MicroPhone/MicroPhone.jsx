import React, { useEffect } from "react";
import Swal from 'sweetalert2'

function MicrophoneCapture() {
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        // Handle the stream
      })
      .catch((err) => {
        console.log( err);
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Microphone access denied",
          showConfirmButton: false,
          timer: 1500
        });
      });
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default MicrophoneCapture;
