import React from 'react';
import face from '../../../styles/images/face.png';
import insta from '../../../styles/images/insta.png';
import twitter from '../../../styles/images/twitter.png';

import { 
  Container2,
  Container,
  Link,
  Span,
  Rede,
  Title,
  Description,
  Button,
  ButtonArea,
} 
from './styles';

export const Titledesafio01: React.FC = () => {
  return(
    <Title>1º Desafio - 
      Redes sociais com animação ao passar o cursor
    </Title>
  );
}

export const Infodesafio01: React.FC = () => {
  return(
    <Description>Esse desafio para mim foi o mais complicado,
      ainda não tinha trabalhado com positions no começo foi um pouco complicado.
      Mas depois de ler a documentação ficou tudo muito simples.
    </Description>
  );
}


export const Buton01: React.FC = () => {
  return(
    <ButtonArea>
      <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">GitHub</Button>
      <Button href="https://www.youtube.com/watch?v=vpq7MlBqssA">Linkedin</Button>
    </ButtonArea>
  );
}



const desafio01: React.FC = () => {
  return(
          <Container2>
              <Container>
                  <Rede>
                    <Link href="#">
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span>
                        <img src={face} alt="imagem 01" width="50px" height="50px"/>
                        </Span>
                    </Link>
                  </Rede>
              
                  <Rede>
                    <Link href="#">
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span>
                        <img src={insta} alt="imagem 01" width="50px" height="50px"/>
                        </Span>
                    </Link>
                  </Rede>

                  <Rede>
                    <Link href="#">
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span>
                        <img src={twitter} alt="imagem 01" width="50px" height="50px"/>
                        </Span>
                    </Link>
                  </Rede>
              </Container>
          </Container2>
  );
};

export default desafio01;

