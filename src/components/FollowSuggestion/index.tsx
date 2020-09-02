import React from 'react';


import { 
    Container,
    Info,
    Challenge,
} from './styles';

interface Props {
    title?: React.ReactNode[];
    element:any;
    description?: React.ReactNode[];
    button?: React.ReactNode[];
}

const FollowSuggestion: React.FC<Props> = ({
    title, element, description, button
}) => {
    return(
        <Container>

            <div>
            <Info>
            <strong>{title}</strong>

            </Info>
            <Challenge>{element}</Challenge>
            
            <span>{description}</span>

            </div>

            {button}
        </Container>
    );
}

export default FollowSuggestion;