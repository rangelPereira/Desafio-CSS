import React from 'react';
import Desafio01 from '../../components/desafio_01';
import Desafio02 from '../../components/desafio_02';
import Desafio03 from '../../components/desafio_03';
import Desafio04 from '../../components/desafio_04';
import Desafio05 from '../../components/desafio_05';
import Desafio06 from '../../components/desafio_06';
import Desafio07 from '../../components/desafio_07';
import Desafio08 from '../../components/desafio_08';
import Desafio09 from '../../components/desafio_09';
import Desafio10 from '../../components/desafio_10';

import { 
    Container,
    Title,
    Info,
    Linha,
    Challenge,
    ChallengeHead,
    ChallengeBody,
    ChallengeTitle,
    ChallengeInfo,
} from './styles';


const Repo: React.FC = () => {
    const challenges = [
        {
            key: Math.random(),
            title: '1º Desafio - Redes sociais com animação ao passar o cursor',
            info: 'Esse desafio para mim foi o mais complicado, ainda não tinha trabalhado com positions no começo foi um pouco complicado. Mas depois de ler a documentação ficou tudo muito simples. ',
            contentCha: <Desafio01 />,
        },
        {
            key: Math.random(),
            title: '2º Desafio - Load animado',
            info: 'Esse desafio assim como o anterior também fiz uso dos positions porem dessa vez foi bem mais facil. Gostei bastante do resultado no final',
            contentCha: <Desafio02 />,
        },
        {
            key: Math.random(),
            title: '3º Desafio - Letreiro continuo com mudança de cores',
            info: 'Achei muito interessante como fazer isso, ja tinha usado uma biblioteca em uma interface nunca tinha tentado "fazer na unha" no começo pareceu algo bem complicado, mas depois de entender a ideia saiu quase q naturalmente',
            contentCha: <Desafio03 />,
        },

        {
            key: Math.random(),
            title: '4º Desafio - Botão com animação ao passar o cursor',
            info: 'No 4º desafio foi usado o ::before e o ::after, oque são seletores muito uteis! Já usei bastente em meus freelas no Wordpress.',
            contentCha: <Desafio04 />,
        },
        {
            key: Math.random(),
            title: '5º Desafio - Efeito de Pulsar',
            info: 'Esse desafio foi mais uma brincadeira para poderpraticar antes de criar o coração(Desafio 08)',
            contentCha: <Desafio05 />,
        },
        {
            key: Math.random(),
            title: '6º Desafio - Efeito lightning text',
            info: 'Este desafio usei o :nth-child() para criar um pequeno delay em cada letra, facendoa ssim que somente 1 fique colorida.',
            contentCha: <Desafio06 />,
        },
        {
            key: Math.random(),
            title: '7º Desafio - Load animado com blocos',
            info: 'O desafio 07 foi usado novamente o :nth-child()  com delay, mas dessa vez usando blocos, gostei bastante do resultado final!',
            contentCha: <Desafio07 />,
        },
        {
            key: Math.random(),
            title: '8º Desafio - Coração Pulsando',
            info: 'Esse é quase uma continuação do desafio 05, nele foi usado os seletores o ::before e ::after, juntamente com os positions(Que a esse ponto ja tenho até intimidade rs)',
            contentCha: <Desafio08 />,
        },
        {
            key: Math.random(),
            title: '9º Desafio - Load animado Pendulo de Newton',
            info: 'Esse até agora foi o mais interessante, na criação foi usado 3 seletores :first-child, :last-child, :before.',
            contentCha: <Desafio09 />,
        },
        {
            key: Math.random(),
            title: '10º Desafio - Animação texto alternando',
            info: 'O desafio numero 10, foi usado um content vazio e atravez das animações é inserido o conteudo alternativo.',
            contentCha: <Desafio10 />,
        },
    ];

    return(
        <Container>
            <Title>Desafio 30 dias de CSS</Title>
            <Info>Criei aqui uma pequena interface onde estarei publicando o meu resultado dos desafios.
            Com o tempo pretendo ir acresentando algumas animações, afinal estou praticando 30 desafios de CSS</Info>    
            <Info>Esses desafios estão me agregando bastante conhecimento com CSS e pretendo usar nos meus proximos projetos muito do que vem sendo praticado aqui!</Info>   
            

            <Linha>
            {challenges.map((item, key) =>(
                <Challenge key={key}>
                    <ChallengeHead>
                        {item.contentCha}
                    </ChallengeHead>

                    <ChallengeBody>
                        <ChallengeTitle>{item.title}</ChallengeTitle>
                        <ChallengeInfo>{item.info}</ChallengeInfo>
                    </ChallengeBody>
                </Challenge>
            ))}



            </Linha>
  
      </Container>
    );
  }
  
  export default Repo;