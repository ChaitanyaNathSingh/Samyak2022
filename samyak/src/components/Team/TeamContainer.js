import styled from "styled-components";
import TeamCard from "./TeamCard";
const Container = styled.div`
  padding-top: 50px;
  max-width: 1170px;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SectionTitle = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  margin-bottom: 70px;

  h2 {
    font-size: 40px;
    text-align: center;
    margin: 0;
    margin-bottom: -30px;
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

const TeamItems = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TeamContainer = (props) => {
  return (
    <>
      <Container>
        <Row><SectionTitle><h2>{props.title}</h2></SectionTitle></Row>
        <Row>
          <TeamItems>
            {props.data?.map((item) => (
              <TeamCard
                key={item.id}
                name={item.name}
                designation={item.designation}
                image={item.image}
                facebook={item.facebook}
                twitter={item.twitter}
                linkedin={item.linkedin}
                instagram={item.instagram}
              />))}
          </TeamItems>
        </Row>
      </Container>
    </>
  );
};

export default TeamContainer;

