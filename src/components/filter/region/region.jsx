import React from 'react';
import {v4 as uuid} from 'uuid';
import { MDBInput, MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';

async function DataReloader(text, trigger){
    try {
        console.log('prior search')
        const response = await fetch("http://localhost:8080/api/country/region/"+text)
        console.log('settings')
        const json = await response.json();
        console.log('request is done')
        console.log(json)  

        trigger(json)
        
      } catch (error) {
        console.log("error fetching: ", error)
      }

}

export default function Region(props) {
  return (
    <>

        <MDBInput style={{margin:'2vw', padding:'1%'}} 
        onChange={(e) => {
            DataReloader(e.target.value, props.setCountries)
             }}
        placeholder='America' label='Region Name' id='form1' type='text' />
        
        <MDBListGroup >
        {props.countries.length > 0 && props.countries != null ? props.countries.map((item) => {

{console.log('rendering: ', item)}
return <MDBRipple>
<MDBListGroupItem key={uuid()} tag='a' href='#' action noBorders className='px-3 countryItem'>
  <img src={item.flag}/>{item.cname}, {item.capital}, located on: {item.region} with a population of: {item.population}
</MDBListGroupItem>
</MDBRipple>
})
        : () => {return <></>} 
}
    </MDBListGroup>

    </>
    
  );
}