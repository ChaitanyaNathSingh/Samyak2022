import './Footer.css';
const Footer = () => {
    return (
        <div className="footer__container">
            <div className="container"></div>
        <footer>
          <section className="ft-main">
            <div className="ft-main-item">
              <h2 className="ft-title">About</h2>
              <ul>
                <li><a href="#0">Services</a></li>
                <li><a href="#0">Portfolio</a></li>
                <li><a href="#0">Pricing</a></li>
                <li><a href="#0">Customers</a></li>
                <li><a href="#0">Careers</a></li>
              </ul>
            </div>
            <div className="ft-main-item">
              <h2 className="ft-title">Resources</h2>
              <ul>
                <li><a href="#0">Docs</a></li>
                <li><a href="#0">Blog</a></li>
                <li><a href="#0">eBooks</a></li>
                <li><a href="#0">Webinars</a></li>
              </ul>
            </div>
            <div className="ft-main-item">
              <h2 className="ft-title">Stay Updated</h2>
              <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt='logo' height="150px" width="150px" />
              <h4>February 20 2022</h4>
            </div>
          </section>
        
          <section className="ft-social">
            <ul className="ft-social-list">
              
              <li><a href="#0"><i className="fa fa-facebook-f"></i></a></li>
              <li><a href="#0"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#0"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#0"><i className="fa fa-github"></i></a></li>
              <li><a href="#0"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#0"><i className="fa fa-youtube"></i></a></li>
            </ul>
          </section>
        
          <section className="ft-legal">
            <ul className="ft-legal-list">
              <li><a href="#0">Terms &amp; Conditions</a></li>
              <li><a href="#0">Privacy Policy</a></li>
              <li>&copy; 2022 Copyright Samyak 2022.</li>
            </ul>
          </section>
        </footer>
        </div>
    );
}

export default Footer;