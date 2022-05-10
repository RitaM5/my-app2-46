//module 46-6 nmbr vdo ar jonne:
import './App.css'
import Countries from './component/Countries/Countries';
function App() {
  return (
    <div className="App">
    <Countries></Countries>
    </div>
    );
  }





//module 46-4 and 46-5 vdo ar jonno.
/* import './App.css'
import Countries from './component/Countries/Countries';
function App() {
  return (
    <div className="App">
    <Countries></Countries>
    </div>
    );
  }
 */

//module 46-3 number vdo ar jonno ata.
/* import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Countries from './components/Countries/Countries';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Header></Header>
    </div>
    );
  }
 */

 
//46_1,2 number module ar jonno ata:
/*   return (
  <div className="App">
      <LoadCountries></LoadCountries>
  </div>
  );
}
function LoadCountries(){
   const [countries, setCountries] = useState([]);
   useEffect(() => {
     fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => setCountries(data));
   }, [])
  return(
    <div>
      <h1>visiting every country of the world</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country (props){
  return(
    <div>
    <h2>Name: {props.name}</h2>
    <h4>Population: {props.population}</h4>
    </div>
  )
} */


export default App
