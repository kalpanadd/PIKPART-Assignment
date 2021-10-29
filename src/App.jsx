import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Components/Form/Form';
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
align-items:center;
justify-content:center;
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
    <BrowserRouter>

      <Container>
        <HeaderComponent />
        <Switch>
          <Route path='/' exact>
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
                <h1>Loading.....</h1>}
            </VehicleContainer>
          </Route>
          <Route path='/update' exact>
            <Form />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
