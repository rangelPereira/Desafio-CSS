import React from 'react';

import { 
  Load,
  Text,
  Cont2,
  Cont3,
} 
from './styles';

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


