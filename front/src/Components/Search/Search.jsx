import React from "react";
import { Results } from "../Results/Results";
import SearchStyles from "../Search/Search.module.css";
import db from "../../db/db.json";

export function  Search()
{
    const [searchData,setSearchData]=React.useState({
        from:"",
        to:"",
        departure_date:"",
        no_of_passengers:"",
    })
    const [results,setResults]=React.useState([]);
    const handleChange=(e)=>
    {
        let {name,value}=e.target;
        setSearchData({...searchData,[name]:value});
    }
    const handleSearch =(e)=>
    {   
        e.preventDefault();
        
        const date = formatDate( departure_date)
        const filteredFlights = db.filter(flight => flight.from.toLowerCase().includes(from.toLowerCase()) &&  flight.to.toLowerCase().includes(to.toLowerCase()) && flight.departure_date.includes(date))
        console.log(filteredFlights)
        // console.log(db.checkout.filter((flight) => flight))
        
        // fetch(`/flights?date_diff=${date_diff_in_months}`)
        // .then((res)=>res.json())
        // .then((res)=>(
            
        setResults(filteredFlights)
        // ))
        // .catch((err)=>
        // (
        //     console.log(err)
        // ))
    }

    function formatDate (input) {
        let datePart = input.match(/\d+/g),
        year = datePart[0], 
        month = datePart[1], day = datePart[2];
      
        return day+'/'+month+'/'+year;
      }

    const{from ,to, departure_date,no_of_passengers}=searchData;
    
    return (
        <div>
            <div className={SearchStyles.Container}>
            <form className={SearchStyles.inputBox}>
                <input 
                    type="text"
                    name="from"
                    value={from}
                    onChange={(e)=>(handleChange(e))}
                    placeholder="From"
                     />
                <input 
                    type="text"
                    name="to"
                    value={to}
                    onChange={(e)=>(handleChange(e))}
                    placeholder="To"
                     />
                <input 
                    type="date"
                    name="departure_date"
                    value={departure_date} 
                    onChange={(e)=>(handleChange(e))}
                    placeholder="Departure Date"/>
                <input 
                    type="number"
                    name="no_of_passengers"
                    value={no_of_passengers}
                    onChange={(e)=>(handleChange(e))}
                    placeholder="Number of passengers"
                 />
                  {/* <input 
                    type="text"
                    name="adult"
                    value={adult}
                    onChange={(e)=>(handleChange(e))}
                    placeholder="adult" 
                 /> */}
                <button onClick={(e)=>(handleSearch(e))}>
                    Search 
                </button>
            </form>
        </div>
        <div >
            <Results from={from} to={to} results={results} no_of_passengers={no_of_passengers}/>
        </div>
        </div>
        
    )
}