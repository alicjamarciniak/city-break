import { render, screen } from '@testing-library/react';
import ExampleSwiper from '@/app/[locale]/(home)/_sections/examples/ExampleSwiper';
import { mockAdventures } from '@/__mocks__/mockAdventures';
import { describe, it, expect } from 'vitest';

describe('ExampleSwiper', () => {
  it('renders all slides', () => {
    render(<ExampleSwiper slides={mockAdventures} />);
    expect(screen.getAllByTestId('slide')).toHaveLength(2);
    expect(screen.getByText('Mountain Hike')).toBeInTheDocument();
    expect(screen.getByText('Beach Dive')).toBeInTheDocument();
  });

  it('renders images and avatars correctly', () => {
    render(<ExampleSwiper slides={mockAdventures} />);

    const avatars = screen.getAllByTestId('mock-avatar-img');

    expect(avatars[0]).toBeInTheDocument();
    expect(avatars[0]).toHaveAttribute(
      'src',
      'https://test.org/img/avatar-mira.jpg',
    );
    expect(avatars[0]).toHaveAttribute('alt', 'Mira Avatar');

    expect(avatars[1]).toBeInTheDocument();
    expect(avatars[1]).toHaveAttribute(
      'src',
      'https://test.org/img/anna-horn.jpg',
    );
    expect(avatars[1]).toHaveAttribute('alt', 'Anna Horn');
  });
});
