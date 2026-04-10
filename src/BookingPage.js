/* global submitAPI */
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingPage.css';

function BookingPage({ availableTimes = [], onDateChange = () => {}, onSubmit = () => {} }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: 1,
    date: '',
    time: '',
    seating: 'indoor',
    occasion: '',
    occasionDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Call onDateChange when date changes
    if (name === 'date') {
      onDateChange(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call the submit handler passed from parent component
    onSubmit(formData);
  };

  // Helper function to convert 24-hour time format to 12-hour format
  const formatTimeDisplay = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${period}`;
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="booking-card shadow-lg mx-auto" style={{maxWidth: '800px'}}>
            <div className="card-body p-4">
              <h1 className="card-title text-center mb-4 display-5 text-white">Book a Table</h1>
              <p className="text-center mb-4 lead text-light">Please fill out the form below to reserve a table at Little Lemon.</p>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="firstName" className="form-label fw-bold text-white">First Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="lastName" className="form-label fw-bold text-white">Last Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold text-white">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label fw-bold text-white">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control form-control-lg bg-light"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-4 mb-4">
                    <label htmlFor="date" className="form-label fw-bold text-white">Preferred Date</label>
                    <input
                      type="date"
                      className="form-control form-control-lg bg-light"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-4">
                    <label htmlFor="time" className="form-label fw-bold text-white">Preferred Time</label>
                    <select
                      className="form-select form-select-lg bg-light"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {formatTimeDisplay(time)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-4 mb-4">
                    <label htmlFor="guests" className="form-label fw-bold text-white">Number of Guests</label>
                    <select
                      className="form-select form-select-lg bg-light"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold text-white">Seating Preference</label>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="seating"
                      id="indoor"
                      value="indoor"
                      checked={formData.seating === 'indoor'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label fs-5 text-white" htmlFor="indoor">
                      Indoor
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="seating"
                      id="outdoor"
                      value="outdoor"
                      checked={formData.seating === 'outdoor'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label fs-5 text-white" htmlFor="outdoor">
                      Outdoor
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="occasion" className="form-label fw-bold text-white">Occasion</label>
                  <select
                    className="form-select form-select-lg bg-light"
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                  >
                    <option value="">Select an occasion (optional)</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {formData.occasion === 'other' && (
                  <div className="mb-4">
                    <label htmlFor="occasionDetails" className="form-label fw-bold text-white">Please specify the occasion</label>
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light"
                      id="occasionDetails"
                      name="occasionDetails"
                      placeholder="e.g., Engagement party, Business dinner"
                      value={formData.occasionDetails}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}

                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-warning btn-lg py-3 text-dark fw-bold" aria-label="On Click">Submit Booking</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
