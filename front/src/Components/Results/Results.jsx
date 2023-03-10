import React from "react";
import { useNavigate } from "react-router-dom";
import ResultsStyle from "../Results/Results.module.css";

export function Results({ results, from, to, no_of_passengers }) {
  const navigate = useNavigate();
  return (
    <div className={ResultsStyle.resultsContainer}>
      {results.map((item) => (
        <div key={item.id} className={ResultsStyle.result}>
          <div>
            <img src={item.img} alt="" />
          </div>
          <div>
            <div className={ResultsStyle.content}>
              <h1>{item.flight_name}</h1>
              <h1>
                {item.from}--{item.to}
              </h1>
            </div>
            <div className={ResultsStyle.content}>
              <h4>Departure time :-{item.departure_time}</h4>
              <h4>Arrival time :-{item.arrival_time}</h4>
            </div>
          </div>

          <div className={ResultsStyle.fareBox}>
            <h3>{item.price_adult * no_of_passengers}$ / person</h3>
            <button onClick={() => navigate(`/seats`)}>Pick Your Seats</button>
            {/* <button onClick={()=>(
                            navigate(`/checkout/${item.id}/${item.from}/${item.to}/${no_of_passengers}`)
                        )} >Checkout</button> */}
          </div>
        </div>
      ))}
    </div>
  );
}
