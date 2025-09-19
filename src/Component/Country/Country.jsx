export default function Country({ country }) {
    const { area, flags, languages, name, population, region } = country;
    console.log(languages.languages);
    return (
        <div style={{ backgroundColor: "lightcyan" }}>
            <h3>Country: {name.common}</h3>
            <img src={flags.flags.png} alt="" />
            <div>
                <p>Population: {population.population}</p>
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
        </div>
    );
}
