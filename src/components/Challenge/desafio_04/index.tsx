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
    <Title>4º Desafio - 
      Botão com animação ao passar o cursor
    </Title>
  );
}

export const Infodesafio04: React.FC = () => {
  return(
    <Description>No 4º desafio foi usado o ::before e o ::after, 
      oque são seletores muito uteis! 
      Já usei bastente em meus freelas no Wordpress.
    </Description>
  );
}


export const Buton04: React.FC = () => {
  return(
    <ButtonArea>
      <Button href="#">GitHub</Button>
      <Button href="#">Linkedin</Button>
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


