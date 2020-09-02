import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Item = styled.div`
    display: inline-block;
    width:100%;
    margin:10px;
    background: #272727;
    border-radius: 14px;
    overflow: hidden;

    @media(min-width: 1280px){
        width:32%;
    }

`;

export const Card = styled.div`
`;