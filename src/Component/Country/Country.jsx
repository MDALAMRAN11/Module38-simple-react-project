import { useState } from "react";

export default function Country({
    country,
    handleVisitedCountries,
    handleVisitedFlag,
}) {
    // console.log(country);
    const [visit, setVisit] = useState(false);
    const handleVisited = () => {
        //console.log("you clicked");
        // if (visit) {
        //     setVisit(false);
        // } else {
        //     setVisit(true);
        // }
        // visit ? setVisit(false) : setVisit(true);
        //setVisit(visit ? false : true);
        setVisit(!visit);
        handleVisitedCountries(country);
    };
    const { area, flags, languages, name, population, region } = country;
    //console.log(population.population);
    return (
        <div style={{ backgroundColor: "lightcyan" }}>
            <h3>Country: {name.common}</h3>
            <img src={flags.flags.png} alt="" />
            <div>
                <p>
                    Population: {population.population}{" "}
                    {population.population > 300000
                        ? "Big Country"
                        : "Small Country"}
                </p>
                <p>Total Area:{area.area}</p>
            </div>

            <div>
                <p>Region:{region.region}</p>
                <p>
                    Languages:
                    {languages
                        ? Object.values(languages.languages).join(" , ")
                        : "N/A"}
                </p>
            </div>
            <button onClick={handleVisited}>
                {visit ? "Visited" : "Not Visited"}
            </button>
            <button
                onClick={() => {
                    handleVisitedFlag(country);
                }}
            >
                Add Visited Flag
            </button>
        </div>
    );
}
