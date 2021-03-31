// import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    //background: #01bf71;
    background: #000;
    border: 0; 
    color: #fff; 
    padding: 1em; 
    text-transform: uppercase; 
    width: 100%;
    
    &:hover, &:focus {
        background: #01bf71;
        color: #fff; 
        outline: 0; 
        transition: background-color 0.5s ease-out; 
    }
    
`; 

export default StyledButton