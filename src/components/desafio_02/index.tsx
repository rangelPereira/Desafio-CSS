import React from 'react';

import { 
  Container,
  Load,
  Text,
  Loading,
} 
from './styles';

const desafio02: React.FC = () => {
  return(
      <Container>
          <Load>
            <Text> Loading...</Text>
            <Loading></Loading>
          </Load>
      </Container>        
  );
};

export default desafio02;


