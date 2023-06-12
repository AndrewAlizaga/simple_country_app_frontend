import React from 'react';
import { MDBInput, MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';


export default function Region(props) {
  return (
    <>

        <MDBInput style={{margin:'2vw', padding:'1%'}} placeholder='America' label='Region Name' id='form1' type='text' />
        
        <MDBListGroup >
        {props.countries.map(({cname, flag, capital, region, population}) => {
            <MDBRipple>
            <MDBListGroupItem key={'123'} tag='a' href='#' action noBorders className='px-3 countryItem'>
              <img src={flag}/>{cname}, {capital}, located on: {region} with a population of: {population}
            </MDBListGroupItem>
          </MDBRipple>
        })}
    </MDBListGroup>

    </>
    
  );
}