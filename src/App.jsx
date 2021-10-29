// import React, { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios';
import styled from 'styled-components';

import HeaderComponent from './Components/Header/Header';
import CardContainer from './Components/Card/Card';


const Container = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
width:100%;
`


function App() {
  // const [results, setResults] = useState();


  // useEffect(async () => {
  //   const res = await axios.get("https://devapi.pikpart.com/api/vehicle/models");
  //   console.log(res.data);
  //   if (res) {
  //     setResults(res.data);
  //     console.log(results);
  //   }


  // }, [])
  return (
    <Container>
      <HeaderComponent />
      <CardContainer />
    </Container>
  );
}

export default App;
