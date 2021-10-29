import React from 'react'
import styled from "styled-components";



const Card = styled.div`
width:20%;
height:50vh;
display:flex;
flex-direction:column;
justify-content:center;
border:2px solid black;
border-radius:8px;
padding:10px;
box-shadow:5px 5px 20px black;
margin:20px;
`
const Img = styled.img`
`
const CardContent = styled.div`
display:flex;
flex-direction:column;
`
const BtnDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const SubmitButton = styled.button`
padding:8px;
width:50%;
border-radius:5px;
margin-top:30px;
outline:none;
box-shadow:4px 4px 20px black;
cursor:pointer;

`

function CardContainer({ vehicleBrandId, name, vehicleType, engineCcId, relevance, imageUrl }) {
    return (
        <Card>
            <Img src={imageUrl ? imageUrl : ""} alt="image" />
            <CardContent>
                <span>Vehicle Brand Id:{vehicleBrandId}</span>
                <span>Name:{name}</span>
                <span>Vehicle Type:{vehicleType}</span>
                <span>Engine CCID:{engineCcId}</span>
            </CardContent>

            <BtnDiv>
                <SubmitButton>Submit</SubmitButton>
            </BtnDiv>
        </Card>


    )
}

export default CardContainer;
