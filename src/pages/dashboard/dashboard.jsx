import React, { useState } from 'react';
import "./dashboard.css";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

import Name from '../../components/filter/name/name';
import Region from '../../components/filter/region/region';
import Capital from '../../components/filter/capital/capital';


import Blank from '../../components/filter/blank/blank';
import Filter from '../../components/filter/filter/filter';

export default function Dashboard() {


  const [renderScreen, setRenderScreen] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState({});
    const [countriesMatch, setCountriesMatch] = useState([
      {cname: 'Mexico', region: 'Americas', population: '123123', capital: 'Mexico City', flag: "https://flagcdn.com/w320/bl.png"},
      {cname: 'Nicaragua', region: 'Americas', population: '123123', capital: 'Managua', flag: "https://flagcdn.com/w320/bl.png"},
      {cname: 'Costa Rica', region: 'Americas', population: '123123', capital: 'San Jose?', flag: "https://flagcdn.com/w320/bl.png"},
      {cname: 'Honduras', region: 'Americas', population: '123123', capital: 'uh...', flag: "https://flagcdn.com/w320/bl.png"},
    ]);


    function CurrentScreen(screen) {
        switch (screen) {
            //Blank
            case 0:
                return <Blank></Blank>;
            
            // Name
            case 1:
            return <Name countries={countriesMatch} setCountries={setCountriesMatch}/>

            // Region
            case 2:
            return <Capital countries={countriesMatch} setCountries={setCountriesMatch}/>

            // Capital
            case 3:
            return <Region countries={countriesMatch} setCountries={setCountriesMatch}/>

            // Country Selection
            case 4:
              return
        }
    }

  

  return (
    <div className="Dashboard">
    <MDBRow>
      
        
      <MDBCol sm='2' md='2'>
        <Filter onFilterClick={setRenderScreen}></Filter>
      </MDBCol>


      <MDBCol sm='8' md='8'>
        {CurrentScreen(renderScreen)}
      </MDBCol>

    </MDBRow>
    </div>
    
  );
}