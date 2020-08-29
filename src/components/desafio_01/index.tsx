import React from 'react';
import face from '../../styles/images/face.png';
import insta from '../../styles/images/insta.png';
import twitter from '../../styles/images/twitter.png';

import { 
  Container2,
  Container,
  Link,
  Span,
  Rede,
} 
from './styles';




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




