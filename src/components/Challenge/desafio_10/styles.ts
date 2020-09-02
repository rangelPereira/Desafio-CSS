import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size:36px;
`;

export const Love = styled.span`
    padding:0px;
    ::before {
    content: ' ';
    padding-left: 5px;
    animation: swith 5s infinite;
}

@keyframes swith{
    0% {content: ' - Codar - 💻'}

    50%{content: ' - Bacon - 🥓';}

    100%{content: ' - Games - 🎮';}
}
`;