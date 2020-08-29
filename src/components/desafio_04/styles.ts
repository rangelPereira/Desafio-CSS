import styled from 'styled-components';


export const Load = styled.div``;

export const Text = styled.button`
background:#1f1f1f;
    width: 200px;
    height: 60px;
    border: 4px solid;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    position: relative;


    ::before, ::after{
    content: "";
    position: absolute;
    width: 20px;
    height: 4px;
background:#1f1f1f;
    transform: skewX(60deg);
    transition: .4s linear;
    }
    ::before{
        top: -4px;
        left: 10%;
    }
    ::after{
        bottom: -4px;
        right: 10%;
    }
    :hover::before{
        left: 80%;
    }
    :hover::after{
        right: 80%;
    }
`;



