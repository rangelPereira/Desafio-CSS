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
  
  export const Titledesafio07: React.FC = () => {
    return(
      <Title>7º Desafio - 
        Load animado com blocos
      </Title>
    );
  }
  
  export const Infodesafio07: React.FC = () => {
    return(
      <Description>O desafio 07 foi usado novamente o :nth-child() com delay, 
        mas dessa vez usando blocos, gostei bastante do resultado final!
      </Description>
    );
  }
  
  
  export const Buton07: React.FC = () => {
    return(
      <ButtonArea>
        <Button href="#">GitHub</Button>
        <Button href="#">Linkedin</Button>
      </ButtonArea>
    );
  }

const desafio_07: React.FC = () =>{
        return(
            <Container>
                <Load></Load>
                <Load></Load>
                <Load></Load>
            </Container>
        );
    };


export default desafio_07;