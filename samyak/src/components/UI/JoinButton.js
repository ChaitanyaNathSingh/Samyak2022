import styled from "styled-components";

const LoginButton = styled.button`
    color: white;
    background-color: #5f2d13;
    margin: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
    box-shadow:0px 0px 0px 2px white inset;
    border: 0px solid black;
    &:hover {
        background-color: #5f2d13;
        box-shadow:0px 0px 0px 2px black inset;
    }
`;

// const RegisterButton = styled.button`
//     color: black;
//     background-color: white;
//     margin: 10px;
//     padding: 5px 15px;
//     border-radius: 5px;
//     border: 0px solid white;
//     transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
//     &:hover {
//         // background-color: black;
//         // color: white;
//         opacity: 0.6;

//     }
// `;

const RegisterButton = styled.button`
    width: 100px;
    height: 38px;
    margin: 10px;
    border: none;
    outline: none;
    color: black;
    // background: #111;
    background-color: white;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 5px;

    &:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #5370FF, #E5ADFF, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }

    &:active {
        color: #000;
    }

    &:active:after {
        background: transparent;
    }

    &:hover:before {
        opacity: 1;
    }

    &:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }
`

export { LoginButton, RegisterButton };