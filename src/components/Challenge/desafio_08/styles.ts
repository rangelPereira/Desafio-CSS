import styled from 'styled-components';
import { InfoTitle, InfoDescription, InfoButton, ButtonStyle } from '../../InfoStyle';

export const Title = styled(InfoTitle)``;
export const Description = styled(InfoDescription)``;
export const Button = styled(InfoButton)``;
export const ButtonArea = styled(ButtonStyle)``;


export const Container = styled.div``;

export const Heart = styled.div`
    width: 70px;
    height: 70px;
    background-color: #d82f2f;
    box-shadow: 0 0 10px #d82f2f;

    animation: pulseHeart 1.4s linear infinite;


    :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #d82f2f;
    box-shadow: 0 0 10px #d82f2f;

    transform: translateY(-50%);
    border-radius: 50%;
    }
    
    :after{
        content:'' ;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #d82f2f;
        box-shadow: 0 0 10px #d82f2f;

        transform: translateX(-50%);
        border-radius: 50%;
    }


    @keyframes pulseHeart
{
    0% {transform:  rotate(45deg) scale(1);}
    25% {transform:  rotate(45deg) scale(1);}
    30% {transform:  rotate(45deg) scale(1.2);}
    50% {transform:  rotate(45deg) scale(1.1);}
    70% {transform:  rotate(45deg) scale(1.2);}
    100% {transform:  rotate(45deg) scale(1);}
}
`;