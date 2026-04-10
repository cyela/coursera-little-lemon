import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import Main from './Main';
import ConfirmedBooking from './ConfirmedBooking';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <main className="AppContent">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<Main />} />
            <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
