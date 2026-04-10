// Mock API for restaurant booking

// Available times for each date
const availableTimesByDate = {
  '2026-04-10': ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'],
  '2026-04-11': ['17:00', '18:00', '19:00', '20:00', '21:00'],
  '2026-04-12': ['17:30', '18:30', '19:30', '20:30'],
  '2026-04-13': ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'],
  '2026-04-14': ['17:00', '19:00', '20:00', '21:00'],
  '2026-04-15': ['17:30', '18:30', '19:30', '20:30', '21:30'],
};

// Fetch available times for a given date
function fetchAPI(date) {
  console.log('API: fetchAPI called with date:', date);
  
  // Check if we have times for this date
  if (availableTimesByDate[date]) {
    console.log('API: Returning times for', date, ':', availableTimesByDate[date]);
    return availableTimesByDate[date];
  }
  
  // Return default times if date not found
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
  console.log('API: Date not in predefined list, returning default times');
  return defaultTimes;
}

// Submit booking form data
function submitAPI(formData) {
  console.log('API: submitAPI called with data:', formData);
  
  // Validate that all required fields are present
  if (!formData.firstName || !formData.lastName || !formData.email || 
      !formData.phone || !formData.date || !formData.time) {
    console.error('API: Missing required fields');
    return false;
  }
  
  // Simulate successful submission
  console.log('API: Booking submitted successfully');
  console.log('Booking Details:', {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    phone: formData.phone,
    date: formData.date,
    time: formData.time,
    guests: formData.guests,
    seating: formData.seating,
    occasion: formData.occasion,
    occasionDetails: formData.occasionDetails
  });
  
  return true;
}

// Make functions globally available
window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;

console.log('API module loaded successfully');
