import React from 'react';

import { 
    Container, 
    Heart, 
    Title,
    Description,
    Button,
    ButtonArea,
  } 
  from './styles';
  
  export const Titledesafio08: React.FC = () => {
    return(
      <Title>8º Desafio - 
        Coração Pulsando
      </Title>
    );
  }
  
  export const Infodesafio08: React.FC = () => {
    return(
      <Description>Esse é quase uma continuação do desafio 05, 
        nele foi usado os seletores o ::before e ::after, 
        juntamente com os positions.
      </Description>
    );
  }
  
  
  export const Buton08: React.FC = () => {
    return(
      <ButtonArea>
        <Button href="#">GitHub</Button>
        <Button href="#">Linkedin</Button>
      </ButtonArea>
    );
  }

const desafio_08: React.FC = () =>{
        return(
            <Container>
                <Heart></Heart>
            </Container>
        );
    };


export default desafio_08;