import React, { useState } from "react";
import "./AddFlight.css";
import axios from "axios";

const seats = [
  [
    { id: 1, number: "A1" },
    { id: 2, number: "A2" },
    { id: 3, number: "A3" },
    { id: 4, number: "A4" },
    { id: 24, number: "A5" },
    { id: 34, number: "A5" },
    { id: 44, number: "A6" },
    { id: 54, number: "A7" },
    null,
    { id: 5, number: "A8" },
    { id: 6, number: "A9" },
    { id: 7, number: "A10" },
    { id: 8, number: "A11" },
    { id: 9, number: "A12" },
  ],
  [
    { id: 11, number: "B1" },
    { id: 12, number: "B2" },
    { id: 13, number: "B3" },
    { id: 14, number: "B4" },
    { id: 74, number: "B5" },
    { id: 84, number: "B6" },
    { id: 34, number: "B7" },
    { id: 94, number: "B8" },
    null,
    { id: 15, number: "B9" },
    { id: 16, number: "B10" },
    { id: 17, number: "B11" },
    { id: 18, number: "B12" },
    { id: 19, number: "B13" },
  ],
  [
    { id: 21, number: "C1" },
    { id: 22, number: "C2" },
    { id: 23, number: "C3" },
    { id: 24, number: "C4" },
    { id: 29, number: "C5" },
    { id: 20, number: "C6" },
    { id: 99, number: "C7" },
    { id: 98, number: "C8" },
    null,
    { id: 25, number: "C9" },
    { id: 26, number: "C10" },
    { id: 27, number: "C11" },
    { id: 28, number: "C12" },
    { id: 29, number: "C13" },
    null,
  ],
  [
    { id: 11, number: "D1" },
    { id: 12, number: "D2" },
    { id: 13, number: "D3" },
    { id: 14, number: "D4" },
    { id: 74, number: "D5" },
    { id: 84, number: "D6" },
    { id: 34, number: "D7" },
    { id: 94, number: "D8" },
    null,
    { id: 15, number: "D9" },
    { id: 16, number: "D10" },
    { id: 17, number: "D11" },
    { id: 18, number: "D12" },
    { id: 19, number: "D13" },
  ],
  [
    { id: 11, number: "E1" },
    { id: 12, number: "E2" },
    { id: 13, number: "E3" },
    { id: 14, number: "E4" },
    { id: 74, number: "E5" },
    { id: 84, number: "E6" },
    { id: 34, number: "E7" },
    { id: 94, number: "E8" },
    null,
    { id: 15, number: "E9" },
    { id: 16, number: "E10" },
    { id: 17, number: "E11" },
    { id: 18, number: "E12" },
    { id: 19, number: "E13" },
  ],
  [
    { id: 11, number: "F1" },
    { id: 12, number: "F2" },
    { id: 13, number: "F3" },
    { id: 14, number: "F4" },
    { id: 74, number: "F5" },
    { id: 84, number: "F6" },
    { id: 34, number: "F7" },
    { id: 94, number: "F8" },
    null,
    { id: 15, number: "F9" },
    { id: 16, number: "F10" },
    { id: 17, number: "F11" },
    { id: 18, number: "F12" },
    { id: 19, number: "F13" },
  ],
  [
    { id: 11, number: "G1" },
    { id: 12, number: "G2" },
    { id: 13, number: "G3" },
    { id: 14, number: "G4" },
    { id: 74, number: "G5" },
    { id: 84, number: "G6" },
    { id: 34, number: "G7" },
    { id: 94, number: "G8" },
    null,
    { id: 15, number: "G9" },
    { id: 16, number: "G10" },
    { id: 17, number: "G11" },
    { id: 18, number: "G12" },
    { id: 19, number: "G13" },
  ],
];

const AddFlight = () => {
  const [flightName, setFlightName] = useState("");
  const [form, setForm] = useState("");
  const [to, setTo] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [adultPrice, setAdultPrice] = useState("");
  const [babyPrice, setBabyPrice] = useState("");
  const [img, setImg] = useState("");

  const createFlight = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/flights/addFlight", {
        flight_name: flightName,
        img,
        departure_time: departureTime,
        departure_date: departureDate,
        arrival_time: arrivalTime,
        arrival_date: arrivalDate,
        price_adult: adultPrice,
        price_baby: babyPrice,
        from: form,
        to: to,
        seats,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="form-container">
      <label>Airplane Name</label>
      <input
        type="text"
        placeholder="Flight name.."
        onChange={(e) => setFlightName(e.target.value)}
      />
      <label>From</label>
      <input
        type="text"
        placeholder="From.."
        onChange={(e) => setForm(e.target.value)}
      />
      <label>To</label>
      <input
        type="text"
        placeholder="To.."
        onChange={(e) => setTo(e.target.value)}
      />
      <label>Departure Time</label>
      <input
        type="text"
        placeholder="Departure Time.."
        onChange={(e) => setDepartureTime(e.target.value)}
      />
      <label>Departure Date</label>
      <input
        type="text"
        placeholder="Departure Date.."
        onChange={(e) => setDepartureDate(e.target.value)}
      />
      <label>arrival time</label>
      <input
        type="text"
        placeholder="arrival time.."
        onChange={(e) => setArrivalTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="arrival date.."
        onChange={(e) => setArrivalDate(e.target.value)}
      />
      <label>price for adult</label>
      <input
        type="text"
        placeholder="price for adult.."
        onChange={(e) => setAdultPrice(e.target.value)}
      />
      <label>price for baby</label>
      <input
        type="text"
        placeholder="price for baby.."
        onChange={(e) => setBabyPrice(e.target.value)}
      />
      <label>Image link</label>
      <input
        type="text"
        placeholder="Past image link.."
        onChange={(e) => setImg(e.target.value)}
      />
      <button
        className="btn-submit"
        style={{ width: "100%" }}
        onClick={(e) => createFlight(e)}
      >
        Submit
      </button>
    </div>
  );
};

export default AddFlight;

/*---------------------------------------------------------------- flight_name,
    img,
    departure_time,
    departure_date,
    arrival_time,
    price_adult,
    price_baby,
    from,
    to,
    seats,*/
