// import HomePoster from "../Home/HomePoster";
import './AboutUs.css'
import samyakLogo from './SAMYAK_LOGO.png'
const AboutUs = () => {
    return (
        <div style={{ backgroundColor: '#46c0f0' }}>
            <div className="aboutus__container">
                <div className='navbar-cover'></div>
                <div className='about-inner-container'>
                    <div className='about-img'><img src='https://surabhi.web.app/static/media/kl_logo.5648b3c6.svg' alt='kllogo' style={{ width: '100%' }} /></div>
                    <div className='about-desc'>
                        <h1 className='about-title'>About KL</h1>
                        <p style={{ textAlign: 'justify' }}>
                        KL University is one of the most prestigious academic institutions in India with a supreme vision that it manifests in its exceptional operation. Recognized as Deemed to be University in 2009, the foundation achieved immense acclaim for its incredible success in turning students into eminent leaders and industry experts. Not only in the areas pertaining to academics, but also in those that guarantee students’ all-round development does the University truly excel. Students here find an environment that helps them to pursue their passions and flourish in the fields of their interest. With a wide array of opportunities available at their disposal, the student community is engaged in continuously broadening their horizons. 
                        </p></div>
                </div>
                <div className='about-divider'></div>
                <div className='about-inner-container'>
                    <div className='about-desc'>
                        <h1 className='about-title'>About SAMYAK '22</h1>
                        <p style={{ textAlign: 'justify' }}>
                        SAMYAK '22 is a national-level techno-management fest organized by the students of KL University. It is a two day festival filled with activities, events, workshops, student-performances that drive the students to experience the benevolence in being part of a synergy. The colors popping throughout, the theme-relevant artworks designed from scratch by the student teams, the elegance in student groups coming together after all the effort they put in until the day of the fest cannot be looked past. And 15, in the title, stands for the 15th make of the idea. A 15 year legacy, still burning bright and being passed down to the coming batches is a standing example of the camaraderie the students share even between the passing batches. It shows a great promise in terms of offering a unique experience to students through a plethora of events that strengthen their technical and all-round abilities. 
                        </p>
                    </div>
                    <div className='about-img'><img src={samyakLogo} style={{ width: '100%' }} alt="samyaklogo"/></div>
                </div>
                <div className='about-divider'></div>

            </div>
        </div>
    )
}

export default AboutUs;