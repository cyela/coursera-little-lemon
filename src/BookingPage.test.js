import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { validateForm } from './utils/validation';

describe('BookingPage - UI Tests', () => {

  test('renders heading', () => {
    render(<BookingPage availableTimes={['17:00']} onDateChange={() => {}} />);
    expect(screen.getByText('Book a Table')).toBeInTheDocument();
  });

  test('renders description', () => {
    render(<BookingPage availableTimes={['17:00']} onDateChange={() => {}} />);
    expect(
      screen.getByText(/Please fill out the form/i)
    ).toBeInTheDocument();
  });

  test('renders all inputs', () => {
    render(<BookingPage availableTimes={['17:00']} onDateChange={() => {}} />);

    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Preferred Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Preferred Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests')).toBeInTheDocument();
  });

  test('renders seating options', () => {
    render(<BookingPage availableTimes={['17:00']} onDateChange={() => {}} />);

    expect(screen.getByLabelText('Indoor')).toBeInTheDocument();
    expect(screen.getByLabelText('Outdoor')).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<BookingPage availableTimes={['17:00']} onDateChange={() => {}} />);

    expect(screen.getByRole('button', { name: /submit booking/i }))
      .toBeInTheDocument();
  });
});

describe('validateForm - Logic Tests', () => {

  test('returns true for valid data', () => {
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com',
      phone: '1234567890',
      date: '2026-04-10',
      time: '17:00',
      guests: 2
    };

    expect(validateForm(data)).toBe(true);
  });

  test('returns false for invalid data', () => {
    const data = {
      firstName: 'J',
      lastName: '',
      email: 'wrong',
      phone: '123',
      date: '',
      time: '',
      guests: 0
    };

    expect(validateForm(data)).toBe(false);
  });
});