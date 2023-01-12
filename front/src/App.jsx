import React, { useState, useEffect } from "react";
import "./App.css";
import { Home } from "./Pages/Home Page/Home";
import { Route, Routes } from "react-router-dom";
import { SearchPage } from "./Pages/Search Page/SearchPage";
import { Checkout } from "./Pages/CheckoutPage/Checkout";
import { Payment } from "./Pages/PaymentPage/Payment";
import { NavBar } from "./Components/NavBar/NavBar";
import Final from "./Components/Seats/Final";
import Body from "./Components/Seats/Body";
import AddFlight from "./Components/Flights/AddFlight";

import axios from "axios";

function App() {
  const [allFlights, setAllFlights] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/flights/allFlights")
      .then(function (response) {
        console.log(response.data);
        setAllFlights(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://rare-gallery.com/mocahbig/425125-clouds-sky-Boeing-787-Microsoft-Flight-Simulator.png)",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "98.7vw",
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addFlight" element={<AddFlight />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/checkout/:id/:from/:to/:no_of_passengers"
          element={<Checkout />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Final/:selected/:totalprice" element={<Final />} />
        <Route path="/seats" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
