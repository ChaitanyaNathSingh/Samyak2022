import styled from "styled-components";
import { useEffect, useState } from "react";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import ProfileButton from "../UI/ProfileButton";

const MailContainer = styled.div`
    position: relative;
    height: auto;
    z-index: 0;
    background-color: black;

    width: 100%;
`;

const ProfileData = styled.div`
    height: auto;
    z-index: 2;
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width:1024px) {
        flex-direction: column;
    }
`;

const ProfileLeft = styled.div`
    border-radius: 7px;
    height: 550px;
    text-align: center;
    border: 2px solid #ffb41f;

    margin-left: 30px;
    margin-right: 30px;

    width: 30%;
    h2 {
        color: #ffb521;
        font-weight: 600;
        letter-spacing: 2px;
        opacity: 1;
        animation: opacity 1s ease-out .7s forwards;
        z-index: 12;
    }
    img {
        width: auto;
        height: auto;
        border-radius: 6px;
        margin-top: 20px;
        opacity: 1;
        animation: opacity 1s ease-out .3s forwards;
    }
    ul {
        margin: 3pc 0;
        opacity: 1;
        animation: opacity 1s ease-out .9s forwards;    
    }
    li {
        list-style-type: none;
    }
    ul li span {
        color: #ffb521;
        line-height: 60px;
        font-size: 20px;
        padding: 5px 20px;
        font-weight: 500;
        letter-spacing: 1px;
        text-decoration: none;
        font-family: 'Montserrat';
    }
    ul li span:hover {
        transition: .2s;
        border-radius: 4px;
        border: 2px solid #ffb521;
        cursor: pointer
    }
    @media only screen and (max-width:1024px) {
        width: auto;
        position: relative;
        left: 0;
        height: auto;
        margin-left: 15px;
        margin-right: 15px;
        h2 {
            font-size: 21px;
        }
        h1 {
            font-size: 24px;
        }
        img {
            height: 200px;
        }
    }
`;

const ProfileRight = styled.div`
    position: relative;
    z-index: 3;
    margin-right: 30px;
    @media only screen and (max-width:1024px) {
        width: auto;
        margin: auto;
    }
`;

const ProfileAccount = styled.div`
    border-radius: 7px;
    height: 550px;
    padding: 0 35px;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #686868;
    h1 {
        margin-top: 20px;
        font-weight: 600;
        letter-spacing: 1px;
        color: rgb(148, 148, 148);

        width: 100%;
    }
    span p {
        color: rgb(204, 204, 204);
        font-weight: 500;
        letter-spacing: 1px;
        font-family: 'Montserrat';
        font-size: 16px;
    }
    h2 {
        color: #ffb521;
        font-weight: 600;
        letter-spacing: .6px;
        font-size: 24px;
        font-family: 'Montserrat';
    }
    span {
        position: relative;
        width: 50%;
        opacity: 1;
        margin: 20px 0;
        animation: opacity 1s ease-out 1.3s forwards;
    }
    button {
        position: relative;
        outline: 0;
        color: #fff;
        font-size: 18px;
        padding: 5px 30px;
        border-radius: 3px;
        margin: auto;
        bottom: 10px;
        background: transparent;
        border: 2px solid #ffb521;
    }
    @media only screen and (max-width:1024px) {
        height: auto;
        padding-left: 12px;
        width: auto;
        margin: 15px;
        span {
            width: 100%;
            margin: 10px 0;
        }
        span p {
            font-size: 14px;
        }
        span h2 {
            font-size: 17px;
        }
        h1 {
            font-size: 22px;

            width: 100%;
        }
    }
`;

const PayButton = styled.a`
    color: black;
    font-weight: bold;
`;

const SamyakProfile = (props) => {
    let paidStatus = props.user?props.user.payment?(props.user.payment.payment_status).toString():"false":"false";
    let [samyakLogo, setSamyakLogo] = useState(null);
    let username = 'NA', name = 'NA', payment_status = false;
    if(props.user) {
        username = props.user.username;
        name = props.user.first_name+"%20"+props.user.last_name;
        payment_status = props.user.payment && props.user.payment.payment_status ? "PAID" : "NOT PAID";
    }
    useEffect(() => {
        setSamyakLogo('https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Username%20:%20'+username+'%0AFull%20Name%20:%20'+name+'%0APayment%20Status%20:%20'+payment_status+'&choe=UTF-8');
    }, [setSamyakLogo, username, name, payment_status]);


    return  (
        <>
            <MailContainer>
                <NavBarSpace />
                <NavBarSpace />
                <ProfileData>
                    <ProfileLeft>
                        <img src={samyakLogo} alt="" />
                        <h2>{props.user?props.user.username?props.user.username:'loading...':'loading...'}</h2>
                        <ul>
                            {props.user && props.user.payment && props.user.payment.payment_status ? null :
                            <ProfileButton  onClick={props.handlePayment} customStyle='x-y-z'>
                                <PayButton href="#0">Pay now</PayButton>
                            </ProfileButton>}
                            <li><span>{paidStatus === "true" ? "PAID" : "NOT PAID"}</span></li>
                            <li><span>Change Password</span></li>
                        </ul>
                    </ProfileLeft>
                    <ProfileRight>
                        <ProfileAccount id="account">
                            <span>
                                <p>FULL NAME :</p>
                                <h2>{props.user.first_name?(props.user.first_name +' '+ props.user.last_name):'loading...'}</h2>
                            </span>
                            <span>
                                <p>ID NUMBER :</p>
                                <h2>{props.user?props.user.username?props.user.username:'loading...':'loading...'}</h2>
                            </span>
                            <span>
                                <p>EMAIL :</p>
                                <h2>{props.user?props.user.email?props.user.email:'loading...':'loading...'}</h2>
                            </span>
                            <span>
                                <p>PHONE NUMBER :</p>
                                <h2>{ props.user?props.user.profile?props.user.profile.phone:'loading...':'loading...' }</h2>
                            </span>
                            <span>
                                <p>GENDER :</p>
                                <h2>{props.user?props.user.profile?props.user.profile.gender:'loading...':'loading...'}</h2>
                            </span>
                            <span>
                                <p>COLLEGE :</p>
                                <h2>{props.user?props.user.profile?props.user.profile.college_name:'loading...':'loading...'}</h2>
                            </span>
                            <span>
                                <p>DEPARTMENT :</p>
                                <h2>{ props.user?props.user.profile?props.user.profile.branch:'loading...':'loading...' }</h2>
                            </span>
                            <span>
                                <p>YEAR :</p>
                                <h2>{ props.user?props.user.profile?props.user.profile.year_of_study:'loading...':'loading...' }</h2>
                            </span>
                            <button onClick={props.toggleForm}>Edit</button>
                        </ProfileAccount>
                    </ProfileRight>
                </ProfileData>
                <NavBarSpace />
            </MailContainer>        
        </>
    );
}

export default SamyakProfile;