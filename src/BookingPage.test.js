import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

describe('BookingPage Component - Static Text Rendering', () => {
  
  test('renders the main heading "Book a Table"', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const heading = screen.getByText('Book a Table');
    expect(heading).toBeInTheDocument();
  });

  test('renders the description text', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const description = screen.getByText(/Please fill out the form below to reserve a table at Little Lemon/i);
    expect(description).toBeInTheDocument();
  });

  test('renders First Name label', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const firstNameLabel = screen.getByLabelText('First Name');
    expect(firstNameLabel).toBeInTheDocument();
  });

  test('renders Last Name label', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const lastNameLabel = screen.getByLabelText('Last Name');
    expect(lastNameLabel).toBeInTheDocument();
  });

  test('renders Email label', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const emailLabel = screen.getByLabelText('Email');
    expect(emailLabel).toBeInTheDocument();
  });

  test('renders Phone Number label', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const phoneLabel = screen.getByLabelText('Phone Number');
    expect(phoneLabel).toBeInTheDocument();
  });

  test('renders Preferred Date label', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const dateLabel = screen.getByLabelText('Preferred Date');
    expect(dateLabel).toBeInTheDocument();
  });

  test('renders Preferred Time label', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const timeLabel = screen.getByLabelText('Preferred Time');
    expect(timeLabel).toBeInTheDocument();
  });

  test('renders Number of Guests label', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const guestsLabel = screen.getByLabelText('Number of Guests');
    expect(guestsLabel).toBeInTheDocument();
  });

  test('renders Seating Preference label', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const seatingLabel = screen.getByText('Seating Preference');
    expect(seatingLabel).toBeInTheDocument();
  });

  test('renders Indoor and Outdoor seating options', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const indoorOption = screen.getByLabelText('Indoor');
    const outdoorOption = screen.getByLabelText('Outdoor');
    expect(indoorOption).toBeInTheDocument();
    expect(outdoorOption).toBeInTheDocument();
  });

  test('renders Occasion label', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const occasionLabel = screen.getByLabelText('Occasion');
    expect(occasionLabel).toBeInTheDocument();
  });

  test('renders Submit Booking button', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const submitButton = screen.getByRole('button', { name: 'Submit Booking' });
    expect(submitButton).toBeInTheDocument();
  });

  test('renders all form input fields', () => {
    render(<BookingPage availableTimes={['17:00', '18:00', '19:00']} onDateChange={() => {}} />);
    const firstNameInput = screen.getByRole('textbox', { name: 'First Name' });
    const lastNameInput = screen.getByRole('textbox', { name: 'Last Name' });
    const emailInput = screen.getByRole('textbox', { name: 'Email' });
    const phoneInput = screen.getByRole('textbox', { name: 'Phone Number' });
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
  });
});
