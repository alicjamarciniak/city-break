import { render, screen, fireEvent, within } from '@testing-library/react';
import DatePicker from '@/components/DatePicker';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next-intl', () => ({
  useLocale: vi.fn(() => 'en'),
}));

vi.mock('@/i18n/dateLocaleMapper', () => ({
  getDateLocale: vi.fn(() => undefined),
}));

describe('DatePicker', () => {
  it('should render the date picker button with default date range', () => {
    render(<DatePicker />);

    const button = screen.getByRole('button', { name: /jan 20, 2022/i });
    expect(button).toBeInTheDocument();
  });

  it('should open the calendar when the button is clicked', () => {
    render(<DatePicker />);

    const button = screen.getByRole('button', { name: /jan 20, 2022/i });
    fireEvent.click(button);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should select a date range and update the button text', () => {
    render(<DatePicker />);

    const button = screen.getByRole('button', { name: /jan 20, 2022/i });
    fireEvent.click(button);

    const calendar = screen.getByRole('dialog');
    const firstDate = within(calendar).getAllByText('22')[0];
    const secondDate = within(calendar).getAllByText('25')[0];
    fireEvent.click(firstDate);
    fireEvent.click(secondDate);

    expect(button).toHaveTextContent(/jan 20, 2022 - jan 25, 2022/i);
  });
});
