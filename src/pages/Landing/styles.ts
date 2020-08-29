import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    padding: 2rem 3rem;

`;

export const Title = styled.div`
    font-size:3rem;
`;

export const Info = styled.div`
    line-height:1.5rem;
    font-size:1.2rem;


`;


export const Linha = styled.div`
    margin-left:-0.5rem;
    padding: 2rem 0;

`;

export const Challenge = styled.div`
display:inline-block;
    width:100%;
    background: #1f1f1f;
    padding: 2rem;
    border-radius: 5px;
    margin: 0.5rem;

    @media(min-width:1100px){
        width:24%;
}

`;

export const ChallengeHead = styled.div`

    height: 15vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const ChallengeBody = styled.div`

`;

export const ChallengeTitle = styled.div`
    font-size:21px;
    padding: 10px 0;
    font-weight:bold;

`;

export const ChallengeInfo = styled.div`
    line-height:1.3rem;
`;




