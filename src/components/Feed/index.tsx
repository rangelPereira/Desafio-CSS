import React from 'react';

import { 
    Container,
    Card,
    Item,
} from './styles';


interface Props {
    elements: React.ReactNode[];
}


const Feed: React.FC<Props> = ({
    elements
}) => {
    return(
        <Container>
            <Card>
                {elements.map((element,index) => (
                    <Item key={index}>{element}</Item>
                ))}
            </Card>
        </Container>
    );
  }
  
  export default Feed;