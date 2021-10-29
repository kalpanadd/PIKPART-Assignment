import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Header = styled.div`
width:100%;
height:8vh;
display:flex;
align-items:center;
justify-content:space-around;
background-color:black;
color:white;
padding-bottom:5px;
`

function HeaderComponent() {
    return (
        <Header>
            <Link to="/"> <span style={{ fontSize: "3em", color: "wheat" }}>
                <i class="fas fa-motorcycle"></i>
            </span></Link>

            <h3>explore vehicles here</h3>
        </Header>
    )
}

export default HeaderComponent;
