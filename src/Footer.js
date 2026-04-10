import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="Footer">
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-md-2 mb-4 text-center ">
            <img src="footer.png" alt="Little Lemon Logo" className="footer-logo" />
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Door mat navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="footer-link">Home</Link></li>
              <li className="mb-2"><a href="#about" className="footer-link">About</a></li>
              <li className="mb-2"><a href="#menu" className="footer-link">Menu</a></li>
              <li className="mb-2"><Link to="/booking" className="footer-link">Reservations</Link></li>
              <li className="mb-2"><a href="#order" className="footer-link">Order online</a></li>
              <li className="mb-2"><a href="#login" className="footer-link">Login</a></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><strong>Address</strong></li>
              <li className="mb-2"><strong>Phone</strong></li>
              <li className="mb-2"><strong>Email</strong></li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Social Media Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Address</li>
              <li className="mb-2">Phone</li>
              <li className="mb-2">Email</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;