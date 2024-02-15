// src/POPOSList.js
import POPOSSpace from "../POPOSSpace/POPOSSPace"
import React from 'react';
import './POPOSList.css';
import data from '../../sfpopos-data.json'


function POPOSList(props) {
  // eslint-disable-next-line
  const spaces = data.map(( { title, address, images, hours }, i ) => {
    return (
      <POPOSSpace 
      id={i}
      key={title}
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
      />  
    )
  }
    )
    return (
      <div className="POPOSList">
         <POPOSSpace
      name="50 California Street"
      address="50 California St."
      image="50-california-st.jpeg"
       />
      <POPOSSpace
      name="100 Pine Street"
      address="100 Pine St."
      image="100-pine.jpeg" />
      <POPOSSpace 
      name="101 California Street"
      address="101 California St."
      image="101-california.jpeg"/>
      <POPOSSpace 
      name="343 Sansome Street"
      address="343 Sansome St."
      image="343-sansome-roof-garden.jpeg"/>   
      <POPOSSpace 
      name="525 Market Street"
      address="525 Market St."
      image="525-market-street-plaza.jpeg"/>
      <POPOSSpace 
      name="555 California Street"
      address="555 California St."
      image="/555-california.jpeg"/>  
      <POPOSSpace 
      name="Citigroup Center"
      address="Citigroup Center"
      image="/citigroup-center.jpeg"/>  
      <POPOSSpace 
      name="Embarcadero Center"
      address="Embarcadero Center"
      image="/embarcadero-center.jpeg"/>  
      <POPOSSpace 
      name="Empire Park"
      address="Empire Park"
      image="/empire-park.jpeg"/>  
      <POPOSSpace 
      name="Garden Terrace at 150 California"
      address="150 California St."
      image="/garden-terrace-at-150-california.jpeg"/>  
      <POPOSSpace 
      name="Transamerica Redwood Park"
      address="Transamerica Redwood Park"
      image="/transamerica-redwood-park.jpeg"/>    
    
    
     </div>
    )
  }
  
  export default POPOSList