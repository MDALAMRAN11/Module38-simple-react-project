import { Suspense } from "react";
import "./App.css";
import Countries from "./Component/Countries/Countries";

const fetchCountries = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/all");
    return res.json();
};
function App() {
    const countriesData = fetchCountries();
    return (
        <>
            <h1>Countries On The Go</h1>
            <div>
                <Suspense fallback={<h2>Loading All Countries.......</h2>}>
                    <Countries countriesData={countriesData}></Countries>
                </Suspense>
            </div>
        </>
    );
}

export default App;
