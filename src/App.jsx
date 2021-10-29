import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import HeaderComponent from './Components/Header/Header';
import CardContainer from './Components/Card/Card';


const Container = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
width:100%;
`

const VehicleContainer = styled.div`
display:flex;
width:100%;
flex-wrap:wrap;
`

function App() {
  const [results, setResults] = useState();

  useEffect(async () => {
    const res = await axios.get("https://devapi.pikpart.com/api/vehicle/models");
    const { data } = res.data;
    console.log(data);
    if (data) {
      setResults(data);
      // console.log("data:", results);
    }

  }, [])
  console.log(results);
  return (
    <Container>
      <HeaderComponent />
      <VehicleContainer>
        {results ?
          results.map((each) =>
            <CardContainer
              key={each.id}
              vehicleBrandId={each.vehicleBrandId}
              name={each.name}
              vehicleType={each.vehicleType}
              engineCcId={each.engineCcId}
              relevance={each.relevance}
              imageUrl={each.imageUrl}
            />

          )
          :
          "no"}
      </VehicleContainer>

    </Container>
  );
}

export default App;
