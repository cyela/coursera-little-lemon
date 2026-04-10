import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <header>
        <section className="CallToAction py-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="display-3 fw-bold mb-2">Little Lemon</h1>
                <h2 className="h3 text-muted mb-4">Chicago</h2>
                <p className="lead mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link to="/booking" className="btn btn-dark btn-lg">Reserve a Table</Link>
              </div>
              <div className="col-lg-6">
                <div className="cta-image-placeholder">
                  <img 
                    src="callToActionLogo.jpg" 
                    alt="Little Lemon Chicago" 
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;