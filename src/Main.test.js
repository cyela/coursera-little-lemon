import { render, screen, waitFor, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';

/* =========================
   MOCKS (must be FIRST)
========================= */

// Mock react-router-dom BEFORE usage
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Mock API functions
const mockFetchAPI = jest.fn(() => ['17:00', '18:00', '19:00']);
const mockSubmitAPI = jest.fn(() => true);

// Global API mocks
window.fetchAPI = mockFetchAPI;
window.submitAPI = mockSubmitAPI;

/* =========================
   HELPERS
========================= */

const renderWithRouter = (ui) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

/* =========================
   RESET MOCKS
========================= */

beforeEach(() => {
  jest.clearAllMocks();

  mockFetchAPI.mockReturnValue(['17:00', '18:00', '19:00']);
  mockSubmitAPI.mockReturnValue(true);

  window.fetchAPI = mockFetchAPI;
  window.submitAPI = mockSubmitAPI;
});

afterEach(() => {
  window.fetchAPI = undefined;
  window.submitAPI = undefined;
});

/* =========================
   TESTS
========================= */

describe('initializeTimes Function', () => {
  test('renders time slots', async () => {
    renderWithRouter(<Main />);

    await waitFor(() => {
      expect(screen.getByLabelText('Preferred Time')).toBeInTheDocument();
    });
  });

  test('calls fetchAPI with today date', async () => {
    const today = new Date();
    const expectedDate = today.toISOString().split('T')[0];

    renderWithRouter(<Main />);

    await waitFor(() => {
      expect(mockFetchAPI).toHaveBeenCalledWith(expectedDate);
    });
  });

  test('displays fetched times', async () => {
    renderWithRouter(<Main />);

    await waitFor(() => {
      const timeSelect = screen.getByLabelText('Preferred Time');
      const options = within(timeSelect).getAllByRole('option');
      expect(options.length).toBeGreaterThan(1);
    });
  });

  test('uses fallback if API missing', async () => {
    window.fetchAPI = undefined;

    renderWithRouter(<Main />);

    await waitFor(() => {
      const timeSelect = screen.getByLabelText('Preferred Time');
      expect(within(timeSelect).getAllByRole('option').length).toBeGreaterThan(1);
    });
  });
});

/* =========================
   UPDATE TIMES
========================= */

describe('updateTimes Function', () => {
  test('calls fetchAPI when date changes', async () => {
    renderWithRouter(<Main />);

    await waitFor(() => {
      expect(screen.getByLabelText('Preferred Date')).toBeInTheDocument();
    });

    const dateInput = screen.getByLabelText('Preferred Date');

    fireEvent.change(dateInput, {
      target: { value: '2026-04-15' },
    });

    await waitFor(() => {
      expect(mockFetchAPI).toHaveBeenCalledWith('2026-04-15');
    });
  });

  test('updates times on new date', async () => {
    mockFetchAPI
      .mockReturnValueOnce(['17:00', '18:00'])
      .mockReturnValueOnce(['18:00', '19:00']);

    renderWithRouter(<Main />);

    const dateInput = await screen.findByLabelText('Preferred Date');

    fireEvent.change(dateInput, {
      target: { value: '2026-04-20' },
    });

    await waitFor(() => {
      expect(mockFetchAPI).toHaveBeenCalledTimes(2);
    });
  });

  test('keeps previous times if API fails', async () => {
    renderWithRouter(<Main />);

    const timeSelect = await screen.findByLabelText('Preferred Time');
    const initialCount = within(timeSelect).getAllByRole('option').length;

    mockFetchAPI.mockImplementation(() => {
      throw new Error('API Error');
    });

    const dateInput = screen.getByLabelText('Preferred Date');

    fireEvent.change(dateInput, {
      target: { value: '2026-04-25' },
    });

    await waitFor(() => {
      const updatedCount =
        within(screen.getByLabelText('Preferred Time')).getAllByRole('option')
          .length;

      expect(updatedCount).toBeGreaterThanOrEqual(initialCount);
    });
  });
});

/* =========================
   COMPONENT TESTS
========================= */

describe('Main Component', () => {
  test('renders booking page', async () => {
    renderWithRouter(<Main />);

    await waitFor(() => {
      expect(screen.getByText('Book a Table')).toBeInTheDocument();
    });
  });

  test('passes data correctly', async () => {
    renderWithRouter(<Main />);

    await waitFor(() => {
      expect(screen.getByLabelText('Preferred Time')).toBeInTheDocument();
    });
  });
});