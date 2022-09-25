import styled from "styled-components";
import SamyakLogo from './samyak_logo.png';

const FooterSection = styled.div`
    padding: 50px 0 0 0;
    background: #151414 !important;
    position: relative;
    color: black;
    border: 1px solid #151414;
`;

const FooterContent = styled.div`
    position: relative;
    z-index: 2;
    // & img {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     height: 330px;
    //     background-size: cover;
    //     background-position: 100% 100%;
    // }
`;
const FooterText = styled.div`
    p {
        margin-bottom: 14px;
        font-size: 14px;
        color: #7e7e7e;
        line-height: 28px;
    }
`;
const FooterLogo = styled.div`
    margin-bottom: 30px;
    a img {
        max-width: 200px;
    }
`;
const FooterSocialIcon = styled.div`
    span {
        color: #fff;
        display: block;
        font-size: 20px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
        margin-bottom: 20px;
    }
    a {
        color: #fff;
        font-size: 16px;
        margin-right: 15px;
    }
    i {
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 38px;
        border-radius: 50%;
    }
`;
const FooterWidgetHeading = styled.div`
    h3 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 40px;
        position: relative;
    }
    h3::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -15px;
        height: 2px;
        width: 50px;
        background: #ff5e14;
    }
`;
const FooterWidget = styled.div`
    ul li {
        display: inline-block;
        float: left;
        width: 50%;
        margin-bottom: 12px;
    }
    ul li a:hover {
        color: #ff5e14;
    }
    ul li a {
        color: #878787;
        text-transform: capitalize;
    }
`;

const CopyrightArea = styled.div`
    margin-top: 30px;
    background: #202020;
    padding: 25px 0;
    height: 74px;
    display: flex;
    align-items: center;
`;
const CopyrightText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    p {
        margin: 0;
        font-size: 14px;
        color: #878787;
        text-align: center;
        font-weight: bold;
        text-transform: none;
        padding: 0;
        letter-spacing: 1px;
    }
    p a {
        color: #ff5e14;
    }
`;
// const FooterMenu = styled.div`
//     ul li {
//         display: inline-block;
//         float: right;
//         margin-left: 30px;
//         margin-bottom: 12px;
//     }
//     ul li:hover a {
//         color: #ff5e14;
//     }
//     ul li a {
//         font-size: 14px;
//         color: #878787;
//     }
// `;
const FinalFooter = () => {
    return(
        <>
            <FooterSection class="footer-section">
                <div class="container">
                    <FooterContent class="footer-content pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <FooterLogo class="footer-logo">
                                <a href="index.html"><img src={SamyakLogo} class="img-fluid" alt="logo" /></a>
                            </FooterLogo>
                            <FooterText class="footer-text">
                                <p>The “Atīndriya” comes from the idea of bringing the technologies used in theories and implementing them wherever possible through various forms of advertising</p>
                            </FooterText>
                            <FooterSocialIcon class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#0"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#0"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#0"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </FooterSocialIcon>
                        </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <FooterWidget class="footer-widget">
                            <FooterWidgetHeading class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </FooterWidgetHeading>
                            <ul>
                                <li><a href="#0">Home</a></li>
                                <li><a href="#0">Events</a></li>
                                <li><a href="#0">Help</a></li>
                                <li><a href="#0">Gallery</a></li>
                                <li><a href="#0">About us</a></li>
                                <li><a href="#0">Login</a></li>
                                <li><a href="#0">Profile</a></li>
                                <li><a href="#0">Register</a></li>
                                <li><a href="#0">Sponsors</a></li>
                                <li><a href="#0">What's Happening</a></li>
                            </ul>
                        </FooterWidget>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <FooterWidget class="footer-widget">
                            <FooterWidgetHeading class="footer-widget-heading">
                                <h3>Mail us</h3>
                            </FooterWidgetHeading>
                            <FooterText class="footer-text mb-25">
                                <p>Offical : samyak@kluniversity.in</p>
                            </FooterText>
                            <FooterText class="footer-text mb-25">
                                <p>Information : info.samyak@kluniversity.in</p>
                            </FooterText>
                        </FooterWidget>
                        </div>
                    </div>
                    </FooterContent>
                </div>
                <CopyrightArea class="copyright-area">
                    <div class="container">
                    <div class="row">
                        {/* <div class="col-xl-6 col-lg-6 text-center text-lg-left"> */}
                            <CopyrightText class="copyright-text">
                                <p>Copyright &copy; 2022, All Right Reserved <a href="#0">SAMYAK</a></p>
                            </CopyrightText>
                        {/* </div> */}
                    </div>
                    </div>
                </CopyrightArea>
            </FooterSection>
        </>
    );
}

export default FinalFooter