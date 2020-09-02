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
      <Title>1º Desafio - 
        Redes sociais com animação ao passar o cursor
      </Title>
    );
  }
  
  export const Infodesafio08: React.FC = () => {
    return(
      <Description>Esse desafio para mim foi o mais complicado,
        ainda não tinha trabalhado com positions no começo foi um pouco complicado.
        Mas depois de ler a documentação ficou tudo muito simples.
      </Description>
    );
  }
  
  
  export const Buton08: React.FC = () => {
    return(
      <ButtonArea>
        <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">GitHub</Button>
        <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">Linkedin</Button>
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