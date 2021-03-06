import React from 'react'
import styled from 'styled-components'


const WrapperCompanyInfo=styled.div`
    //background: #E6343B;
    background: #000;
`; 

const CompanyName = styled.h3`
    margin: 0 0 1rem 0;
    text-align: center;
    color: #fff; 
    @media (min-width: 700px) {
        text-align: left; 
    }
`;

const WrapperList = styled.ul`
    list-style: none;
    margin:0 0 1rem 0;
    padding:0;
    text-align: center;
    color: #fff;
    
    @media (min-width: 700px) {
        text-align: left; 
    }
`;


const CompanyInfo = () => (
    <WrapperCompanyInfo>
        <CompanyName>Sample Company</CompanyName>
        <WrapperList>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </WrapperList>
    </WrapperCompanyInfo>
)

export default CompanyInfo