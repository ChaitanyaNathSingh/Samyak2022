import styled from 'styled-components';
import HomeHeading from '../UI/HomeHeading';
import HomeNavigateButton from '../UI/HomeNavigateButton';

const HomeSamyakData = styled.div`
    width: 95vw;
    padding: 7px;
    text-align: center;
    background: rgb(0, 0, 0,.1);
    backdrop-filter: blur(2px);
    margin: auto;
    p {
        color: #fff;
        line-height: 25px;
        letter-spacing: .6px;
        font-size: 14px;
        line-height: 24px;
    }
`;

const SamyakAbout = () => {
    return (
        <>
            <div class="home-samyak">
                <HomeHeading>ABOUT SAMYAK</HomeHeading>
                <HomeSamyakData>
                    <p>SAMYAK is a national-level techno-management fest organized by the students of KL University. It is a two- day festival filled with activities, events, workshops, and student performances that drive the students to experience the joy in being part of a synergy.The colours popping throughout, the theme-relevant artworks designed from scratch by the student teams, the elegance in student groups coming together after all the effort they put in until the day of the fest cannot be looked past.</p>
                </HomeSamyakData><br></br><br></br>
                <HomeHeading>ABOUT Atīndrīya - THE COSMIC CON</HomeHeading>
                <HomeSamyakData>
                    <p>The “Atīndriya” comes from the idea of bringing the technologies used in Fiction and implementing them wherever possible through various forms of advertising. Fiction is a world without bounds that can be explored endlessly in all the fictitious and non-fictitious aspects that exist.Not confining solely to the creative components of the real or fictional world alone, this time the theme also focuses on identifying and bringing into limelight all the technical areas that have been explored and that are yet to be explored in the aforementioned areas.</p><br></br>
                    <HomeNavigateButton>Read More</HomeNavigateButton>
                </HomeSamyakData>
                <br></br><br></br>
            </div>
        </>
    );
}

export default SamyakAbout;