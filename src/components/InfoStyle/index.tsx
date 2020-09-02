import styled from 'styled-components';


export const InfoTitle = styled.div`
    font-size: 28px;
    min-height: 70px; 
`; 

export const InfoDescription = styled.div`
    font-size: 16px;    
`;

export const InfoButton = styled.a`
    height:70px;
    width: 100%;
    background: #191818;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:#fff;

    &:first-child{
        border-right:2px solid #111;
    }

    :hover{
        transition: all 0.5s;
        background: #111;

    }

`;

export const ButtonStyle = styled.div`
    display:flex;
    width: 100%;

`;



