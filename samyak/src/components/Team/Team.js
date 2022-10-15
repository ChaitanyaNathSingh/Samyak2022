import styled from "styled-components";
import TeamContainer from "./TeamContainer";
import teamData from "./TeamData";
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";
const TeamSection = styled.div`
    background-color:black;
	min-height: 100vh;
	padding:70px 15px 30px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SectionTitle = styled.div`
  flex-basis: 100%;
  max-width: 100%;

  h1 {
    font-size: 40px;
    text-align: center;
    margin: 0;
    color: #ffffff;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    text-align: center;
    margin: 15px 0 0;
    color: #ffffff;
  }
`;

const Team = () => {
    return (
        <>
            <TeamSection>
                <br></br><br></br>
                <Row>
                    <SectionTitle>
                        <h1>Our Team</h1>
                        <hr />
                    </SectionTitle>
                </Row>
                <TeamContainer title="CHIEFS" data={teamData.CHIEFS}/>
                <TeamContainer title="CORE" data={teamData.CORES}/>
            </TeamSection>
            <SamyakFooter />
        </>   
    )
}

export default Team;


