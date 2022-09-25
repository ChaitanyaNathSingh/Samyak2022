import Logo from './img/SAMYAK_LOGOS/Logo.png';
import Edificio from './img/Events/EDIFICIO.png';
import FortuneSeeker from './img/Events/Fortune Seeker.png';
import Vogue1 from './img/Events/Vogue 1.png';

const SamyakHomeEvent = () => {
    return (
        <>
            <div class="home-events">
                <div class="home-events-heading">
                    <span class="common align">
                        <img src={Logo} alt="" />
                        <h1>EVENTS</h1>
                        <img src={Logo} alt="" />
                    </span>
                </div>
                <div class="home-events-data">
                    <div class="home-events-box" data-aos="zoom-out" data-aos-duration="500">
                        <img src={Edificio} alt="event" />
                        <h2>EDIFICIO</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur<br></br>adipisicing elit. Nemo sit debitis voluptate<br></br>explicabo qui error doloremque repellendus.</p>
                        <a href="#0">Register</a>
                    </div>
                    <div class="home-events-box" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200">
                        <img src={FortuneSeeker} alt="event" />
                        <h2>FORTUNE SEEKER</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur<br></br>adipisicing elit. Nemo sit debitis voluptate<br></br>explicabo qui error doloremque repellendus.</p>
                        <a href="#0">Register</a>
                    </div>
                    <div class="home-events-box" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="400">
                        <img src={Vogue1} alt="event" />
                        <h2>VOGUE</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur<br></br>adipisicing elit. Nemo sit debitis voluptate<br></br>explicabo qui error doloremque repellendus.</p>
                        <a href="#0">Register</a>
                    </div>
                    <div class="home-events-box" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="600">
                        <img src={Edificio} alt="event" />
                        <h2>EDIFICIO</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur<br></br>adipisicing elit. Nemo sit debitis voluptate<br></br>explicabo qui error doloremque repellendus.</p>
                        <a href="#0">Register</a>
                    </div>
                    <div class="home-events-box">
                        <img src={FortuneSeeker} alt="event" />
                        <h2>FORTUNE SEEKER</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur<br></br>adipisicing elit. Nemo sit debitis voluptate<br></br>explicabo qui error doloremque repellendus.</p>
                        <a href="#0">Register</a>
                    </div>
                </div>
                <div class="more-events common">
                    <a href="#0">More Events</a>
                </div>
            </div>
        </>
    )
}

export default SamyakHomeEvent;