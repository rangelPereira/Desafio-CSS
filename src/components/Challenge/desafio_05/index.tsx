import React from 'react';
import {
    Container,
    Pulse,
    Title,
    Description,
    Button,
    ButtonArea,
  } 
  from './styles';
  
  export const Titledesafio05: React.FC = () => {
    return(
      <Title>5º Desafio - 
        Efeito de Pulsar
      </Title>
    );
  }
  
  export const Infodesafio05: React.FC = () => {
    return(
      <Description>Esse desafio foi mais uma brincadeira para 
        poder praticar antes de criar o coração(Desafio 08)
      </Description>
    );
  }
  
  
  export const Buton05: React.FC = () => {
    return(
      <ButtonArea>
        <Button href="#">GitHub</Button>
        <Button href="#">Linkedin</Button>
      </ButtonArea>
    );
  }

const desafio05: React.FC = () => {
    return(
        <Container>
            <Pulse>Pulse</Pulse>
        </Container>         
    );
  };
  
  export default desafio05;