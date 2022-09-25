import styled from "styled-components";
import NavBarSpace from "../BaseComponents/NavBarSpace";

import Logo from '../Home/img/SAMYAK_LOGOS/Logo.png';
import FaceLogo from './payment_status/Samyak Face logo.svg'
import RowRecord from "./RowRecord";

const DisplayContainer = styled.div`
    background-color: #28282B;
`;

// const ProfileContainer = styled.div`
//     width: 90vw;
//     margin: auto;
//     padding: 20px;
//     background-color: #0d0a0b;
//     background-image: linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%);
//     border-radius: 20px;
//     border: 2px solid #009fc2;
// `;

const ProfileHeading = styled.div`
    display: flex;
    justify-content: center;
    h1 {
        color: #cf9a2e;
        font-weight: 700;
        letter-spacing: 2px;
        margin: 0;
    }
    span img {
        width: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    @media only screen and (max-width: 1024px) {
        h1 {
            font-size: 4vw;
            text-align: center;
            margin-top: -10px;
        }
        span img {
            width: 100px;
        }
        span {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
`;


// const ProfileLeft = styled.div`
//     border-radius: 7px;
//     height: 550px;
//     text-align: center;
//     border: 2px solid #ffb41f;
//     h2 {
//         color: #ffb521;
//         font-weight: 600;
//         letter-spacing: 2px;
//         opacity: 0;
//         animation: opacity 1s ease-out .7s forwards;
//     }
//     img {
//         width: 100%;
//         height: 260px;
//         opacity: 0;
//         animation: opacity 1s ease-out .3s forwards;
//     }
//     ul {
//         margin: 3pc 0;
//         opacity: 0;
//         animation: opacity 1s ease-out .9s forwards;
//     }
//     ul li {
//         list-style-type: none;
//     }
//     ul li a {
//         color: #ffb521;
//         line-height: 60px;
//         font-size: 20px;
//         padding: 5px 20px;
//         font-weight: 500;
//         letter-spacing: 1px;
//         text-decoration: none;
//     }
//     ul li a:hover {
//         transition: .2s;
//         border-radius: 4px;
//         border: 2px solid #ffb521;
//     }
//     @media only screen and (max-width: 1024px) {
//         width: 100%;
//         position: relative;
//         left: 0;
//         height: auto;
//         width: 90%;
//         margin: auto;
//         h2 {
//             font-size: 21px;
//         }
//         h1 {
//             font-size: 24px;
//         }
//         img {
//             height: 200px;
//         }
//     }
// `;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GridContainer = styled.div`
    display: grid;
    width: 90vw;
    grid-template-columns: 300px 10fr;
    color: white;
`;

const ProfileLeft = styled.div`
    border-left: 2px solid red;
    border-top: 2px solid red;
    border-bottom: 2px solid red;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
    transform: translateX(6px);
    background-color: #343434;
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(-6px);
    }
    div img {
        width: 250px;
        height: 250px;
    }
`;
const ProfileRight = styled.div`
    border-radius: 13px;
    border: 2px solid red;
    transform: translateX(-6px);
    background-color: #171717;
    box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
        font-size: 20px;
        color: #cf9a2e;
        padding: 10px 15px;
        margin: 10px 0;
    }
`;

const DisplayDetails = () => {
    return (
        <>
            <DisplayContainer>
                <NavBarSpace /> <br></br>
                <ProfileHeading>
                    <span>
                        <img src={Logo} alt="logo" />
                        <h1>PROFILE</h1>
                        <img src={Logo} alt="logo" />
                    </span>
                </ProfileHeading>
                <ProfileContainer>
                    <GridContainer>
                        <ProfileLeft className="profile__left">
                            <div>
                                <img src={FaceLogo} alt="profile" />
                            </div>
                            <div><span>@hasanprakash</span></div>
                            <div><span>PAID</span></div>
                            <div><span>Last Login - 25th Sep 2022</span></div>
                        </ProfileLeft>
                        <ProfileRight className="profile__right">
                            <RowRecord keyName="Name : " value="Hasan Prakash" />
                            <RowRecord keyName="College Name :" value="Indian Institute of Technology, Kharagpur" />
                            <RowRecord keyName="College Email :" value="hasanchadaram888@gmail.com" />
                            <RowRecord keyName="Phone Number :" value="9876543210" />
                            <RowRecord keyName="Gender :" value="Male" />
                            <RowRecord keyName="Year Of Study : " value="4th" />
                            <RowRecord keyName="Department : " value="CSE" />
                        </ProfileRight>
                        {/* <ProfileLeft class="profile-left col-25">
                            <img src={FaceLogo} alt="facelogo" />
                            <h2>190040178</h2>
                            <ul>
                                <li><a href="#account">Account</a></li>
                                <li><a href="#stats">Statistics</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </ProfileLeft> */}
                    </GridContainer>
                </ProfileContainer>
                <NavBarSpace />
            </DisplayContainer>
        </>
    );
}

export default DisplayDetails;