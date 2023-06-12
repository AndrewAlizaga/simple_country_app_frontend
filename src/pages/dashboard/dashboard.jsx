import React, { useState } from 'react';
import "./dashboard.css";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

import axios from "axios"
import Name from '../../components/filter/name/name';
import Region from '../../components/filter/region/region';
import Capital from '../../components/filter/capital/capital';


import Blank from '../../components/filter/blank/blank';
import Filter from '../../components/filter/filter/filter';

export default class Dashboard extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        renderScreen: 0,
        selectedCountry: {},
        countriesMatch: []
      }
    };


    async componentDidMount() {

      try {
        const response = await fetch("http://localhost:8080/api/country")
        const json = await response.json();
        console.log('request is done')
        console.log(json)  

        this.setState({
          countriesMatch: json
        })
      } catch (error) {
        console.log("error fetching: ", error)
      }
      
    }

    setCountriesMatch = (data) => {
      this.setState({countriesMatch: data})
    }
    
    setRenderScreen = (data) => {
      this.setState({renderScreen: data})
    }


    CurrentScreen = (screen) => {
        switch (screen) {
            //Blank
            case 0:
                return <Blank></Blank>;
            
            // Name
            case 1:
            return <Name countries={this.state.countriesMatch} setCountries={this.setCountriesMatch}/>

            // Region
            case 2:
            return <Capital countries={this.state.countriesMatch} setCountries={this.setCountriesMatch}/>

            // Capital
            case 3:
            return <Region countries={this.state.countriesMatch} setCountries={this.setCountriesMatch}/>

            // Country Selection
            case 4:
              return
        }
    }

  

  render() {
    return (
    <div className="Dashboard">
    <MDBRow>
      
        
      <MDBCol sm='2' md='2'>
        <Filter onFilterClick={this.setRenderScreen}></Filter>
      </MDBCol>


      <MDBCol sm='8' md='8'>
        {this.CurrentScreen(this.state.renderScreen)}
      </MDBCol>

    </MDBRow>
    </div>
    
  );
}

}