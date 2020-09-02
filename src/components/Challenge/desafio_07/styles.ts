import styled from 'styled-components';
import { InfoTitle, InfoDescription, InfoButton, ButtonStyle } from '../../InfoStyle';

export const Title = styled(InfoTitle)``;
export const Description = styled(InfoDescription)``;
export const Button = styled(InfoButton)``;
export const ButtonArea = styled(ButtonStyle)``;

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

    width: 40px;
    height: 40px;
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
    0% {top: 0; left: 30%;}

    15% { top: 0; left: 60%;}

    25% { top: 0; left: 60%;}

    40% { top: 50%; left: 60%;}

    50% { top: 50%; left: 60%;}

    60% { top: 50% ; left: 30%;}

    75% { top: 50% ; left: 30%;}

    85% { top: 0; left: 30%;}

    100% { top: 0; left: 30%;}
}
`;