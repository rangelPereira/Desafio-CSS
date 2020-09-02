import React from 'react';

import { 
  Load,
  Text,
  Cont2,
  Cont3,
  Title,
  Description,
  Button,
  ButtonArea,
} 
from './styles';

export const Titledesafio03: React.FC = () => {
  return(
    <Title>1º Desafio - 
      Redes sociais com animação ao passar o cursor
    </Title>
  );
}

export const Infodesafio03: React.FC = () => {
  return(
    <Description>Esse desafio para mim foi o mais complicado,
      ainda não tinha trabalhado com positions no começo foi um pouco complicado.
      Mas depois de ler a documentação ficou tudo muito simples.
    </Description>
  );
}


export const Buton03: React.FC = () => {
  return(
    <ButtonArea>
      <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">GitHub</Button>
      <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">Linkedin</Button>
    </ButtonArea>
  );
}



const desafio03: React.FC = () => {
  return(
          <Load>
              <Cont2>
                  <Text>Letreiro rodando continuamente - Letreiro rodando continuamente  </Text>
              </Cont2>

                <Cont3>
                  <Cont2>
                  <Text>Letreiro rodando continuamente - Letreiro rodando continuamente  </Text>

                  </Cont2>
                </Cont3>

          </Load>   
  );
};

export default desafio03;


