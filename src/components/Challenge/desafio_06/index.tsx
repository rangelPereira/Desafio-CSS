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
    <Title>1º Desafio - 
      Redes sociais com animação ao passar o cursor
    </Title>
  );
}

export const Infodesafio06: React.FC = () => {
  return(
    <Description>Esse desafio para mim foi o mais complicado,
      ainda não tinha trabalhado com positions no começo foi um pouco complicado.
      Mas depois de ler a documentação ficou tudo muito simples.
    </Description>
  );
}


export const Buton06: React.FC = () => {
  return(
    <ButtonArea>
      <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">GitHub</Button>
      <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">Linkedin</Button>
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
