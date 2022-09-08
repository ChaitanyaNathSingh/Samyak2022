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
                            The K L college of engineering has attained autonomous status in the year 2006 and in February 2009, the Koneru Lakshmaiah Education Foundation Society was recognised as Deemed to be University. In short Koneru Lakshmaiah Education Foundation is named as K L (Deemed to be) university.
                            <br />
                            K L (Deemed to be) university has been awarded the Highest-grade A++ by NAAC. It has been approved by all India Council for technical Education, New Delhi.
                            <br />
                            A State-of-the-art Data centre with advanced servers provides highly interactive learning environment with full-fledged hardware and software training facilities.
                        </p></div>
                </div>
                <div className='about-divider'></div>
                <div className='about-inner-container'>
                    <div className='about-desc'>
                        <h1 className='about-title'>About SAMYAK</h1>
                        <p style={{ textAlign: 'justify' }}>
                            SAMYAK is Andhra Pradesh's largest techno-management fest, attracting students from all around the country. This two-day festival, filled with colour and fun, fills the skies with delight and amusement. It teaches social responsibility as well as technical expertise. After a cultural spectacle, one may view the dawn beautified with activities kicking off with astonishment and fervour. This festival, which is already thirteen years old, is prepared to enthral and enchant with all of its renown. The 14th edition of K L's National Level Techno-Management Fest SAMYAK'22 is being organised by K L (Deemed to be University).
                            <br />
                            SAMYAK is one of the largest National Level Techno-Management fests in Andhra Pradesh, attracting 30,000 students from all over the country and featuring events that aim to inspire and empower. Not only that, but we have some outstanding performances to enthral and amuse on the event days, as well as numerous events and cultural activities. However, we have given the concept a lot of attention and have planned ahead of time in order to execute it in our university for SAMYAK. We have made enormous efforts to attract and enlighten every person attracted into this fair, not merely for amusement, but also for knowledge and innovation.
                            <br />
                            In the previous year’s SAMYAK was a huge success and we strive even more vigorously to make it much more welcomed. SAMYAK 20-21 was a huge success with num+ registrations and a footfall of around num.
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