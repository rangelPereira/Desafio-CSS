import React from 'react';

import { 
  Load,
  Text,
  Title,
  Description,
  Button,
  ButtonArea,
} 
from './styles';

export const Titledesafio04: React.FC = () => {
  return(
    <Title>1º Desafio - 
      Redes sociais com animação ao passar o cursor
    </Title>
  );
}

export const Infodesafio04: React.FC = () => {
  return(
    <Description>Esse desafio para mim foi o mais complicado,
      ainda não tinha trabalhado com positions no começo foi um pouco complicado.
      Mas depois de ler a documentação ficou tudo muito simples.
    </Description>
  );
}


export const Buton04: React.FC = () => {
  return(
    <ButtonArea>
      <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">GitHub</Button>
      <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">Linkedin</Button>
    </ButtonArea>
  );
}

const desafio04: React.FC = () => {
  return(
          <Load>
                  <Text>Desafio 30 dias CSS</Text>
          </Load>
  );
};

export default desafio04;


