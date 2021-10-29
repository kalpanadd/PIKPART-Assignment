import React from 'react';
import styled from 'styled-components';

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
            <span style={{ fontSize: "3em" }}>
                <i class="fas fa-motorcycle"></i>
            </span>

            <h3>explore vehicles here</h3>
        </Header>
    )
}

export default HeaderComponent;
