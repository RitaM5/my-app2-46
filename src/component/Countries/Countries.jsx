//module 46-6 and 46-7 nmbr vdo ar jonne:
import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
//key={country.cca3} warning case solve korar jonne use krce.(cca3 k id dhore).
    return (
        <div>
            <h1>Hello from countries: {countries.length}</h1>
           <div className="countries-container">
           {
                countries.map(country => <Country country={country}
                key={country.cca3}>
                </Country>)
            }
           </div>
        </div> 
    );
};

export default Countries;

//module 46-4 and 46-5 nmbr vdo ar jonno:
/* import React, { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Hello from countries: {countries.length}</h1>
            {
                countries.map(country => <Country 
                    country = {country}
                    name={country.name.common} 
                    population={country.population} 
                    region={country.region} 
                    area={country.area}></Country>)
            }
        </div>
    );
};


export default Countries; */