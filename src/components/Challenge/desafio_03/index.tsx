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
    <Title>3º Desafio - 
      Letreiro continuo com mudança de cores
    </Title>
  );
}

export const Infodesafio03: React.FC = () => {
  return(
    <Description>Achei muito interessante como fazer isso, 
      ja tinha usado uma biblioteca em uma interface nunca tinha tentado 
      "fazer na unha" no começo pareceu algo bem complicado, 
      mas depois de entender a ideia saiu quase q naturalmente
    </Description>
  );
}


export const Buton03: React.FC = () => {
  return(
    <ButtonArea>
      <Button href="#">GitHub</Button>
      <Button href="#">Linkedin</Button>
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


