import React from 'react';

import Feed from '../../components/Feed';
import FollowSuggestion from '../../components/FollowSuggestion';

import Desafio01, { Titledesafio01, Infodesafio01, Buton01 } from '../../components/Challenge/desafio_01';
import Desafio02, { Titledesafio02, Infodesafio02, Buton02 } from '../../components/Challenge/desafio_02';
import Desafio03, { Titledesafio03, Infodesafio03, Buton03 } from '../../components/Challenge/desafio_03';
import Desafio04, { Titledesafio04, Infodesafio04, Buton04 } from '../../components/Challenge/desafio_04';
import Desafio05, { Titledesafio05, Infodesafio05, Buton05 } from '../../components/Challenge/desafio_05';
import Desafio06, { Titledesafio06, Infodesafio06, Buton06 } from '../../components/Challenge/desafio_06';
import Desafio07, { Titledesafio07, Infodesafio07, Buton07 } from '../../components/Challenge/desafio_07';
import Desafio08, { Titledesafio08, Infodesafio08, Buton08 } from '../../components/Challenge/desafio_08';
import Desafio09, { Titledesafio09, Infodesafio09, Buton09 } from '../../components/Challenge/desafio_09';


import { 
    Container,
    Title,
    Info,
    Linha,
} from './styles';



const Repo: React.FC = () => {
    return(
        <Container>
            <Title>Desafio 30 dias de CSS</Title>
            <Info>Criei aqui uma pequena interface onde estarei publicando o meu resultado dos desafios.
            Com o tempo pretendo ir acresentando algumas animações, afinal estou praticando 30 desafios de CSS</Info>    
            <Info>Esses desafios estão me agregando bastante conhecimento com CSS e pretendo usar nos meus proximos projetos muito do que vem sendo praticado aqui!</Info>   
            

            <Linha>
            <Feed 
                    elements={[
                        <FollowSuggestion 
                            title={[
                            <Titledesafio01/>,
                            ]}
                            element={[
                                <Desafio01 />,
                            ]}
                            description={[
                                <Infodesafio01 />,
                            ]}
                            button={[
                                <Buton01 />
                            ]}
                        />,
                        <FollowSuggestion 
                            title={[
                            <Titledesafio02/>,
                            ]}
                            element={[
                                <Desafio02 />,
                            ]}
                            description={[
                                <Infodesafio02 />,
                            ]}
                            button={[
                                <Buton02 />
                            ]}
                        />,

                        <FollowSuggestion 
                            title={[
                            <Titledesafio03/>,
                            ]}
                            element={[
                                <Desafio03 />,
                            ]}
                            description={[
                                <Infodesafio03 />,
                            ]}
                            button={[
                                <Buton03 />
                            ]}
                        />,

                        <FollowSuggestion 
                            title={[
                            <Titledesafio04/>,
                            ]}
                            element={[
                                <Desafio04 />,
                            ]}
                            description={[
                                <Infodesafio04 />,
                            ]}
                            button={[
                                <Buton04 />
                            ]}
                        />,

                        <FollowSuggestion 
                            title={[
                            <Titledesafio05/>,
                            ]}
                            element={[
                                <Desafio05 />,
                            ]}
                            description={[
                                <Infodesafio05 />,
                            ]}
                            button={[
                                <Buton05 />
                            ]}
                        />,

                        <FollowSuggestion 
                            title={[
                            <Titledesafio06/>,
                            ]}
                            element={[
                                <Desafio06 />,
                            ]}
                            description={[
                                <Infodesafio06 />,
                            ]}
                            button={[
                                <Buton06 />
                            ]}
                        />,

                        <FollowSuggestion 
                            title={[
                            <Titledesafio07/>,
                            ]}
                            element={[
                                <Desafio07 />,
                            ]}
                            description={[
                                <Infodesafio07 />,
                            ]}
                            button={[
                                <Buton07 />
                            ]}
                        />,

                        <FollowSuggestion 
                            title={[
                            <Titledesafio08/>,
                            ]}
                            element={[
                                <Desafio08 />,
                            ]}
                            description={[
                                <Infodesafio08 />,
                            ]}
                            button={[
                                <Buton08 />
                            ]}
                        />,

                        <FollowSuggestion 
                            title={[
                            <Titledesafio09/>,
                            ]}
                            element={[
                                <Desafio09 />,
                            ]}
                            description={[
                                <Infodesafio09 />,
                            ]}
                            button={[
                                <Buton09 />
                            ]}
                        />,
                    ]}
                />

                
            </Linha>
  
      </Container>
    );
  }
  
  export default Repo;