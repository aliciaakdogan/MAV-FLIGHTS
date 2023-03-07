import React from "react";

export default function Sidebar({ flights, setSelectedFlight }) {
  return (
    <div className="sidebar">
      {flights
        ? flights.map((flight) => (
            <div
              className="slide"
              onClick={() => {
                setSelectedFlight(flight);
              }}
            >
              <div className="cards">
                <h2>{flight.destination}</h2>
                <p>{flight.departure}</p>
                <h5>
                  {flight.airline}, {flight.airport}
                </h5>
                <p>{flight.price}kr </p>
              </div>
            </div>
          ))
        : "Loading..."}
    </div>
  );
}
