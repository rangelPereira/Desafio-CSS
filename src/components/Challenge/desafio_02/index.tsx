import React from 'react';

import { 
  Container,
  Load,
  Text,
  Loading,
  Title,
  Description,
  Button,
  ButtonArea,
} 
from './styles';

export const Titledesafio02: React.FC = () => {
  return(
    <Title>2º Desafio
       - Load animado
    </Title>
  );
}

export const Infodesafio02: React.FC = () => {
  return(
    <Description>Esse desafio assim como o anterior também fiz uso 
      dos positions porem dessa vez foi bem mais facil. 
      Gostei bastante do resultado no final!
    </Description>
  );
}


export const Buton02: React.FC = () => {
  return(
    <ButtonArea>
      <Button href="#">GitHub</Button>
      <Button href="#">Linkedin</Button>
    </ButtonArea>
  );
}

const desafio02: React.FC = () => {
  return(
      <Container>
          <Load>
            <Text> Loading...</Text>
            <Loading></Loading>
          </Load>
      </Container>        
  );
};

export default desafio02;


