import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({ expiryTimestamp, onExpire: () => alert("Time's up!") });

  return (
    <div>
      <div style={{ fontSize: "100px" }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default Timer;
