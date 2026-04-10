/* global submitAPI */
/* global fetchAPI */
import { useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import './Main.css';

// Default fallback times
const defaultTimes = [
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00'
];

// Initialize times for the available time slots
const initializeTimes = () => {
  // Return default times initially
  return defaultTimes;
};

// Reducer function to update times based on available times
const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    const times = action.payload;
    return times || state;
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();

  // Fetch times for today when component mounts
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    
    setSelectedDate(dateString);
  }, []);

  // Fetch times whenever the selected date changes
  useEffect(() => {
    if (!selectedDate) return;

    try {
      if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
        const times = window.fetchAPI(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
      } else {
        dispatch({ type: 'UPDATE_TIMES', payload: defaultTimes });
      }
    } catch (error) {
      console.error('Error fetching times:', error);
      dispatch({ type: 'UPDATE_TIMES', payload: defaultTimes });
    }
  }, [selectedDate]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const submitForm = (formData) => {
    if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
      try {
        const success = window.submitAPI(formData);
        if (success) {
          console.log('Booking submitted successfully');
          // Store booking data in local storage
          localStorage.setItem('bookingData', JSON.stringify(formData));
          navigate('/confirmed-booking');
        } else {
          console.error('Booking submission failed');
          alert('Booking submission failed. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting booking:', error);
        alert('Error submitting booking. Please try again.');
      }
    } else {
      console.error('submitAPI is not available');
      alert('Error: Booking system is not initialized. Please try again later.');
    }
  };

  return (
    <div className="Main">
      <BookingPage 
        availableTimes={availableTimes} 
        onDateChange={handleDateChange}
        onSubmit={submitForm}
      />
    </div>
  );
}

export default Main;