import { use } from "react";
import Country from "../Country/Country";

function Countries({ countriesData }) {
    const { countries } = use(countriesData);
    //console.log(countries.countries);
    return (
        <div>
            <h3>Total Countries: {countries.length}</h3>
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
                    ></Country>
                ))}
            </div>
        </div>
    );
}
export default Countries;
