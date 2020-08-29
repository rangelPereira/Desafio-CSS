import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;

`;
export const Load = styled.div`
    position:absolute;
    top: 0; 
    left: 40%;

    width: 50px;
    height: 50px;
    background-color:#fff;
    border-radius: 4px;
    animation: load2 2s linear infinite;

    :nth-child(2)
    {
        animation-delay: 0.7s;
    }
    :nth-child(1)
    {
        animation-delay: 1.4s;
    }


    @keyframes load2
{
    0% {top: 0; left: 40%;}

    15% { top: 0; left: 60%;}

    25% { top: 0; left: 60%;}

    40% { top: 50%; left: 60%;}

    50% { top: 50%; left: 60%;}

    60% { top: 50% ; left: 40%;}

    75% { top: 50% ; left: 40%;}

    85% { top: 0; left: 40%;}

    100% { top: 0; left: 40%;}
}
`;