import styled from 'styled-components';
import { InfoTitle, InfoDescription, InfoButton, ButtonStyle } from '../../InfoStyle';

export const Title = styled(InfoTitle)``;
export const Description = styled(InfoDescription)``;
export const Button = styled(InfoButton)``;
export const ButtonArea = styled(ButtonStyle)``;

export const Container = styled.div`
`;

export const Pulse = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;

    width: 120px;
    height: 120px;
    background: #585858;
    border-radius: 50%;
    color: #fff;

    animation: pulse 4s linear infinite;


    @keyframes pulse
{
    0%
    {
        box-shadow: 0 0 0 0 rgba(95, 93, 93, 0.9);
    }
    40%
    {
        box-shadow: 0 0 0 30px rgba(95, 93, 93, 0);
    }
    80%
    {
        box-shadow: 0 0 0 40px rgba(95, 93, 93, 0);
    }
    100%
    {
        box-shadow: 0 0 0 0 rgba(95, 93, 93, 0);
    }
}

`;