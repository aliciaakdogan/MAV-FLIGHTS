import React from "react";

export default function BookView() {
  const seats = [true, false, true, false];
  return (
    <div>
      {seats.map((seat) => (
        <div
          style={{
            width: "50px",
            height: "50px",
            background: seat ? "green" : "red",
          }}
        ></div>
      ))}
    </div>
  );
}
