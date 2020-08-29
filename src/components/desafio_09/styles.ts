import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    border-top: 3px solid #fff;
    margin-bottom:30px;
`;

export const Load = styled.div`
	display: block;
	width: 3px;
	height: 150px;
	background-color: #fff;
	margin: 0 20px;
	position: relative;
	transform-origin: top;

    :before {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #fff;
	transform: translateX(-50%);
    }

    :first-child {
        animation: left-pen 2s ease-in infinite;
    }

    :last-child {
        animation: right-pen 2s ease-in infinite 1s;
    }

    @keyframes left-pen {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(40deg); }
        50% { transform: rotate(0deg); }
        100% { transform: rotate(0deg); }
    }

    @keyframes right-pen {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(-40deg); }
        50% { transform: rotate(0deg); }
        100% { transform: rotate(0deg); }
    }
`;