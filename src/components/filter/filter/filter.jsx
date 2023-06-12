import React from 'react';

import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import './filter.css'

export default function Filter(props) {
  return (
    <>
    <MDBCol className='filterCol'>

      <h4>Filters</h4>
      <MDBRow >
        <MDBBtn  onClick={() => props.onFilterClick(1)}> Name</MDBBtn>
      </MDBRow>

      <MDBRow >
      <MDBBtn onClick={() => props.onFilterClick(2)}> Capital</MDBBtn>  
      </MDBRow>

      <MDBRow >
      <MDBBtn onClick={() => props.onFilterClick(3)}> Region</MDBBtn>  
      </MDBRow>


    </MDBCol>
      
      
    </>
    
  );
}