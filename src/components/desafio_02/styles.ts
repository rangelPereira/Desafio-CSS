import styled from 'styled-components';


export const Container = styled.div`
    display: flex;

`;

export const Load = styled.div`
    display:flex;
    box-shadow: 0 0 5px rgba(255,7,7,.2);
    border-radius: 50%;
    width: 150px;
    height: 150px;
    justify-content:center;
    align-items:center;

`;

export const Text = styled.div`
    color: #c3c3c3;
    font-size: 16px;
    position: absolute;
`;

export const Loading = styled.div`

    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 5px 0px #d61313;

    background: transparent;
    animation: animate 1s linear infinite;



    @keyframes animate
{
    0%
    {
        transform: rotate(0deg);
    }
    100%
    {
        transform: rotate(360deg);
    }
}


`;

