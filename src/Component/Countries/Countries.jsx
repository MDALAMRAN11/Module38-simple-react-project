import { use, useState } from "react";
import Country from "../Country/Country";

function Countries({ countriesData }) {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);
    const handleVisitedCountries = (country) => {
        //console.log("visited countries clicked", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };
    const handleVisitedFlag = (country) => {
        const newVisitedFlag = [...visitedFlag, country];
        setVisitedFlag(newVisitedFlag);
    };
    const { countries } = use(countriesData);
    //console.log(countries.countries);
    //console.log(visitedCountries);
    //console.log("You clicked to respond flag", visitedFlag.flags?.flags?.png);
    return (
        <div>
            <h3>Total Countries: {countries.length}</h3>
            <h4>Total Visited Countries : {visitedCountries.length}</h4>
            <div>
                {visitedFlag.map((flag, index) => (
                    <img
                        key={index}
                        style={{ width: "50px", marginRight: "8px" }}
                        src={flag.flags?.flags?.png}
                    ></img>
                ))}
            </div>
            <ol>
                {visitedCountries.map((country) => (
                    <li key={country.cca3.cca3}>{country.name?.common}</li>
                ))}
            </ol>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "10px",
                }}
            >
                {countries.map((country) => (
                    <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>
                ))}
            </div>
        </div>
    );
}
export default Countries;
