import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <nav>
        <ul>
          <li><img src="logo-nav.jpg" alt="Little Lemon Logo" /></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;