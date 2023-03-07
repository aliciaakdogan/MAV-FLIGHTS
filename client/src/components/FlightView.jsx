import React from "react";
import { Link } from "react-router-dom";

export default function FlightView({ selectedFlight }) {
  return (
    <div className="flight-view-container">
      {selectedFlight ? (
        <>
          <h1>{selectedFlight?.destination} </h1>
          <p>{selectedFlight.price} kr </p>
          <h5>
            {selectedFlight.airline}, {selectedFlight.airport}
          </h5>
          <h5>
            Departure:{selectedFlight.departure},<br /> Arrival:
            {selectedFlight.arrival}
          </h5>

          <iframe
            src={selectedFlight.googleMapsUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Link to={`/book/${selectedFlight._id}`}>Book</Link>
        </>
      ) : (
        "Please  select a flight"
      )}
    </div>
  );
}
