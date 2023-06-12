import React from 'react';
import { MDBInput, MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';


export default function Name(props) {
  return (
    <>

        <MDBInput style={{margin:'2vw', padding:'1%'}} placeholder='Nicaragua' label='Country Name' id='form1' type='text' />
        
        <MDBListGroup >

        {props.countries.map((item) => {

            {console.log('rendering: ', item)}
            return <MDBRipple>
            <MDBListGroupItem key={'123'} tag='a' href='#' action noBorders className='px-3 countryItem'>
              <img src={item.flag}/>{item.cname}, {item.capital}, located on: {item.region} with a population of: {item.population}
            </MDBListGroupItem>
          </MDBRipple>
        })
        }

    </MDBListGroup>

    </>
    
  );
}