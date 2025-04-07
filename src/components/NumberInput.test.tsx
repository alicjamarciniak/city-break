import { render, screen, fireEvent } from '@testing-library/react';
import NumberInput from '@/components/NumberInput'; // Adjust path as needed
import { describe, it, expect } from 'vitest';

describe('NumberInput', () => {
  it('should render correctly', () => {
    render(<NumberInput />);

    expect(screen.getByRole('button', { name: /\+/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /-/ })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('1');
  });

  it('should increment the value when "+" button is clicked', () => {
    render(<NumberInput />);

    const incrementButton = screen.getByRole('button', { name: /\+/ });
    const input = screen.getByRole('textbox');

    fireEvent.click(incrementButton);
    expect(input).toHaveValue('2');
  });

  it('should decrement the value when "-" button is clicked', () => {
    render(<NumberInput />);

    const incrementButton = screen.getByRole('button', { name: /\+/ });
    const decrementButton = screen.getByRole('button', { name: /-/ });
    const input = screen.getByRole('textbox');

    fireEvent.click(incrementButton);
    expect(input).toHaveValue('2');

    fireEvent.click(decrementButton);
    expect(input).toHaveValue('1');
  });

  it('should disable the "-" button when value is 1', () => {
    render(<NumberInput />);

    const decrementButton = screen.getByRole('button', { name: /-/ });

    expect(decrementButton).toBeDisabled();
  });
});
