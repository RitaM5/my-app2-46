//module 46-6 and 46-7 nmbr vdo ar jonne:
import React from 'react';
import './Country.css';
const Country = (props) => {
    //console.log(props);
    const {area, region, name, languages,flags} = props.country;
    //console.log(props.Country);
    return (
        <div className="country">
            <h2>Name: {name.common}</h2>
            <img src={flags.png}/>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p>Languages: {languages ? Object.values(languages)[0] : 'no found'}</p>
        </div>
    );
};

export default Country;



//module 46-4 and 46-5 nmbr vdo ar jonno:
/* import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props);
    return (
        <div className="country">
            <h3>country name: {props.name}</h3>
            <p>Population: {props.population}</p>
            <p><small>Region: {props.region}</small></p>
            <p><small>Area: {props.area}</small></p>
        </div>
    );
};

export default Country; */