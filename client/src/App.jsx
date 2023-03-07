import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import FlightView from "./components/FlightView";
import { Routes, Route } from "react-router-dom";
import BookView from "./components/BookView";

function App() {
  const [flights, setFlights] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  useEffect(() => {
    async function getFlights() {
      const response = await fetch("http://localhost:3000/flights");
      const data = await response.json();
      setFlights(data);
    }
    getFlights();
  }, []);

  return (
    <div className="main-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar
                flights={flights}
                setSelectedFlight={setSelectedFlight}
              />
              <FlightView selectedFlight={selectedFlight} />
            </>
          }
        />
        <Route path="/book/:id" element={<BookView />} />
      </Routes>
    </div>
  );
}

export default App;
