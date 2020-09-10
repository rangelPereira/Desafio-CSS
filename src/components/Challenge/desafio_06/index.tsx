import React from 'react';

import { 
  Container,
  Neon, 
  Title,
  Description,
  Button,
  ButtonArea,
} 
from './styles';

export const Titledesafio06: React.FC = () => {
  return(
    <Title>6º Desafio - 
      Efeito lightning text
    </Title>
  );
}

export const Infodesafio06: React.FC = () => {
  return(
    <Description>Este desafio usei o :nth-child() 
      para criar um pequeno delay em cada letra, 
      facendo assim que somente 1 fique colorida.
    </Description>
  );
}


export const Buton06: React.FC = () => {
  return(
    <ButtonArea>
      <Button href="#">GitHub</Button>
      <Button href="#">Linkedin</Button>
    </ButtonArea>
  );
}

const desafio06: React.FC = () => {
      return(
        <Container>
            <Neon>D</Neon> 
            <Neon>E</Neon> 
            <Neon>S</Neon> 
            <Neon>A</Neon> 
            <Neon>F</Neon> 
            <Neon>I</Neon> 
            <Neon>O</Neon> 
        </Container>
      );
  };

  export default desafio06;
