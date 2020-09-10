import React from 'react';

import { 
    Container, 
    Load, 
    Title,
    Description,
    Button,
    ButtonArea,
  } 
  from './styles';
  
  export const Titledesafio09: React.FC = () => {
    return(
      <Title>9º Desafio - 
        Load animado Pendulo de Newton
      </Title>
    );
  }
  
  export const Infodesafio09: React.FC = () => {
    return(
      <Description>Esse até agora foi o mais interessante, 
        na criação foi usado 3 seletores :first-child, :last-child, :before.
      </Description>
    );
  }
  
  
  export const Buton09: React.FC = () => {
    return(
      <ButtonArea>
        <Button href="#">GitHub</Button>
        <Button href="#">Linkedin</Button>
      </ButtonArea>
    );
  }

const desafio_09: React.FC = () =>{
        return(
            <Container>
                <Load></Load>
                <Load></Load>
                <Load></Load>
                <Load></Load>
                <Load></Load>
            </Container>
        );
    };


export default desafio_09;