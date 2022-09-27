import styled from 'styled-components';
import NeonBg from './img/SAMYAK_LOGOS/NeonBg1.jpg';
import BlueLogo from './img/SAMYAK_LOGOS/BlueLogo.png';


const ParentLogo = styled.div`
    position: relative;
    top: 0;
    left: 0;
    height: 113vh;
    img:nth-child(1) { // parent
        width: 100%;
        // height: 100%;
        object-fit: cover;
        height: 100vh;
    }
    img:nth-child(2) { // child
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: white;
        width: 1400px;
        height: auto;

        margin-left: -17.5px;
        margin-top: -55px;
    }
    @media only screen and (max-width: 1024px) {
        height: 100vh;
        img:nth-child(2) {
            width: 1200px;
        }
    }
`;

const NewEveningPoster = () => {
    return (
        <>
            <ParentLogo>
                <img src={NeonBg} alt="Buildings" />
                <img src={BlueLogo} alt="logo" />
            </ParentLogo>
        </>
    );
}

export default NewEveningPoster;