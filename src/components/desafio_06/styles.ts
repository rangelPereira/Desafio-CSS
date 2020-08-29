import styled from 'styled-components';

export const Container = styled.div`
    display: flex;


`;

export const Neon = styled.div`
    color: #333;
    padding:5px;
    font-size: 2rem;
    animation: lighting 2s linear infinite;

    @keyframes lighting 
{
	0% {
		color: #333;
		text-shadow: none;
	}

	90% {
		color: #333;
		text-shadow: none;
	}

	100% {
		color: #fff900;
        text-shadow: 0 0 7px #fff900;

	}




}


    :nth-child(1) {
        animation-delay: 0s;
    }
    :nth-child(2) {
        animation-delay: 0.2s;
    }
    :nth-child(3) {
        animation-delay: 0.4s;
    }
    :nth-child(4) {
        animation-delay: 0.6s;
    }
    :nth-child(5) {
        animation-delay: 0.8s;
    }
    :nth-child(6) {
        animation-delay: 1s;
    }
    :nth-child(7) {
        animation-delay: 1.2s;
    }
`;