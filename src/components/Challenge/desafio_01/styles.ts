import styled from 'styled-components';
import { InfoTitle, InfoDescription, InfoButton, ButtonStyle } from '../../InfoStyle';

export const Title = styled(InfoTitle)``;
export const Description = styled(InfoDescription)``;
export const Button = styled(InfoButton)``;
export const ButtonArea = styled(ButtonStyle)``;

export const Container2 = styled.div`
display:block;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    
    > div:nth-child(1)> a> span{
        background: #3b5999;
    }
    > div:nth-child(2)> a> span{
        background: #dd2b7b;
    }
    > div:nth-child(3)> a> span{
        background: #28a8e0;
    }

    @media(max-width: 360px){
        > div:nth-child(2){
            display:none;
    }    }

`;

export const Rede = styled.div`
    width:100px;
    border-radius:50%;

`;

export const Link = styled.a`
position:absolute;

    transform: rotate(-30deg) skew(25deg);

    >span img{
        border-radius:10px;
    }
    :hover >Span:nth-child(5){
        box-shadow: 0px 0px 3px #000;

    transform: translate(40px, -40px);
    opacity: 1;
    
    }
    :hover >Span:nth-child(4){
        box-shadow: 0px 0px 3px #000;

    transform: translate(30px, -30px);
    opacity: 0.8;
    }
    :hover >Span:nth-child(3){
        box-shadow: 0px 0px 3px #000;

    transform: translate(20px, -20px);
    opacity: 0.6;
    }
    :hover >Span:nth-child(2){
        box-shadow: 0px 0px 3px #000;

    transform: translate(10px, -10px);
    opacity: 0.5;
    }
    :hover >Span:nth-child(1){
        box-shadow: 0px 0px 3px #000;

    transform: translate(0px, -0px);
    opacity: 0.4;
    }

`;
export const Span = styled.span`
border-radius:10px;

position:absolute;
    height:50px;
    width:50px;
    transition: 0.8s;


`;

