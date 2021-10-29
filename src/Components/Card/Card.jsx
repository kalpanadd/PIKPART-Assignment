import React from 'react'
import styled from "styled-components";

const VehicleContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
height:92vh;
width:100%;
display:flex;
align-items:centr;
`

const Card = styled.div`
display:flex;
flex-direction:column;
width:25%;
height:70%;
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
export default function CardContainer() {
    return (
        <VehicleContainer>
            <Card>
                <Img src={""} alt="image" />

                <span>Vehicle Brand Id:</span>
                <span>Name:</span>
                <span>Vehicle Type:</span>
                <span>Engine CCID:</span>

            </Card>

            <Card>
                <Img src={""} alt="image" />

                <span>Vehicle Brand Id:</span>
                <span>Name:</span>
                <span>Vehicle Type:</span>
                <span>Engine CCID:</span>

            </Card>

            <Card>
                <Img src={""} alt="image" />

                <span>Vehicle Brand Id:</span>
                <span>Name:</span>
                <span>Vehicle Type:</span>
                <span>Engine CCID:</span>

            </Card>

            <Card>
                <Img src={""} alt="image" />

                <span>Vehicle Brand Id:</span>
                <span>Name:</span>
                <span>Vehicle Type:</span>
                <span>Engine CCID:</span>

            </Card>

            <Card>
                <Img src={""} alt="image" />

                <span>Vehicle Brand Id:</span>
                <span>Name:</span>
                <span>Vehicle Type:</span>
                <span>Engine CCID:</span>

            </Card>

            <Card>
                <Img src={""} alt="image" />

                <span>Vehicle Brand Id:</span>
                <span>Name:</span>
                <span>Vehicle Type:</span>
                <span>Engine CCID:</span>

            </Card>

            <Card>
                <Img src={""} alt="image" />

                <span>Vehicle Brand Id:</span>
                <span>Name:</span>
                <span>Vehicle Type:</span>
                <span>Engine CCID:</span>

            </Card>

            <Card>
                <Img src={""} alt="image" />

                <span>Vehicle Brand Id:</span>
                <span>Name:</span>
                <span>Vehicle Type:</span>
                <span>Engine CCID:</span>

            </Card>

            <Card>
                <Img src={""} alt="image" />

                <span>Vehicle Brand Id:</span>
                <span>Name:</span>
                <span>Vehicle Type:</span>
                <span>Engine CCID:</span>

            </Card>
        </VehicleContainer>
    )
}
