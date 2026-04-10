import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    // Retrieve booking data from local storage
    const savedBooking = localStorage.getItem('bookingData');
    if (savedBooking) {
      setBookingData(JSON.parse(savedBooking));
    }
  }, []);

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${period}`;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', options);
  };

  return (
    <div className="container-fluid confirmed-booking">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="confirmed-card shadow-lg mx-auto">
            <div className="card-body p-5 text-center">
              <div className="success-icon mb-4">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <h1 className="display-4 text-success mb-3">Booking Confirmed!</h1>
              <p className="lead mb-4">
                Thank you for your reservation at Little Lemon. Your booking has been confirmed.
              </p>
              
              {bookingData && (
                <div className="booking-details mb-4">
                  <h5 className="text-start mb-3">Booking Details:</h5>
                  <div className="detail-item text-start mb-2">
                    <strong>Name:</strong> {bookingData.firstName} {bookingData.lastName}
                  </div>
                  <div className="detail-item text-start mb-2">
                    <strong>Email:</strong> {bookingData.email}
                  </div>
                  <div className="detail-item text-start mb-2">
                    <strong>Phone:</strong> {bookingData.phone}
                  </div>
                  <div className="detail-item text-start mb-2">
                    <strong>Date:</strong> {formatDate(bookingData.date)}
                  </div>
                  <div className="detail-item text-start mb-2">
                    <strong>Time:</strong> {formatTime(bookingData.time)}
                  </div>
                  <div className="detail-item text-start mb-2">
                    <strong>Guests:</strong> {bookingData.guests} {bookingData.guests === 1 ? 'guest' : 'guests'}
                  </div>
                  <div className="detail-item text-start mb-2">
                    <strong>Seating:</strong> {bookingData.seating.charAt(0).toUpperCase() + bookingData.seating.slice(1)}
                  </div>
                  {bookingData.occasion && (
                    <div className="detail-item text-start mb-2">
                      <strong>Occasion:</strong> {bookingData.occasion === 'other' ? bookingData.occasionDetails : bookingData.occasion.charAt(0).toUpperCase() + bookingData.occasion.slice(1)}
                    </div>
                  )}
                </div>
              )}

              <p className="text-muted mb-4">
                A confirmation email has been sent to <strong>{bookingData?.email}</strong>
              </p>
              <p className="text-muted mb-4">
                We look forward to welcoming you!
              </p>
              <a href="/" className="btn btn-primary btn-lg">
                Return to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
