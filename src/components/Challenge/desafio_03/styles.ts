import styled from 'styled-components';
import { InfoTitle, InfoDescription, InfoButton, ButtonStyle } from '../../InfoStyle';

export const Title = styled(InfoTitle)``;
export const Description = styled(InfoDescription)``;
export const Button = styled(InfoButton)``;
export const ButtonArea = styled(ButtonStyle)``;

export const Load = styled.div`
    width: 200px;
    height: 100px;
    background: #444;
    color: #000;

    position: relative;
    overflow:hidden;

`;

export const Text = styled.div``;


export const Cont2 = styled.div`

    top: 50%;

    font-size: 32px;
    white-space: nowrap;
    position: absolute;
    animation: animate2 10s linear infinite;


    @keyframes animate2
{
    0%
    {
        transform: translate(0, -50%);
    }
    100%
    {
        transform: translate(-50%, -50%);
    }
}

`;


export const Cont3 = styled.div`

    height: 100%;
    width: 50%;
    overflow: hidden;

    background: #222;

        position: absolute;
        color: #fff;

    
`;
