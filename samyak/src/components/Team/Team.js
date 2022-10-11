import styled from "styled-components";
import imgs from "./img1.jpg";
// import teamData from "./TeamData";
const TeamSection = styled.div`
    background-color:black;
	min-height: 100vh;
	padding:70px 15px 30px;
`;

const TeamContainer = styled.div`
    padding-top: 50px;
    max-width: 1170px;
	margin:auto;
`;

const Row = styled.div`
    display: flex;
	flex-wrap: wrap;
`;

const SectionTitle = styled.div`
    flex-basis: 100%;
	max-width: 100%;
	margin-bottom: 70px;

    h1{
        font-size: 40px;
        text-align: center;
        margin:0;
        color: #ffffff;
        font-weight: 700;
    }
    p{
        font-size:16px;
        text-align: center;
        margin:15px 0 0;
        color:#ffffff;
    }
`;

const TeamItems = styled.div`
    flex-basis: 100%;
	max-width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const TeamItem = styled.div`
    flex-basis: calc(25% - 30px);
    max-width: calc(25% - 30px);
    transition: all .5s ease;
    margin-bottom: 40px;

    img{
        display: block;
        width: 100%;
        border-radius: 8px;
    }
    .inner{
        position: relative;
        z-index: 11;
        padding:0 15px;
        .info {
            background-color:black;
            text-align: center;
            padding: 20px 15px;
            border-radius:8px;
            transition: all .5s ease;
            margin-top: -40px;
            h5{
                margin:0;
                font-size: 18px;
                font-weight: 600;
                color:#ffffff;
            }
            p{
                font-size: 16px;
                font-weight: 400;
                color:#c5c5c5;
                margin:10px 0 0;
            }
            .social-links{
	            padding-top: 15px;
                a{
                    display: inline-block;
                    height: 32px;
                    width: 32px;
                    background-color: #ffffff;
                    color:black;
                    border-radius: 50%;
                    margin:0 2px;
                    text-align: center;
                    line-height: 32px;
                    font-size:16px;
                    transition: all .5s ease;
                    &:hover{
                        box-shadow: 0 0 10px #000;
                    }

                }
            }
        }
    }
    &:hover{
        transform: translateY(-10px);	
        .info{
            transform: translateY(-20px);
        }
    }

    @media (max-width: 991px){
        flex-basis: calc(50% - 30px);
        max-width: calc(50% - 30px);
    }
    @media (max-width: 767px){
        flex-basis: calc(100%);
       max-width: calc(100%);
    }

`;


const Team = () => {
    return (
        <>
            <TeamSection>
                <TeamContainer>
                    <Row>
                        <SectionTitle>
                            <h1>Our Team</h1>
                            <hr/>
                        </SectionTitle>
                    </Row>
                    <Row>
                        <TeamItems>
                            <TeamItem>
                                <img src={imgs} alt="team-1" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>John Doe</h5>
                                        <p>CEO & Founder</p>
                                        <div className="social-links">
                                            <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#0"><i className="fab fa-twitter"></i></a>
                                            <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#0"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </TeamItem>
                            <TeamItem>
                                <img src={imgs} alt="team-1" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>John Doe</h5>
                                        <p>CEO & Founder</p>
                                        <div className="social-links">
                                            <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#0"><i className="fab fa-twitter"></i></a>
                                            <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#0"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </TeamItem>
                            <TeamItem>
                                <img src={imgs} alt="team-1" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>John Doe</h5>
                                        <p>CEO & Founder</p>
                                        <div className="social-links">
                                            <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#0"><i className="fab fa-twitter"></i></a>
                                            <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#0"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </TeamItem>
                            <TeamItem>
                                <img src={imgs} alt="team-1" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>John Doe</h5>
                                        <p>CEO & Founder</p>
                                        <div className="social-links">
                                            <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#0"><i className="fab fa-twitter"></i></a>
                                            <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#0"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </TeamItem>
                            <TeamItem>
                                <img src={imgs} alt="team-1" />
                                <div className="inner">
                                    <div className="info">
                                        <h5>John Doe</h5>
                                        <p>CEO & Founder</p>
                                        <div className="social-links">
                                            <a href="#0"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#0"><i className="fab fa-twitter"></i></a>
                                            <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#0"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </TeamItem>
                        </TeamItems>
                    </Row>
                </TeamContainer>
            </TeamSection>
        </>   
    )
}

export default Team;