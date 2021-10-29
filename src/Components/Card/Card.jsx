import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Card = styled.div`
width:20%;
height:53vh;
display:flex;
flex-direction:column;
border:2px solid black;
border-radius:8px;
padding:10px;
box-shadow:5px 5px 20px black;
margin:20px;
`
const Img = styled.img`
width:100%;
height:80%;
`
const NotImg = styled.div`
width:100%;
height:80%;
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
width:150%;
border-radius:5px;
margin-top:30px;
outline:none;
box-shadow:4px 4px 20px black;
cursor:pointer;
`




function CardContainer({ vehicleBrandId, name, vehicleType, engineCcId, relevance, imageUrl }) {

    return (
        <Card>
            {imageUrl == null ? <NotImg><h4>Image Not available you can uplaod</h4></NotImg>
                : <Img src={imageUrl} alt="image" />}
            <CardContent>

                <span><b>Vehicle Brand Id:</b>{vehicleBrandId}</span>
                <span><b>Name:</b>{name}</span>
                <span><b>Vehicle Type:</b>{vehicleType}</span>
                <span><b>Engine CCID:</b>{engineCcId}</span>
                <span><b>relevance:</b>{relevance}</span>
            </CardContent>

            <BtnDiv>
                <Link to='/update'>
                    <SubmitButton>Submit</SubmitButton>
                </Link>
            </BtnDiv>
        </Card>


    )
}

export default CardContainer;
