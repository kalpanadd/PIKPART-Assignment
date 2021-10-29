import React, { useState } from 'react';
import styled from 'styled-components';
import CardContainer from '../Card/Card';

const FormContainer = styled.div`
display:flex;
justify-content:space-around;
`
const FormBox = styled.div`
margin-top:3rem;
border:1px solid black;
height:30vh;
padding:20px;

`


function Form() {
    const [file, setFile] = useState("");
    const [success, setSuccess] = useState(false);


    function submitHandler(e) {
        e.preventDefault();
        setSuccess(true);

    }
    return (
        <FormContainer>
            <CardContainer />
            <FormBox>
                <form onSubmit={(e) => submitHandler(e)}>

                    <input type="file" onChange={(e) => setFile(e.target.value)} />
                    <input type="submit" value="upload" />

                </form>
                {success ? <h3>successfully uploaded the Image:{file}</h3> : ""}
            </FormBox>
        </FormContainer>

    )
}

export default Form;
