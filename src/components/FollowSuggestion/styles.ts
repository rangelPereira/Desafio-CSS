import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    flex-direction: column;

    > div:first-child{
        min-height: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;
    }
`;

export const Info = styled.div`
    display: flex;
    font-size: 14px;

`;
export const Challenge = styled.div`
    background: #1f1f1f;
    padding: 2rem;
    border-radius: 5px;
    margin:  18px 0;
    justify-content: space-around;
    align-items:center;
    display: flex;
    height: 300px;

`;
